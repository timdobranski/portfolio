# Tim Dobranski Portfolio

Personal portfolio built with [Next.js](https://nextjs.org/) App Router.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The app routes live in `app/`, shared UI lives in `components/`, and static project data/assets live in `public/`.

## Verification

```bash
npm run lint
```

This project is developed against Next.js 16 and requires Node.js 20.9 or newer. Avoid running `npm run build` while a local dev server is active; the project notes reserve build validation for an isolated run.

## Contact Form (SendGrid)

To enable the contact form on `/connect`, create `.env.local` (see `.env.example`) and set:

- `SENDGRID_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL` (must be a verified sender identity in SendGrid)
