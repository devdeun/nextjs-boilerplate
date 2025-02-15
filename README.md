# NextJS Boilerplate

## Tech Stack

- NextJS 14
- React 18
- TypeScript
- TailwindCSS
- Prettier
- ESLint
- Lefthook

## Getting Started

```
# Install dependencies
npm install

# Initialize Git repository (Required for Lefthook)
git init

# Install git hooks
npx lefthook install

# Start development server
npm run dev
```

## Issue Label

```bash
npx github-label-sync --access-token {access-token} --labels ./.github/labels.json {repository}
```

example

```bash
npx github-label-sync --access-token ghp-MYTOKEN --labels ./.github/labels.json devdeun/nextjs-boilerplate
```
