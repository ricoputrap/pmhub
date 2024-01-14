This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Database

### Configuration
1. Setup DB
   1. Create turso db: `turso db create pmhub`
   2. Prepare DB URL
      1. Generate DB URL: `turso db show pmhub --url`
      2. Store it in `.env` as `DATABASE_URL`
   3. Prepare Auth Token:
      1. Generate token: `turso db tokens create pmhub -e none`
      2. Store it in `.env` as `DATABASE_AUTH_TOKEN`
2. Define schemas (see `src/db/schema.ts`)
3. Create a drizzle configuration file
    ```typescript
    import type { Config } from 'drizzle-kit';

    export default {
      schema: './src/db/schema.ts',
      out: './drizzle',
      driver: 'turso',
      dbCredentials: {
        url: process.env.DATABASE_URL!,
        authToken: process.env.DATABASE_AUTH_TOKEN!
      }
    } satisfies Config;
    ```
4. Generate the migration scripts: `npm run db:generate`
5. Execute the migration: `npm run db:push`

### Seeding
1. Open the shell: `turso db shell pmhub`
2. Run the scripts in `src/db/seed.sql` on the shell