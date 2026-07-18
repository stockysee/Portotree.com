# PortoTree — Deployment & Infrastructure

**Version:** 1.0  
**Project:** PortoTree

---

# 1. Infrastructure Overview

```
User
   │
   ▼
Cloudflare DNS
   │
   ▼
Vercel
   │
   ├── Next.js App
   ├── Server Actions
   └── API Routes
   │
   ▼
Supabase PostgreSQL
   │
   ├── Auth
   └── Database
   │
   ▼
Cloudinary
   │
   ▼
Resend / Stripe / PostHog
```

---

# 2. Main Services

| Service | Purpose |
|---------|---------|
| Vercel | Hosting |
| Supabase | Database & Authentication |
| Cloudinary | File Storage & Optimization |
| Resend | Email |
| PostHog | Analytics |
| Stripe | Global Payment |
| Midtrans | Indonesia Payment |
| GitHub | Source Code |

---

# 3. Domain Structure

```
portotree.com

www.portotree.com

app.portotree.com (optional)

api.portotree.com (future)

cdn.portotree.com (future)
```

---

# 4. Environment Variables

## App

```
NEXT_PUBLIC_APP_URL

NODE_ENV
```

---

## Supabase

```
NEXT_PUBLIC_SUPABASE_URL

NEXT_PUBLIC_SUPABASE_ANON_KEY

SUPABASE_SERVICE_ROLE_KEY
```

---

## Storage

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

CLOUDINARY_API_KEY

CLOUDINARY_API_SECRET
```

---

## Email

```
RESEND_API_KEY
```

---

## Analytics

```
NEXT_PUBLIC_POSTHOG_KEY
```

---

## Payment

```
STRIPE_SECRET_KEY

STRIPE_WEBHOOK_SECRET

MIDTRANS_SERVER_KEY
```

---

# 5. Git Branch Strategy

```
main

develop

feature/*
```

Example

```
feature/resume-builder

feature/profile

feature/payment
```

---

# 6. Git Workflow

```
Create Feature

↓

Develop

↓

Pull Request

↓

Review

↓

Merge

↓

Deploy
```

---

# 7. Deployment Flow

```
Push GitHub

↓

Vercel Build

↓

Deploy

↓

Production
```

---

# 8. File Storage

Cloudinary

Folder

```
avatars/

resume/

portfolio/

projects/

certificates/

exports/

temp/
```

---

# 9. Backup Strategy

Database

- Daily Backup

Storage

- Weekly Backup

Source Code

- GitHub

---

# 10. Security

- HTTPS
- SSL
- Environment Variables
- JWT Authentication
- Rate Limiting
- Input Validation
- Secure Cookies

---

# 11. Monitoring

Gunakan

- PostHog
- Vercel Analytics
- Sentry (Future)

Monitor

- Errors
- Performance
- Traffic
- API Response
- User Activity

---

# 12. Logging

Log

- Login
- Payment
- Upload
- Export
- Error
- API

---

# 13. Performance Optimization

- Next.js Image
- Lazy Loading
- Dynamic Import
- Code Splitting
- Cache Headers
- CDN
- Compression

---

# 14. Build Checklist

Sebelum deploy pastikan:

- [ ] Build Success
- [ ] TypeScript No Error
- [ ] ESLint Pass
- [ ] Environment Variables Lengkap
- [ ] Database Connected
- [ ] Storage Connected
- [ ] Email Working
- [ ] Payment Working

---

# 15. Production Checklist

- [ ] Domain Connected
- [ ] SSL Active
- [ ] Sitemap Generated
- [ ] Robots.txt
- [ ] Metadata
- [ ] Open Graph
- [ ] Google Search Console
- [ ] Google Analytics
- [ ] PostHog Active

---

# 16. Disaster Recovery

Jika terjadi masalah:

1. Rollback Deployment (Vercel)
2. Restore Database Backup
3. Restore File Storage
4. Verify Payment Webhook
5. Test Login & Core Features

---

# 17. Cost Estimation (MVP)

| Service | Plan |
|---------|------|
| Vercel | Free / Pro |
| Supabase | Free |
| Cloudinary | Free Tier |
| Resend | Free |
| GitHub | Free |
| PostHog | Free |

Perkiraan biaya awal dapat ditekan seminimal mungkin hingga produk mulai memperoleh pengguna dan pendapatan.

---

# 18. Future Infrastructure

Saat trafik meningkat:

```
Cloudflare CDN

↓

Load Balancer

↓

Vercel

↓

Separate API

↓

Dedicated Database

↓

Redis Cache

↓

Queue Worker
```

---

# 19. Deployment Principles

- Deploy kecil dan sering.
- Jangan deploy fitur yang belum selesai.
- Selalu test di Preview Deployment.
- Gunakan Environment Variables.
- Semua perubahan melalui Git.

---

# 20. Infrastructure Goals

- Cepat diakses secara global.
- Mudah di-scale.
- Biaya efisien.
- Aman.
- Mudah dipelihara.
- Siap berkembang menjadi Career Identity Platform berskala global.