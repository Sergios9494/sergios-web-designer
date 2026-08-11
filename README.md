# Sergios — Web Designer Portfolio

A responsive Awwwards-style portfolio for Sergios, built with Next.js, React and TypeScript. It includes animated featured cases, a nine-project portfolio index, testimonials, services and direct live-site links.

## Run locally

Requirements: Node.js 22 or newer.

```bash
npm install
npm run dev:vercel
```

Open `http://localhost:3000`.

## Deploy on Vercel

1. Upload this folder to a GitHub repository.
2. In Vercel, select **Add New → Project** and import the repository.
3. Keep the detected framework as **Next.js**.
4. Click **Deploy**. The included `vercel.json` automatically runs the correct production build.

You can also verify the Vercel build locally:

```bash
npm run build:vercel
npm run start:vercel
```

## Routes

- `/` — main portfolio and five animated featured cases
- `/work` — all nine portfolio websites

## Edit content

- Project names, descriptions and URLs: `app/portfolio-data.ts`
- Main-page copy and services: `app/page.tsx`
- Visual design and responsive rules: `app/globals.css`

The original Sites build scripts remain included so the same source can continue powering the existing hosted version as well as Vercel.
