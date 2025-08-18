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

// ─── Middleware ──────────────────────────────────────────────────────────────
// Only allow your front-end origin to talk to this API:
app.use(cors({
  origin: 'https://vizxglobal.com',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'none'"],
      connectSrc: ["'self'"],
      upgradeInsecureRequests: []
    }
  })
);

// ─── Environment Check ────────────────────────────────────────────────────────
console.log('Environment check:');
console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('SMTP_HOST:', process.env.SMTP_HOST);

// ─── MongoDB Connection ───────────────────────────────────────────────────────
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) throw new Error('MONGODB_URI is not defined');

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// ─── BlogPost Schema & Model ─────────────────────────────────────────────────
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

// ─── Utility: SSRF-safe URL check ─────────────────────────────────────────────
function isSafeURL(targetUrl) {
  try {
    const url = new NodeURL(targetUrl);
    const hostname = url.hostname;
    const unsafePatterns = [
      /^127\./,
      /^10\./,
      /^192\.168\./,
      /^172\.(1[6-9]|2[0-9]|3[0-1])\./,
      /^localhost$/
    ];
    return !unsafePatterns.some(pattern => pattern.test(hostname));
  } catch {
    return false;
  }
}

// ─── Routes ────────────────────────────────────────────────────────────────────

// GET all posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await BlogPost.find().sort({ date: -1 }).lean();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching posts' });
  }
});

// GET post by ID
app.get('/posts/:id', async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid post ID format' });
  }
  try {
    const post = await BlogPost.findById(id).lean();
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching post' });
  }
});

// POST create a new post
app.post('/posts', async (req, res) => {
  try {
    const { title, excerpt, content, image, author, categories } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required.' });
    }
    const newPost = new BlogPost({
      title: validator.escape(title),
      excerpt: excerpt ? validator.escape(excerpt) : '',
      content: validator.escape(content),
      image: image ? validator.escape(image) : '',
      author: author ? validator.escape(author) : '',
      categories: Array.isArray(categories)
        ? categories.map(cat => validator.escape(cat))
        : []
    });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ error: 'Error creating post' });
  }
});

// POST safe-fetch (SSRF-safe)
app.post('/safe-fetch', async (req, res) => {
  const { url } = req.body;
  if (!url || !isSafeURL(url)) {
    return res.status(400).json({ error: 'Unsafe or invalid URL provided.' });
  }
  // Placeholder for fetch logic
  res.json({ message: 'URL is validated and would be safely fetched here.' });
});

// ─── Multer File Upload Setup ─────────────────────────────────────────────────
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, 'uploads/'),
  filename: (_req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const sanitized = file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, '');
    cb(null, `${uniqueSuffix}-${sanitized}`);
  }
});
const fileFilter = (_req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  cb(null, allowedTypes.includes(file.mimetype));
};
const upload = multer({ storage, fileFilter, limits: { fileSize: 2 * 1024 * 1024 } });

// POST file upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded or invalid file type.' });
  }
  res.json({
    message: 'File uploaded successfully!',
    fileName: req.file.filename
  });
});

// ─── reCAPTCHA-Protected Email Endpoint ────────────────────────────────────────
app.post('/api/send-email', async (req, res) => {
  let { name, phone, email, company, industry, services, message, consent, recaptchaToken } = req.body;

  // Verify reCAPTCHA
  if (!recaptchaToken) {
    return res.status(400).json({ message: 'Missing reCAPTCHA token.' });
  }
  try {
    const { data } = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      null,
      { params: { secret: process.env.RECAPTCHA_SECRET, response: recaptchaToken } }
    );
    if (!data.success) {
      return res.status(403).json({ message: 'Failed reCAPTCHA verification.' });
    }
  } catch (err) {
    console.error('reCAPTCHA error:', err);
    return res.status(500).json({ message: 'reCAPTCHA verification failed.' });
  }

  // Validate & sanitize inputs
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
        .map(([k]) => k === 'qualityControl'
          ? 'Quality Control / Compliance'
          : k.charAt(0).toUpperCase() + k.slice(1))
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

// ─── Start Server ──────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at https://vizx-backend.vercel.app/api on port ${PORT}`);
});
