This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Sanity: live updates without redeploying

1. Add a secret to `.env.local` and Vercel (use a long random string):

   ```bash
   SANITY_REVALIDATE_SECRET=your-random-secret
   ```

2. Deploy the site, then in [Sanity Manage](https://www.sanity.io/manage) → your project → **API** → **Webhooks** → **Create**:
   - **URL:** `https://YOUR_DOMAIN/api/revalidate?secret=YOUR_SANITY_REVALIDATE_SECRET`
   - **Dataset:** production
   - **Trigger on:** Create, Update, Delete
   - **Filter (optional):** `_type in ["capstoneProject", "post", "interview"]`

3. Publish content in Studio (`/studio`). The webhook clears the `sanity` cache tag; the next page load fetches fresh data.

Test locally (with `npm run dev` and the secret in `.env.local`):

```bash
curl -X POST "http://localhost:3000/api/revalidate?secret=YOUR_SANITY_REVALIDATE_SECRET"
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
