# PortoTree — Software Architecture

**Version:** 1.0  
**Project:** PortoTree  
**Domain:** portotree.com

---

# 1. Architecture Goals

PortoTree dibangun sebagai **Modular Monolith** agar mudah dikembangkan, mudah di-maintain, dan siap berkembang menjadi platform besar tanpa kompleksitas microservices di awal.

Prinsip utama:

- Modular
- Scalable
- Maintainable
- Fast
- Secure
- Type Safe
- SEO Friendly
- Mobile First

---

# 2. Tech Stack

## Frontend

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion

---

## Backend

- Next.js Server Actions
- Route Handlers (API)

---

## Database

- Supabase PostgreSQL

---

## ORM

- Drizzle ORM

---

## Storage

- Cloudinary

Digunakan untuk:

- Resume PDF
- Images
- Certificates
- Avatar
- Portfolio Assets

---

## Authentication

- Supabase Auth

Provider:

- Email
- Google

Future:

- GitHub
- LinkedIn

---

## Email

- Resend

---

## Analytics

- PostHog

---

## Payment

- Stripe (Global)
- Midtrans (Indonesia)

---

## Deployment

- Vercel

---

# 3. High Level Architecture

```
Browser
      │
      ▼
Next.js App
      │
      ▼
Server Actions / API
      │
      ▼
Business Logic
      │
      ▼
Database / Storage
      │
      ▼
External Services
```

---

# 4. Folder Structure

```
src/

app/
components/
features/
lib/
server/
db/
hooks/
types/
utils/
styles/
config/
constants/
```

---

# 5. Feature Structure

Setiap fitur memiliki folder sendiri.

Contoh:

```
features/

resume/
portfolio/
projects/
education/
experience/
skills/
certificates/
analytics/
billing/
auth/
settings/
```

Di dalam setiap feature:

```
components/
actions/
services/
hooks/
types/
validation/
utils/
```

---

# 6. Routing

## Public

```
/

pricing

templates

blog

articles

career

guide

salary

u/[username]
```

---

## Dashboard

```
/dashboard

/resume

/portfolio

/projects

/certificates

/analytics

/settings

/billing
```

---

# 7. Authentication Flow

```
Login

↓

Supabase Auth

↓

Session

↓

Middleware

↓

Dashboard
```

---

# 8. Resume Flow

```
Create Resume

↓

Edit

↓

Auto Save

↓

Live Preview

↓

Export PDF

↓

Publish
```

---

# 9. Portfolio Flow

```
Create Portfolio

↓

Add Projects

↓

Add Skills

↓

Add Experience

↓

Publish

↓

Public URL
```

---

# 10. Upload Flow

```
Select File

↓

Validation

↓

Upload Cloudinary

↓

Save URL

↓

Database
```

---

# 11. Payment Flow

```
Checkout

↓

Stripe / Midtrans

↓

Webhook

↓

Verify Payment

↓

Activate Premium
```

---

# 12. Analytics Flow

```
Visitor

↓

Public Profile

↓

Track Event

↓

Database

↓

Dashboard
```

---

# 13. State Management

Server State

- TanStack Query

Client State

- Zustand

Form

- React Hook Form

Validation

- Zod

---

# 14. Security

- HTTPS
- JWT Session
- Input Validation
- SQL Injection Protection
- XSS Protection
- Rate Limiting
- CSRF Protection
- Secure Cookies
- Email Verification

---

# 15. Performance

Target:

- First Load < 2s
- Lighthouse > 90
- Mobile Optimized
- Lazy Loading
- Image Optimization
- Code Splitting

---

# 16. SEO

- Metadata API
- OpenGraph
- Twitter Card
- JSON-LD
- Sitemap
- Robots.txt
- Canonical URL

---

# 17. Responsive Design

Prioritas:

1. Mobile
2. Tablet
3. Desktop

---

# 18. External Services

| Service | Purpose |
|----------|---------|
| Supabase | Database & Auth |
| Cloudinary | File Storage & Optimization |
| Resend | Email |
| PostHog | Analytics |
| Stripe | Global Payment |
| Midtrans | Indonesia Payment |
| Vercel | Deployment |

---

# 19. Development Rules

- Gunakan TypeScript di semua file.
- Semua fitur dibuat modular.
- Hindari duplikasi kode.
- Semua form menggunakan Zod Validation.
- Semua query database melalui Drizzle ORM.
- Simpan business logic di `services`.
- Gunakan reusable component.
- Hindari hardcode.
- Gunakan environment variables untuk konfigurasi.

---

# 20. Future Scalability

Jika PortoTree berkembang besar, modul berikut dapat dipisahkan menjadi service terpisah:

- Authentication Service
- Resume Service
- Portfolio Service
- Analytics Service
- Recruiter Service
- Payment Service
- Notification Service

Namun untuk MVP, seluruh sistem tetap berjalan sebagai **Modular Monolith** agar lebih sederhana, cepat dikembangkan, dan mudah dipelihara.