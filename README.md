# threadcn

Stitched, fabric-style components for [shadcn/ui](https://ui.shadcn.com). Denim in light mode, Quilted night in dark mode, built on Base UI and Tailwind CSS v4.

Install single components with the shadcn CLI, own the code, and restyle anything with Tailwind classes. Want wool, knit or your own brand colors? A fabric is just a set of design tokens, so you can make your own without touching component code.

## Install

threadcn uses the shadcn CLI. In a project that already has shadcn/ui set up (Base UI comes with the components):

1. Add the registry to `components.json`:

   ```json
   "registries": {
     "@threadcn": "https://threadcn.vercel.app/r/{name}.json"
   }
   ```

2. Add any component. Its threadcn parts and styles come with it:

   ```bash
   npx shadcn add @threadcn/button
   ```

3. Put the fabric on your page: `<body className="tx-fabric">`.

Live preview of every component: https://threadcn.vercel.app

## Status

Early and moving fast: 40 components so far. Docs pages are coming. Watch or star the repo to follow along.

## License

[MIT](LICENSE)
