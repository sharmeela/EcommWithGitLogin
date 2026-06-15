
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

Open http://localhost:3000 with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

npx create-next-app@latest

npm install next-auth@beta

npm install @prisma/client @auth/prisma-adapter mongodb @auth/mongodb-adapter
npm install bcryptjs mongodb react-icons @types/bcryptjs

npm install prisma --save-dev

npx prisma init
// add Database url and db name in the url as well

// for putting in env auth secret
npx auth secret

npx prisma generate
npx prisms db push
