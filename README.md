# Thue Htet Aning — Portfolio

A responsive black-and-white developer portfolio built with Next.js, React, TypeScript, and CSS. It is ready to deploy on Vercel.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Vercel deployment

### Option 1 — GitHub
1. Create a GitHub repository.
2. Upload this project.
3. Import the repository in Vercel.
4. Vercel detects Next.js automatically.
5. Deploy.

### Option 2 — Vercel CLI

```bash
npm install -g vercel
vercel
```

## Customize

Edit `app/page.tsx` for:
- Name and introduction
- Skills
- Projects
- Education and experience
- Email, GitHub, and LinkedIn links

Edit `app/globals.css` for visual styling.

The contact form is currently a front-end demo. Connect it to an email/API service before using it as a production contact form.
