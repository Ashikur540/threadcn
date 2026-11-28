import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/registry/threadcn/ui/button"
import { siteUrl } from "@/site"

import { CodeBlock } from "../_site/code-block"
import { InstallCommand } from "../_site/copy"
import { C, H2, PageShell } from "./_ui/page-shell"

export const metadata: Metadata = {
  title: "Installation · threadcn",
  description: "Add the threadcn registry once, then install stitched components with the shadcn CLI.",
}

const registryJson = `{
  "registries": {
    "@threadcn": "${siteUrl}/r/{name}.json"
  }
}`

const layoutCode = `export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="tx-fabric">{children}</body>
    </html>
  )
}`

const checkCode = `import { Button } from "@/components/ui/button"

export default function Page() {
  return <Button>It is stitched</Button>
}`

const toc = [
  { id: "before", title: "Before you start" },
  { id: "registry", title: "1. Add the registry" },
  { id: "component", title: "2. Add a component" },
  { id: "fabric", title: "3. Put the fabric on the page" },
  { id: "check", title: "Check it worked" },
  { id: "next", title: "What next" },
]

const muted = "text-(--tx-field-foreground)/80"

export default function InstallationPage() {
  return (
    <PageShell
      href="/docs"
      crumbs={[{ href: "/docs", title: "Docs" }]}
      title="Installation"
      intro="Add the threadcn registry to your project once, then install components with the normal shadcn CLI. Three steps."
      toc={toc}
    >
      <H2 id="before">Before you start</H2>
      <p>
        You need a React project that already uses shadcn/ui, so it has a <C>components.json</C> file, and Tailwind CSS v4. threadcn components are
        built on Base UI, the same as shadcn&apos;s Base UI components. Starting fresh? Run <C>npx shadcn init</C> first.
      </p>

      <H2 id="registry">1. Add the registry</H2>
      <p>
        Open <C>components.json</C> and add the <C>@threadcn</C> registry. It tells the shadcn CLI where threadcn components live. You only do this
        once per project.
      </p>
      <CodeBlock file="components.json" code={registryJson} />
      <p className={muted}>When threadcn is in shadcn&apos;s official registry list, this step goes away and step 2 works on its own.</p>

      <H2 id="component">2. Add a component</H2>
      <p>Install any component by its name. Here is Button.</p>
      <InstallCommand />
      <p>
        The shared Denim and Quilted night colors (<C>@threadcn/base</C>) come along with it, so there is no separate theme step. The CLI copies
        the code into your project, and from then on it is yours to change.
      </p>

      <H2 id="fabric">3. Put the fabric on the page</H2>
      <p>
        Add the <C>tx-fabric</C> class to <C>&lt;body&gt;</C>. It paints the denim behind your app. Outline, ghost and link buttons and plain text
        are made to sit on it. You can also put it on one section instead of the whole page.
      </p>
      <CodeBlock file="app/layout.tsx" code={layoutCode} />
      <p className={muted}>
        Dark mode uses the <C>dark</C> class on <C>&lt;html&gt;</C>, the same one shadcn/ui uses. With it, the fabric turns into Quilted night.
        Your own theme colors are never changed.
      </p>

      <H2 id="check">Check it worked</H2>
      <p>Render a Button. You should see a gold patch with a light stitch that sinks when you press it, like this one:</p>
      <CodeBlock file="app/page.tsx" code={checkCode} />
      <div className="docs-stage tx-fabric shadow-[inset_0_2px_10px_rgb(0_0_0/.35)] grid min-h-64 place-items-center rounded-xl p-6 sm:p-10">
        <Button>It is stitched</Button>
      </div>
      <p className={muted}>
        Plain grey button? Step 3 is missing (no <C>tx-fabric</C>), or the CSS the CLI added to your global stylesheet did not load.
      </p>

      <H2 id="next">What next</H2>
      <p>
        Browse{" "}
        <Link href="/docs/components" className="font-semibold underline underline-offset-4">
          all components
        </Link>
        , or start with{" "}
        <Link href="/docs/components/button" className="font-semibold underline underline-offset-4">
          Button
        </Link>
        . Each page shows the component live, how to install it, and examples you can copy.
      </p>
    </PageShell>
  )
}
