// The site's public address. The install steps the shadcn CLI prints use it.
// To move to a new domain, set NEXT_PUBLIC_SITE_URL in Vercel and redeploy:
// the Vercel build regenerates the registry with the new address (vercel.json).
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://threadcn.vercel.app").replace(/\/+$/, "")
