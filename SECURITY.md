# 🛡️ Security Overview – VIZX Website Backend

This document outlines the security enhancements implemented in the VIZX Global backend to protect against common web vulnerabilities.

---

## ✅ Implemented Measures

### 1. Content Security Policy (CSP)
- **Implemented via**: Helmet middleware.
- **Purpose**: Prevents unauthorized script/style/image/font execution and loading.
- **Directives Enforced**: `default-src`, `script-src`, `style-src`, `img-src`, `font-src`, `object-src`, `upgradeInsecureRequests`.

---

### 2. Cross-Site Scripting (XSS) Protection
- All incoming user data is sanitized using the `validator` library.
- HTML-sensitive fields are escaped before storage or use in rendering.
- Emails are normalized to prevent injection or malformed input risks.

---

### 3. NoSQL Injection Hardening
- All MongoDB ObjectIds are validated with `mongoose.Types.ObjectId.isValid()`.
- Dangerous query patterns are avoided.
- Inputs are escaped before interacting with MongoDB.
- `.lean()` is used in safe, read-only queries.

---

### 4. Server-Side Request Forgery (SSRF) Prevention
- Introduced a strict URL validator that rejects:
  - `localhost`
  - `127.0.0.1`
  - `10.x.x.x`, `192.168.x.x`, `172.16.x.x` - `172.31.x.x`
- Created a `/safe-fetch` endpoint to demonstrate secure outbound request handling.

---

### 5. Email Sanitization
- All contact form fields are validated and sanitized before being passed to Nodemailer.
- Inputs are escaped and checked to avoid malicious email formatting.

---

### 6. HTTP Header Hardening with Helmet
- Adds:
  - `X-Content-Type-Options`
  - `X-Frame-Options`
  - `Strict-Transport-Security`
  - `Content-Security-Policy`
  - `X-DNS-Prefetch-Control`, and more

---

## 📌 Suggested Next Steps

- Add file upload validation and scanning.
- Implement brute-force/rate limiting on sensitive routes.
- Enable reporting for CSP violations (via `report-uri`).
- Ensure HTTPS and HSTS are enabled in production.

---

**Maintainer**: Mwaumba Mwafuga
**Last Updated**: May 2025