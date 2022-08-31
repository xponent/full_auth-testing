A simple web3 authentication to test moralis interactions with other dependencies for Xezom, Tauros DAO, and Labyrinthine Unreal. In order to test authentication you must visit localhost:3000/signin upon running the app.

## .env.local structure:

```
APP_DOMAIN="xezom.io"
MORALIS_API_KEY="--Your Key: Moralis Account -> Keys -> Web3 Api Key---"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="7197b3e8dbee5ea6274cab37245eec212"
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000/signin](http://localhost:3000/signin) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
