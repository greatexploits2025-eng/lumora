# Lumora — Technical Design Document (TDD)

## Coding Standards

### TypeScript
- Strict mode enabled
- No `any` types — use `unknown` and narrow
- Prefer `type` over `interface` for props
- All async functions must handle errors explicitly

### React / Next.js
- Use App Router (`app/`) for all pages
- Server Components by default — add `"use client"` only when needed
- Co-locate feature logic inside `features/<name>/`
- Shared primitives live in `components/ui/`
- No business logic in page files — pages only compose features

### File Naming
- Components: `PascalCase.tsx`
- Hooks: `useHookName.ts`
- Utils: `camelCase.ts`
- Types: `camelCase.types.ts`
- Barrel files: `index.ts`

### Import Order
1. React / Next.js
2. Third-party libraries
3. Internal `@/components`
4. Internal `@/features`
5. Internal `@/hooks`, `@/lib`, `@/utils`
6. Relative imports

## Feature Module Structure
Each feature folder should follow this pattern:
```
features/<name>/
├── index.ts              # Barrel exports
├── <Name>.tsx            # Main component
├── <Name>.types.ts       # Types (if needed)
├── use<Name>.ts          # Custom hook (if needed)
└── <name>.service.ts     # API calls (if needed)
```

## Animation Guidelines
- Use `framer-motion` for entrance animations and hover effects
- CSS keyframes (in `globals.css`) for continuous loops (float, pulse)
- Respect `prefers-reduced-motion` — always provide a static fallback
- Keep `requestAnimationFrame` loops in canvas components only

## Performance Rules
- No `shadowBlur` in tight animation loops without profiling
- Lazy load heavy components with `next/dynamic`
- Images via `next/image` only
- Canvas animations must cancel on component unmount

## API Design (planned)
```
POST /api/image/generate     → { prompt, style } → { imageUrl }
POST /api/video/generate     → { imageUrl, motion } → { videoUrl }
POST /api/script/generate    → { genre, tone, premise } → { script }
POST /api/voice/generate     → { text, voiceId } → { audioUrl }
POST /api/avatar/generate    → { imageUrl, audioUrl } → { videoUrl }
```

## Environment Variables
```
NEXT_PUBLIC_APP_URL=
OPENAI_API_KEY=
REPLICATE_API_TOKEN=
ELEVENLABS_API_KEY=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
DATABASE_URL=
```
