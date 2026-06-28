# Qiuye Next.js Template

A clean Next.js starter template for creating new projects quickly.

This repository is intended to be a reusable project skeleton: modern stack, sane directory conventions, theme support, and a small set of common UI components. It is not a blog system, admin system, CMS, gallery, or product-specific starter kit.

## Positioning

Use this repository when you want a clean base for a new Next.js project:

- Next.js 15 App Router
- React 19
- TypeScript 5
- Tailwind CSS 4
- shadcn/ui + Radix UI
- next-themes
- lucide-react
- Motion
- pnpm
- ESLint and Prettier

The template deliberately avoids domain-specific features. Add Markdown, auth, database, charts, maps, upload, comments, analytics, CMS, or 3D only when a specific project needs them.

## Quick Start

Requirements:

- Node.js >= 20 recommended
- pnpm 8.7.0 recommended

Install and run:

```bash
git clone https://github.com/qiuyedx/qiuye-nextjs-template.git my-app
cd my-app
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
pnpm dev      # Start Next.js dev server with Turbopack
pnpm build    # Build production bundle with Turbopack
pnpm start    # Start production server
pnpm lint     # Run ESLint
pnpm serve    # Serve static export output when output: "export" is configured
```

## Project Structure

Current structure:

```text
qiuye-nextjs-template/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── site-footer.tsx
│   │   └── site-header.tsx
│   ├── providers/
│   │   └── app-providers.tsx
│   ├── qiuye-ui/
│   ├── ui/
│   ├── header.tsx
│   ├── footer.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── config/
│   └── site.ts
├── hooks/
├── lib/
├── public/
├── components.json
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

`components/header.tsx` and `components/footer.tsx` are compatibility re-exports for the layout components.

## Built-In UI

The template keeps only common UI primitives by default.

`components/ui/` is reserved for shadcn/ui components. Add more components with the shadcn CLI when a project needs them.

`components/qiuye-ui/` is reserved for small generic qiuye-ui components. It should not contain business components, branded visual effects, or domain-specific widgets.

Current shadcn/ui components:

```text
avatar
badge
button
card
dialog
drawer
dropdown-menu
input
label
popover
scroll-area
select
separator
sheet
skeleton
sonner
switch
tabs
textarea
tooltip
```

Current custom qiuye-ui components:

- `dual-state-toggle`

Low-frequency or scenario-specific shadcn/ui components such as `sidebar`, `table`, `pagination`, `navigation-menu`, `menubar`, and `resizable` are intentionally not bundled by default.

## Adding Components

Add shadcn/ui components:

```bash
pnpm dlx shadcn@latest add button dialog input
```

The project also includes a qiuye-ui registry entry in `components.json`:

```json
{
  "registries": {
    "@qiuye-ui": "https://ui.qiuyedx.com/registry/{name}.json"
  }
}
```

Add qiuye-ui components only when they are generic enough for a starter template or specifically needed by your project.

## Theme System

The template uses `next-themes` with Tailwind CSS variables:

- Light and dark theme support
- System theme support
- CSS variables in `app/globals.css`
- View Transition API styles for smooth theme switching

Theme entry points:

- `components/theme-provider.tsx`
- `components/theme-toggle.tsx`
- `app/globals.css`

## Optional Libraries

Install these per project instead of treating them as template features:

| Need | Suggested packages |
|---|---|
| State management | `zustand` |
| Server state | `@tanstack/react-query` or `swr` |
| Forms | `react-hook-form` + `zod` |
| Date handling | `dayjs` |
| i18n | `next-intl` or `i18next` |
| Utility helpers | `lodash-es` |
| Markdown / docs | `mdx`, `react-markdown`, `remark-gfm` |
| Auth | `next-auth` or project-specific auth |
| Database | Prisma, Drizzle, or project-specific client |
| Charts | ECharts, Recharts, or project-specific chart package |

Dependency slimming is tracked in:

```text
docs/开发设计文档/20260628_nextjs_template_modernization/
```

Check `package.json` for the exact dependencies installed in the current revision.

## Deployment Notes

Default `next.config.ts` should stay minimal. Add deployment-specific configuration only when needed.

Static export example:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

Remote image allowlist example:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
      },
    ],
  },
};

export default nextConfig;
```

Avoid default wildcard remote image domains in this template.

## What This Template Does Not Include

By design, this template does not include:

- Markdown or MDX content system
- Blog routes or article renderer
- CMS
- Authentication
- Database or ORM
- Uploads, OSS, or image gallery
- Comments
- Analytics
- Payments
- Complex 3D, Canvas, or branded visual effects

Those features belong in project-specific work, reusable component registries, or separate starter kits.

## Development Notes

- Prefer Server Components by default.
- Add `"use client"` only for hooks, browser APIs, theme runtime, or interactions.
- Keep `app/layout.tsx` thin.
- Keep business components out of `components/ui/`.
- Keep the template easy to delete, rename, and reshape for a new product.

## License

MIT
