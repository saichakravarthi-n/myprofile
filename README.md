# Personal portfolio (Next.js → Vercel)

A detailed, visually distinctive web portfolio built with **Next.js** and **Tailwind CSS**, ready to host on **Vercel**.

## Personalize your content

Edit one file — everything on the site reads from it:

```
src/data/profile.ts
```

Update your name, title, about copy, projects, experience, skills, email, and social links. Case study pages (`/work/[slug]`) update automatically from the same data.

## Run locally

Requires **Node.js 20+**.

```bash
cd /Users/personal/Documents/myprofile
npm install
npm run dev
```

Then open **[http://127.0.0.1:3000](http://127.0.0.1:3000)** in your browser.

| Command           | What it does                                      |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Hot-reload development server (use this day-to-day) |
| `npm run build`   | Production build                                  |
| `npm run start`   | Serve the production build locally                |
| `npm run preview` | Build + serve production locally                  |

Stop the server with `Ctrl + C` in the terminal.

## Deploy to Vercel

### Option A — GitHub (recommended)

1. Create a GitHub repo and push this project.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected).
4. Click **Deploy**.

Every push to your main branch redeploys automatically.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts, then production deploy with:

```bash
vercel --prod
```

### Custom domain

In the Vercel project → **Settings → Domains**, add your domain and follow DNS instructions.

## Project structure

```
src/
  app/                 # Routes (home + case studies)
  components/          # UI sections
  data/profile.ts      # ← edit your content here
```

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Local development server |
| `npm run build` | Production build         |
| `npm run start` | Serve production build   |
| `npm run lint`  | ESLint                   |
