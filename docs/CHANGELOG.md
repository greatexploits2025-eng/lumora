# Lumora — Changelog

All notable changes to this project are documented here.

---

## [0.5.0] — 2025

### Added
- Feature-based project architecture (`features/`, `components/`, `hooks/`, `lib/`, `services/`, `types/`, `utils/`)
- Barrel `index.ts` exports for `features/landing` and `features/showcase`
- `docs/` folder with PRD, SAD, TDD, ROADMAP, CHANGELOG
- `AIShowcase` v2 — hero card + 5-card grid with Framer Motion animations
- `ShowcaseCard` with entrance animation and hover lift effect
- `TrustedBy` creator strip
- `Statistics` section with scroll-triggered count-up animation
- `Testimonials` section with floating glass cards
- `Pricing` section — Starter, Pro, Studio tiers
- `Footer` with social links and legal pages
- Framer Motion installed and integrated
- CSS float keyframe animations (`animate-float`, `animate-float-slow`, `animate-float-gentle`)
- `public/showcase/` folder for AI-generated assets

### Changed
- Migrated all landing components from `components/landing/` to `features/landing/`
- Migrated showcase components from `components/showcase/` to `features/showcase/`
- `page.tsx` now uses clean barrel imports

---

## [0.4.0] — 2025

### Added
- `CinematicBackground` — full canvas animation with stars, nebula glows, shooting stars, and falling words
- `StarCanvas` component with DPR-aware rendering
- `AnimatedBackground` with CSS star layers
- Tailwind CSS v4 configured
- ESLint and Prettier configured

---

## [0.3.0] — 2025

### Added
- Turborepo monorepo setup
- Next.js 16 with App Router
- `@repo/ui` shared package
- `@repo/eslint-config` and `@repo/typescript-config`
- GitHub repository connected
- Initial Navbar, Hero, Features sections
