# Portfolio (Next.js 16)

Personal portfolio built with Next.js App Router, Tailwind CSS v4, Framer Motion, and GSAP.

## Requirements

- Node.js 20+
- npm 10+

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000.

## Production Validation

Before deploying, run:

```bash
npm run lint
npm run build
```

If both pass, the project is deployment-ready.

## Deploy to Vercel

### Option A: Vercel Dashboard (recommended)

1. Push this repository to GitHub.
2. Go to Vercel and click New Project.
3. Import the repository.
4. Keep detected defaults:
	- Framework Preset: Next.js
	- Build Command: `next build`
	- Install Command: `npm install`
	- Output Directory: `.next` (managed by Next.js)
5. Click Deploy.

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

## Environment Variables

This project currently does not require mandatory environment variables for build/deploy.

If you add any later:
- Put local secrets in `.env.local`.
- Add production values in Vercel Project Settings -> Environment Variables.
- Only expose client-safe values with `NEXT_PUBLIC_` prefix.

## Notes

- `package-lock.json` is committed, so Vercel will use npm lockfile installs.
- Static assets should be placed in `public/`.
- `.vercel` and `.env*` are already ignored in `.gitignore`.
