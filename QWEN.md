# QWEN.md — Project Context

## Project Overview

**MABICA Company Profile** is a clean, minimal Next.js 16 application built with the App Router architecture. The project serves as a base template for a creative storytelling collective's company profile website.

### Current State

This is a **fresh, reset Next.js baseline** with minimal configuration — ready for new feature development. All experimental code and custom components have been removed.

### Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16.1.x (App Router) |
| **Language** | TypeScript 5.9.x |
| **UI** | Tailwind CSS 4.1.x |
| **Runtime** | React 19.2.x |
| **Package Manager** | Bun |
| **Linting** | ESLint 9 (via eslint-config-next) |
| **PostCSS** | 8.5.x |
| **Autoprefixer** | 10.4.x |

---

## Project Structure

```
mabicacreative/
├── src/
│   └── app/                    # Next.js App Router
│       ├── layout.tsx          # Root layout with Geist fonts
│       ├── page.tsx            # Home page (minimal starter)
│       ├── globals.css         # Global styles (Tailwind import)
│       └── favicon.ico         # Site favicon
├── public/                     # Static assets
│   ├── mabica-logo.png         # MABICA logo
│   └── mabica-logo-rounded.png # Rounded variant
├── .gitignore                  # Git ignore rules
├── bun.lock                    # Bun lockfile
├── next.config.ts              # Next.js configuration
├── next-env.d.ts               # Next.js TypeScript declarations
├── package.json                # Dependencies & scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

---

## Building and Running

### Prerequisites

- **Bun** installed (`curl -fsSL https://bun.sh/install | bash`)

### Commands

```bash
# Install dependencies
bun install

# Start development server (Turbopack enabled)
bun run dev
# → http://localhost:3000

# Create production build
bun run build

# Start production server
bun run start

# Run linter
bun run lint
```

---

## Configuration Files

### `next.config.ts`

Minimal configuration — no experimental flags or custom settings:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

export default nextConfig;
```

### `tsconfig.json`

Key settings:
- **Path aliases:** `@/*` → `./src/*`
- **Strict mode:** Enabled
- **Module resolution:** `bundler`
- **Incremental builds:** Enabled
- **Next.js plugin:** Configured for type generation

### `globals.css`

Uses Tailwind CSS v4's new import syntax:

```css
@import "tailwindcss";
```

---

## Development Conventions

### Code Style

- **Strict TypeScript:** All strict flags enabled
- **ESLint:** Next.js core web vitals config
- **Formatting:** Follow Next.js/React community standards

### File Naming

- **Components:** `PascalCase.tsx` (e.g., `Header.tsx`)
- **Utilities:** `camelCase.ts` (e.g., `utils.ts`)
- **Pages/Routes:** `kebab-case` folders, `page.tsx` files

### Architecture Patterns

- **App Router:** Use `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`
- **Server Components:** Default (no `"use client"` directive)
- **Client Components:** Add `"use client"` at top of file
- **Imports:** Use `@/` alias for `src/` directory

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root HTML layout with Geist font families |
| `src/app/page.tsx` | Home page entry point |
| `src/app/globals.css` | Tailwind CSS import and global styles |
| `package.json` | Dependency management and npm scripts |
| `tsconfig.json` | TypeScript compiler options |
| `next.config.ts` | Next.js runtime configuration |

---

## Notes

- The `public/` folder contains MABICA logo assets for future use
- The README.md contains historical design notes (retro-minimalist, natural color palette) that may be re-implemented
- Project uses **Turbopack** by default in development (faster builds)
- No UI component library is currently installed — add as needed

---

## Future Considerations

When extending this project:

1. **UI Components:** Consider shadcn/ui, Radix UI, or custom components
2. **Icons:** Lucide React or Heroicons
3. **Animations:** Framer Motion for transitions
4. **Theme:** next-themes for dark/light mode support
5. **Testing:** Add Vitest or Playwright as needed
