---
title: SecureDMS
summary: A mobile app for managing and sharing documents, with AES-256 encryption, role-based access and audit logs.
year: 2024
role: Full stack
stack: [React Native, Node.js, Express, PostgreSQL, Redis, Sequelize]
order: 3
featured: true
pattern: bars
repo: https://github.com/SonHoang2/SecureDMS
---

## Overview

SecureDMS stores, searches and shares documents securely. Each role has its own access level, and administrators can review detailed activity logs.

## Security

- All documents encrypted with AES-256
- Passwords hashed with bcrypt, with a 12 to 20 character strength policy
- JWT authentication, cookies set with `Secure`, `HttpOnly` and `SameSite`
- Rate limiting and strict CORS
- XSS protection, SQL injection prevention through Sequelize
- File type and size validation on upload
