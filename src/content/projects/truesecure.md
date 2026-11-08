---
title: TrueSecure
summary: Real-time chat with voice and video calls, end-to-end encryption, and deepfake detection on live video streams.
year: 2024
role: Full stack
stack: [React, NestJS, TypeScript, WebRTC, Socket.IO, PostgreSQL, Redis, RabbitMQ, FastAPI, PyTorch]
order: 1
featured: true
pattern: orbits
repo: https://github.com/SonHoang2/TrueSecure
---

## Overview

TrueSecure supports private and group messaging plus voice and video calls. It analyzes video streams in real time to detect deepfakes and help prevent scam calls.

## Architecture

The backend is a modular NestJS monolith with auth, user, conversation, socket and deepfake modules. Deepfake detection runs as a separate FastAPI service called over HTTP, so the heavy PyTorch workload can be deployed and scaled independently.

- Socket.IO for real-time messaging, WebRTC for peer-to-peer media
- RabbitMQ with durable per-user queues for offline delivery
- OpenCV, Facenet-PyTorch and Grad-CAM in the detection service

## Security

Messages are encrypted on the client with the Web Crypto API, using ECDH P-256 key exchange and AES-GCM-256. Group chats share a key encrypted per participant device and rotated by group epoch. This is a custom scheme, not the Signal Protocol.

Sign-in supports OAuth through Google, Facebook and GitHub, with automatic access token refresh.
