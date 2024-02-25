This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Funnel Preview Tool

This tool allows you to preview funnels with ease.

* You can choose one of the provided funnel examples, or also upload your own JSON file: it will be validated the file against the provided structure from Perspective ([source](https://perspectiveco.notion.site/Work-Sample-Senior-Frontend-Engineer-Vitor-Mello-c094221151574b0790b68f1d595f03c2)).
* It supports keyboard arrow navigation (on desktop), and swipe navigation to move between pages.
* Most important flows (funnel preview, upload and json parsing) are covered with unit tests using `jest` and `testing-library`.


## Running locally

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
