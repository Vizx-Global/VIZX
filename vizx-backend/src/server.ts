// vizx-backend/src/server.ts

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const nodemailer = require('nodemailer');
const helmet = require('helmet');
const validator = require('validator');
const { URL: NodeURL } = require('url');
const axios = require('axios');
const multer = require('multer');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const app = express();

/* ───────────────────────────── Middleware ───────────────────────────── */

// Allow prod + local dev + (optional) preview frontends
const allowedOrigins = new Set<string>([
  'https://vizxglobal.com',
  'https://www.vizxglobal.com',
  'http://localhost:3000',
  // add preview/staging frontends if you use them:
  'https://vizx-backend.vercel.app/'
]);

// helpful for caches/proxies when Origin varies
app.use((_, res, next) => { res.setHeader('Vary', 'Origin'); next(); });

app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.has(origin)) return cb(null, true);
    return cb(new Error(`CORS not allowed for origin: ${origin}`));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

// Make sure preflight OPTIONS requests are answered
app.options('*', cors());



/* ─────────────────────── Environment Check (debug) ──────────────────── */
console.log('Environment check:');
console.log('MONGODB_URI:', !!process.env.MONGODB_URI ? '[set]' : '[missing]');
console.log('SMTP_HOST:', process.env.SMTP_HOST || '[missing]');
console.log('IBM_API_KEY:', !!process.env.IBM_API_KEY ? '[set]' : '[missing]');
console.log('IBM_DEPLOYMENT_URL:', process.env.IBM_DEPLOYMENT_URL || '[missing]');

/* ───────────────────────── MongoDB Connection ───────────────────────── */
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) throw new Error('MONGODB_URI is not defined');

mongoose
  // @ts-ignore legacy opts ok for CommonJS
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err: any) => console.error('MongoDB connection error:', err));

/* ───────────────────── BlogPost Schema & Model ──────────────────────── */
const blogPostSchema = new mongoose.Schema({
  title: String,
  excerpt: String,
  content: String,
  image: String,
  date: { type: Date, default: Date.now },
  author: String,
  categories: [String]
});
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

/* ─────────────────────── SSRF-safe URL utility ──────────────────────── */
function isSafeURL(targetUrl: string) {
  try {
    const url = new NodeURL(targetUrl);
    const hostname = url.hostname;
    const unsafe = [
      /^127\./, /^10\./, /^192\.168\./,
      /^172\.(1[6-9]|2[0-9]|3[0-1])\./, /^localhost$/
    ];
    return !unsafe.some(p => p.test(hostname));
  } catch {
    return false;
  }
}

/* ───────────────────────────── Blog Routes ──────────────────────────── */
app.get('/posts', async (_req, res) => {
  try {
    const posts = await BlogPost.find().sort({ date: -1 }).lean();
    res.json(posts);
  } catch {
    res.status(500).json({ error: 'Error fetching posts' });
  }
});

app.get('/posts/:id', async (req, res) => {
  const { id } = req.params as { id: string };
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid post ID format' });
  }
  try {
    const post = await BlogPost.findById(id).lean();
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch {
    res.status(500).json({ error: 'Error fetching post' });
  }
});

app.post('/posts', async (req, res) => {
  try {
    const { title, excerpt, content, image, author, categories } = req.body || {};
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required.' });
    }
    const newPost = new BlogPost({
      title: validator.escape(title),
      excerpt: excerpt ? validator.escape(excerpt) : '',
      content: validator.escape(content),
      image: image ? validator.escape(image) : '',
      author: author ? validator.escape(author) : '',
      categories: Array.isArray(categories) ? categories.map((c: string) => validator.escape(c)) : []
    });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch {
    res.status(500).json({ error: 'Error creating post' });
  }
});

/* ─────────────────────────── Safe Fetch Route ───────────────────────── */
app.post('/safe-fetch', async (req, res) => {
  const { url } = req.body || {};
  if (!url || !isSafeURL(url)) {
    return res.status(400).json({ error: 'Unsafe or invalid URL provided.' });
  }
  res.json({ message: 'URL is validated and would be safely fetched here.' });
});

/* ─────────────────────────── File Uploads ───────────────────────────── */
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, 'uploads/'),
  filename: (_req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const sanitized = file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, '');
    cb(null, `${unique}-${sanitized}`);
  }
});
const fileFilter = (_req: any, file: any, cb: any) => {
  const allowed = ['image/jpeg', 'image/png', 'application/pdf'];
  cb(null, allowed.includes(file.mimetype));
};
const upload = multer({ storage, fileFilter, limits: { fileSize: 2 * 1024 * 1024 } });

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded or invalid file type.' });
  res.json({ message: 'File uploaded successfully!', fileName: req.file.filename });
});

/* ───────────────────── Contact Email (reCAPTCHA) ────────────────────── */
app.post('/api/send-email', async (req, res) => {
  let { name, phone, email, company, industry, services, message, consent, recaptchaToken } = req.body || {};

  if (!recaptchaToken) return res.status(400).json({ message: 'Missing reCAPTCHA token.' });

  try {
    const { data } = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      null,
      { params: { secret: process.env.RECAPTCHA_SECRET, response: recaptchaToken } }
    );
    if (!data.success) return res.status(403).json({ message: 'Failed reCAPTCHA verification.' });
  } catch (err) {
    console.error('reCAPTCHA error:', err);
    return res.status(500).json({ message: 'reCAPTCHA verification failed.' });
  }

  if (!name || !email || !message || consent !== true) {
    return res.status(400).json({ message: 'Missing required fields or consent.' });
  }

  name = validator.escape(name);
  phone = phone ? validator.escape(phone) : '';
  email = validator.normalizeEmail(email);
  company = company ? validator.escape(company) : '';
  industry = industry ? validator.escape(industry) : '';
  message = validator.escape(message);

  const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
  const smtpSecure = process.env.SMTP_SECURE === 'true';

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('SMTP configuration is missing.');
    return res.status(500).json({ message: 'Email server configuration error.' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: smtpPort,
    secure: smtpSecure,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  });

  const serviceList = services && typeof services === 'object'
    ? Object.entries(services)
        .filter(([, v]) => v)
        .map(([k]) => (k === 'qualityControl' ? 'Quality Control / Compliance' : k.charAt(0).toUpperCase() + k.slice(1)))
        .join(', ')
    : 'None specified';

  const mailOptions = {
    from: `"${name}" <${process.env.SMTP_USER}>`,
    replyTo: email,
    to: 'info@vizxglobal.com',
    subject: `New Callback Request from ${name} - VIZX Global`,
    html: `
      <p>You have received a new callback request:</p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
        <li><strong>Email:</strong> ${email}</li>
      </ul>
      <h3>Company & Industry</h3>
      <ul>
        <li><strong>Company:</strong> ${company || 'N/A'}</li>
        <li><strong>Industry:</strong> ${industry || 'N/A'}</li>
      </ul>
      <h3>Service Interest</h3>
      <p>${serviceList}</p>
      <h3>Message</h3>
      <p>${message}</p>
      <hr>
      <p><strong>Consent Given:</strong> Yes</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Form submitted successfully! We will get back to you shortly.' });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ message: 'Failed to send email. Please try again later.' });
  }
});

/* ─────────────────── IBM watsonx Chat Proxy (NEW) ──────────────────── */
const IBM_API_KEY = process.env.IBM_API_KEY;
const IBM_DEPLOYMENT_URL = process.env.IBM_DEPLOYMENT_URL; // use ai_service (non-stream) to start
let cachedToken: string | null = null;
let tokenExpiresAt = 0;

async function getIamToken(): Promise<string> {
  const now = Date.now();
  if (cachedToken && now < tokenExpiresAt - 60_000) return cachedToken;

  const tokenResp = await axios.post(
    'https://iam.cloud.ibm.com/identity/token',
    new URLSearchParams({
      grant_type: 'urn:ibm:params:oauth:grant-type:apikey',
      apikey: IBM_API_KEY as string
    }),
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' } }
  );

  cachedToken = tokenResp.data.access_token;
  const expiresIn = Number(tokenResp.data.expires_in ?? 3600);
  tokenExpiresAt = Date.now() + expiresIn * 1000;
  return cachedToken!;
}

/**
 * POST /api/chat
 * Body: { messages: [{ role: "system"|"user"|"assistant", content: string }, ...] }
 */
app.post('/api/chat', async (req, res) => {
  try {
    if (!IBM_API_KEY || !IBM_DEPLOYMENT_URL) {
      return res.status(500).json({ error: 'IBM configuration not set on server' });
    }

    const messages = Array.isArray(req.body?.messages) ? req.body.messages : [
      { role: 'system', content: 'You are Vizx Global’s helpful assistant.' },
      { role: 'user', content: String(req.body?.prompt || 'Hello!') }
    ];

    const token = await getIamToken();

    const upstream = await axios.post(
      IBM_DEPLOYMENT_URL,
      { messages }, // add extra params here if needed
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        timeout: 60_000
      }
    );

    res.status(200).json(upstream.data);
  } catch (err: any) {
    const status = err?.response?.status || 500;
    const data = err?.response?.data || { error: 'Upstream error' };
    console.error('watsonx proxy error:', status, data);
    res.status(status).json(data);
  }
});

/* ───────────────────────────── Start Server ─────────────────────────── */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at https://vizx-backend.vercel.app/api on port ${PORT}`);
});
