# LumoraAI Development Guide

## Vision

LumoraAI is an AI-powered movie creation platform that enables creators to build complete cinematic productions from a single prompt.

Users will be able to:

- Generate stories
- Write scripts
- Create scenes
- Design characters
- Generate AI images
- Generate AI videos
- Create voiceovers
- Generate music
- Edit movies
- Export productions

---

# Tech Stack

Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui

Backend

- Prisma ORM
- PostgreSQL (Neon)

Authentication

- Clerk

Deployment

- Vercel

Version Control

- Git
- GitHub

---

# Folder Structure

apps/
packages/
prisma/
public/

---

# Architecture

UI
↓

Validation
↓

Service Layer
↓

Repository Layer
↓

Prisma
↓

PostgreSQL

---

# Coding Standards

- TypeScript only
- Functional components
- Reusable components
- Server Components by default
- Client Components only when necessary
- No duplicated logic
- Keep files focused on one responsibility

---

# Git Workflow

Every feature follows:

Design

↓

Database

↓

Backend

↓

Frontend

↓

Testing

↓

Commit

---

# Commit Style

feat:

fix:

refactor:

docs:

style:

chore:

---

# Version Roadmap

v0.1 Foundation

v0.2 Authentication

v0.3 Dashboard

v0.4 AI Studio

v0.5 Project Engine

v0.6 Script Generator

v0.7 Character Studio

v0.8 Image Generator

v0.9 Video Generator

v1.0 Public Launch

---

# Long-term Goal

Become the world's best AI Movie Creation Platform.