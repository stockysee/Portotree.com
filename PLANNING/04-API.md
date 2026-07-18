# PortoTree — API Specification

**Version:** 1.0  
**Project:** PortoTree

---

# 1. API Principles

- RESTful API
- JSON Response
- Secure
- Consistent
- Version Ready
- Authentication Required (Dashboard)

Base URL

```
/api
```

---

# 2. Authentication

## Register

```
POST /api/auth/register
```

Create new account.

---

## Login

```
POST /api/auth/login
```

---

## Logout

```
POST /api/auth/logout
```

---

## Forgot Password

```
POST /api/auth/forgot-password
```

---

## Reset Password

```
POST /api/auth/reset-password
```

---

## Current User

```
GET /api/auth/me
```

---

# 3. Profile

## Get Profile

```
GET /api/profile
```

---

## Update Profile

```
PUT /api/profile
```

---

## Upload Avatar

```
POST /api/profile/avatar
```

---

## Change Username

```
PUT /api/profile/username
```

---

# 4. Resume

## Get All Resume

```
GET /api/resumes
```

---

## Get Resume

```
GET /api/resumes/:id
```

---

## Create Resume

```
POST /api/resumes
```

---

## Update Resume

```
PUT /api/resumes/:id
```

---

## Delete Resume

```
DELETE /api/resumes/:id
```

---

## Duplicate Resume

```
POST /api/resumes/:id/duplicate
```

---

## Export PDF

```
GET /api/resumes/:id/pdf
```

---

## Export DOCX

```
GET /api/resumes/:id/docx
```

---

# 5. Portfolio

## Get Portfolio

```
GET /api/portfolio
```

---

## Create Portfolio

```
POST /api/portfolio
```

---

## Update Portfolio

```
PUT /api/portfolio/:id
```

---

## Delete Portfolio

```
DELETE /api/portfolio/:id
```

---

## Publish Portfolio

```
POST /api/portfolio/:id/publish
```

---

# 6. Experience

```
GET    /api/experiences

POST   /api/experiences

PUT    /api/experiences/:id

DELETE /api/experiences/:id
```

---

# 7. Education

```
GET    /api/educations

POST   /api/educations

PUT    /api/educations/:id

DELETE /api/educations/:id
```

---

# 8. Skills

```
GET    /api/skills

POST   /api/skills

PUT    /api/skills/:id

DELETE /api/skills/:id
```

---

# 9. Projects

```
GET    /api/projects

POST   /api/projects

PUT    /api/projects/:id

DELETE /api/projects/:id
```

---

## Upload Project Image

```
POST /api/projects/:id/images
```

---

# 10. Certificates

```
GET    /api/certificates

POST   /api/certificates

PUT    /api/certificates/:id

DELETE /api/certificates/:id
```

---

# 11. Social Links

```
GET    /api/social-links

POST   /api/social-links

PUT    /api/social-links/:id

DELETE /api/social-links/:id
```

---

# 12. Analytics

## Dashboard Analytics

```
GET /api/analytics
```

---

## Resume Views

```
GET /api/analytics/resume
```

---

## Portfolio Views

```
GET /api/analytics/portfolio
```

---

## QR Analytics

```
GET /api/analytics/qr
```

---

# 13. Public Profile

## View Public Profile

```
GET /api/public/:username
```

---

## Track Visit

```
POST /api/public/:username/view
```

---

# 14. Upload

## Upload File

```
POST /api/upload
```

---

## Delete File

```
DELETE /api/upload
```

---

# 15. Payment

## Create Checkout

```
POST /api/payments/checkout
```

---

## Payment Webhook

```
POST /api/payments/webhook
```

---

## Payment History

```
GET /api/payments
```

---

# 16. Subscription

## Current Plan

```
GET /api/subscription
```

---

## Upgrade

```
POST /api/subscription/upgrade
```

---

## Cancel

```
POST /api/subscription/cancel
```

---

# 17. Settings

## Get Settings

```
GET /api/settings
```

---

## Update Settings

```
PUT /api/settings
```

---

# 18. Admin (Future)

```
GET /api/admin/users

GET /api/admin/reports

GET /api/admin/payments

GET /api/admin/articles
```

---

# 19. Standard Response

## Success

```json
{
  "success": true,
  "message": "Success",
  "data": {}
}
```

---

## Error

```json
{
  "success": false,
  "message": "Something went wrong",
  "errors": []
}
```

---

# 20. HTTP Status Code

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 422 | Validation Error |
| 429 | Too Many Requests |
| 500 | Internal Server Error |

---

# 21. Authentication Rules

Dashboard API wajib login.

Gunakan:

- Supabase Auth
- JWT Session
- Middleware Protection

Public API tidak memerlukan login.

---

# 22. Validation

Semua request menggunakan:

- Zod Validation
- TypeScript Types
- Server-side Validation

---

# 23. Rate Limiting

Disarankan untuk endpoint:

- Login
- Register
- Forgot Password
- Upload
- Payment
- Public Tracking

---

# 24. API Versioning

Gunakan struktur:

```
/api/v1
```

Jika ada perubahan besar di masa depan:

```
/api/v2
```

---

# 25. Future APIs

- Recruiter API
- Company API
- Jobs API
- Applications API
- ATS Checker API
- Resume Score API
- Career Roadmap API
- Team Workspace API
- Marketplace API
- Public API
- Webhook API

---

# 26. API Development Principles

- Endpoint mudah dipahami.
- Gunakan HTTP Method yang sesuai.
- Response selalu konsisten.
- Hindari endpoint yang terlalu kompleks.
- Validasi dilakukan di server.
- Semua endpoint siap dikembangkan tanpa breaking changes besar.