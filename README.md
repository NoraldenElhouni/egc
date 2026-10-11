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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deployment

Pushes to `master` run `.github/workflows/deploy.yml`: CI builds the app, then the deploy job SSHes to the server as `deploy` (key restricted to `/home/deploy/deploy.sh`), which builds the commit into `/www/wwwroot/engroup.ly/releases/<timestamp>-<sha>`, flips the `current` symlink, reloads pm2 (`egc`, 127.0.0.1:3000) and rolls back automatically if the health check fails. aaPanel's Nginx proxies `engroup.ly` to it behind Cloudflare.

- Runtime env: `/www/wwwroot/engroup.ly/shared/.env.production` (`SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`)
- Manual deploy: `sudo -u deploy /home/deploy/deploy.sh master`
- Rollback: `sudo -u deploy /home/deploy/rollback.sh` (previous release) or `rollback.sh <release-dir>`
- Logs: `sudo -u deploy pm2 logs egc`
- GitHub secrets: `SSH_PRIVATE_KEY`, `SSH_KNOWN_HOSTS`, `SSH_HOST`, `SSH_USER`, `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`
