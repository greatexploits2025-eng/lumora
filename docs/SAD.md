# Lumora — System Architecture Document (SAD)

## Architecture Overview
Lumora is a monorepo built with Turborepo, containing a Next.js 16 web application and shared packages.

## Monorepo Structure
```
Lumora/
├── apps/
│   ├── web/          # Main Next.js application
│   └── docs/         # Documentation site (Next.js)
├── packages/
│   ├── ui/           # Shared React component library
│   ├── eslint-config/
│   └── typescript-config/
└── docs/             # Project documentation
```

## Web App Architecture
```
apps/web/
├── app/              # Next.js App Router pages and layouts
├── components/       # Shared, reusable UI components
│   ├── ui/           # Primitives: Button, Card, Badge, etc.
│   ├── layout/       # Navbar, Footer
│   └── background/   # Animated backgrounds
├── features/         # Feature-scoped modules
│   ├── landing/
│   ├── showcase/
│   ├── auth/
│   ├── dashboard/
│   ├── image-generator/
│   ├── image-to-video/
│   ├── script-generator/
│   ├── voice-studio/
│   ├── talking-avatar/
│   └── movie-studio/
├── hooks/            # Shared React hooks
├── lib/              # Third-party client setup (e.g. API clients)
├── services/         # API service layer
├── types/            # Global TypeScript types
├── utils/            # Pure utility functions
├── theme/            # Design tokens
└── styles/           # Global styles
```

## Technology Stack
| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5.9 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Monorepo | Turborepo |
| Package Manager | pnpm |
| Deployment | Vercel (planned) |
| Auth | NextAuth.js (planned) |
| Database | Supabase / Postgres (planned) |
| AI APIs | OpenAI, Replicate, ElevenLabs (planned) |

## Data Flow (planned)
```
User Prompt
    ↓
Next.js API Route (/api/generate)
    ↓
Service Layer (services/ai.ts)
    ↓
AI Provider (OpenAI / Replicate)
    ↓
Response → Stored in DB
    ↓
Returned to Client
```

## Security Considerations
- All AI API keys stored server-side only (never exposed to client)
- Authentication required for all generation endpoints
- Rate limiting on API routes
- Input sanitization before sending to AI providers
