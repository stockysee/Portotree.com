# PortoTree — Database Design

**Version:** 1.0  
**Project:** PortoTree  
**Database:** PostgreSQL (Supabase)

---

# 1. Database Principles

- UUID sebagai Primary Key
- Soft Delete untuk data penting
- Timestamp pada semua tabel
- Relasi menggunakan Foreign Key
- Mudah dikembangkan
- Optimized untuk PostgreSQL

---

# 2. Naming Convention

## Table

Gunakan plural.

Contoh:

```
users
profiles
resumes
projects
skills
```

---

## Column

Gunakan snake_case.

Contoh:

```
first_name
last_name
created_at
updated_at
```

---

## Primary Key

```
id
```

UUID

---

## Foreign Key

```
user_id

resume_id

project_id

certificate_id
```

---

# 3. Main Tables

## Authentication

```
users
profiles
sessions
```

---

## Resume

```
resumes
resume_templates
resume_sections
```

---

## Portfolio

```
portfolios
portfolio_sections
```

---

## Career

```
experiences
educations
skills
projects
certificates
references
```

---

## Public

```
public_profiles
social_links
```

---

## Analytics

```
profile_views
resume_downloads
qr_scans
visitor_logs
```

---

## Premium

```
subscriptions
payments
orders
```

---

## Content

```
articles
categories
tags
templates
```

---

## System

```
notifications
settings
audit_logs
```

---

# 4. Core Table Relationships

```
users
 │
 ├── profiles
 │
 ├── resumes
 │      └── resume_sections
 │
 ├── portfolios
 │      └── portfolio_sections
 │
 ├── experiences
 │
 ├── educations
 │
 ├── skills
 │
 ├── projects
 │
 ├── certificates
 │
 ├── references
 │
 ├── social_links
 │
 ├── subscriptions
 │
 └── payments
```

---

# 5. Common Columns

Semua tabel minimal memiliki:

```
id

created_at

updated_at
```

Data penting juga memiliki:

```
deleted_at
```

(Soft Delete)

---

# 6. User Table

Menyimpan akun pengguna.

Contoh field:

```
id

email

password

role

status

created_at

updated_at
```

---

# 7. Profile Table

Data profil utama.

```
user_id

username

first_name

last_name

headline

bio

avatar

location

website
```

---

# 8. Resume Table

```
user_id

title

template

language

visibility

status
```

---

# 9. Portfolio Table

```
user_id

title

slug

theme

published
```

---

# 10. Experience Table

```
user_id

company

position

employment_type

start_date

end_date

description
```

---

# 11. Education Table

```
user_id

institution

degree

major

start_date

end_date
```

---

# 12. Skill Table

```
user_id

name

category

level

years
```

---

# 13. Project Table

```
user_id

title

description

github_url

demo_url

thumbnail

featured
```

---

# 14. Certificate Table

```
user_id

name

issuer

credential_id

credential_url

issue_date
```

---

# 15. Social Links

```
user_id

platform

url
```

Contoh platform:

- LinkedIn
- GitHub
- Behance
- Dribbble
- X
- Instagram
- Facebook

---

# 16. Analytics Tables

Profile Views

```
profile_id

country

device

referrer

created_at
```

---

Resume Downloads

```
resume_id

country

device
```

---

QR Scan

```
resume_id

country

device
```

---

# 17. Payment Tables

Subscription

```
user_id

plan

status

start_date

end_date
```

Payment

```
user_id

provider

amount

currency

status
```

Order

```
user_id

type

total

status
```

---

# 18. Settings Table

```
user_id

language

timezone

theme

email_notification
```

---

# 19. Notification Table

```
user_id

title

message

type

is_read
```

---

# 20. Enum Recommendation

Role

```
user

premium

admin

recruiter
```

---

Status

```
draft

published

archived
```

---

Visibility

```
public

private

unlisted
```

---

Payment Status

```
pending

paid

failed

expired

refunded
```

---

Subscription

```
free

premium

enterprise
```

---

# 21. Index Recommendation

Index yang disarankan:

```
email

username

slug

user_id

created_at

status
```

---

# 22. File Storage

Cloudinary

Folder:

```
avatars/

certificates/

resume/

portfolio/

projects/

exports/
```

Database hanya menyimpan URL file.

---

# 23. Soft Delete

Gunakan:

```
deleted_at
```

Jangan langsung menghapus data penting seperti:

- Resume
- Portfolio
- Project
- Certificate

---

# 24. Audit Fields

Semua tabel penting memiliki:

```
created_at

updated_at

deleted_at
```

Future:

```
created_by

updated_by
```

---

# 25. Future Tables

Untuk pengembangan selanjutnya:

```
companies

jobs

applications

recruiters

teams

interviews

career_notes

salary_records

ats_reports

resume_scores

marketplace

reviews

messages

workspaces
```

---

# 26. Database Best Practices

- Gunakan UUID untuk semua Primary Key.
- Hindari menyimpan file di database.
- Simpan hanya URL file.
- Gunakan Foreign Key untuk menjaga integritas data.
- Hindari duplikasi data.
- Gunakan Index pada kolom yang sering dicari.
- Gunakan Soft Delete untuk data penting.
- Pisahkan data sistem dan data pengguna.
- Siapkan struktur database agar mudah dikembangkan ke fitur Recruiter, Hiring, dan Marketplace.

---

# 27. Estimated Database Scale

MVP:

- ±25 tabel

Versi 2:

- ±40 tabel

Full Career Ecosystem:

- ±60–80 tabel

Arsitektur ini cukup fleksibel untuk berkembang tanpa perlu melakukan perubahan besar pada struktur database di masa depan.