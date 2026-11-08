---
title: Task Management
summary: A microservices task management platform built with Spring Boot and Angular, deployed to Kubernetes.
year: 2026
role: Full stack
stack: [Java 21, Spring Boot, Angular, PostgreSQL, Redis, RabbitMQ, Kubernetes, Prometheus, Grafana]
order: 2
featured: true
pattern: grid
repo: https://github.com/SonHoang2/TaskManagement
---

## Overview

The platform covers users, projects, tasks, sprints, notifications and an aggregated dashboard. Access is role-based, and tasks have comments, attachments and change history.

## Architecture

The Angular frontend goes through an API Gateway that handles JWT and Redis rate limiting, then reaches six services: user, project, task, sprint, notification and dashboard.

- One PostgreSQL database per service
- Services call each other with OpenFeign or WebClient, events travel through RabbitMQ
- Service discovery through Kubernetes Service DNS, no Eureka
- Shared error handling and rate limiting in a `common-lib` module

## Operations

It runs on Kubernetes (kind or k3s) with GitHub Actions CI/CD. Monitoring uses Prometheus, Alertmanager and Grafana. The repo also includes k6 load tests and a large-scale fake data generator.
