import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { buttonVariants } from "@/registry/threadcn/ui/button"
import { Stitch } from "@/registry/threadcn/ui/stitch"

import { components } from "../../../_site/catalog"
import { CodeBlock } from "../../../_site/code-block"
import { CopyButton, InstallCommand } from "../../../_site/copy"
import { repoUrl } from "../../../_site/github"
import { demos } from "../../_demos"
import { guides } from "../../_guides"
import { exportsOf, getItem, readSource, stylePath } from "../../_lib/registry"
import { InstallTabs } from "../../_ui/install-tabs"
import { C, H2, H3, PageShell, type TocItem } from "../../_ui/page-shell"
import { Preview } from "../../_ui/preview"

export function generateStaticParams() {
  return components.map(({ name }) => ({ name }))
}

export async function generateMetadata({ params }: { params: Promise<{ name: string }> }): Promise<Metadata> {
  const item = getItem((await params).name)
  return item ? { title: `${item.title} · threadcn`, description: item.description } : {}
}

const muted = "text-(--tx-field-foreground)/80"

export default async function ComponentPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params
  const item = getItem(name)
  const Demo = demos[name]
  if (!item || !Demo) notFound()

  const guide = guides[name]
  const style = stylePath(name)
  const parts = item.registryDependencies ?? []
  const packages = item.dependencies ?? []
  const files = item.files ?? []
  const command = `npx shadcn add @threadcn/${name}`
  const usage = `import { ${exportsOf(name).join(", ")} } from "@/components/ui/${name}"`

  const toc: TocItem[] = [
    { id: "preview", title: "Preview" },
    { id: "installation", title: "Installation" },
    { id: "usage", title: "Usage" },
    ...(guide?.examples.length
      ? [{ id: "examples", title: "Examples" }, ...guide.examples.map((e) => ({ id: e.slug, title: e.title, depth: 2 as const }))]
      : []),
    ...(guide?.toc ?? []),
  ]

  const manual = (
    <ol className="grid list-decimal gap-5 pl-5 marker:font-bold">
      {packages.length > 0 && (
        <li className="grid gap-3">
          Install the packages it uses.
          <CodeBlock file="Terminal" code={`npm install ${packages.join(" ")}`} />
        </li>
      )}
      {parts.length > 0 && (
        <li>
          Add the threadcn parts it builds on first (they bring the shared colors, <C>base</C>, with them):{" "}
          {parts.map((dep, i) => {
            const part = dep.replace("@threadcn/", "")
            const isPage = components.some((c) => c.name === part)
            return (
              <span key={dep}>
                {i > 0 && ", "}
                {isPage ? (
                  <Link href={`/docs/components/${part}`} className="font-semibold underline underline-offset-4">
                    {part}
                  </Link>
                ) : (
                  <C>{part}</C>
                )}
              </span>
            )
          })}
          .
        </li>
      )}
      {files.map((file) => {
        const target = `components/ui/${file.path.split("/").pop()}`
        return (
          <li key={file.path} className="grid gap-3">
            <span>
              Copy this file to <C>{target}</C>.
            </span>
            <CodeBlock file={target} code={readSource(file.path)} />
          </li>
        )
      })}
      {style && (
        <li className="grid gap-3">
          <span>
            Copy its styles into your global CSS file (the one that imports Tailwind).
          </span>
          <CodeBlock file={`styles/${name}.css`} code={readSource(style)} />
        </li>
      )}
    </ol>
  )

  return (
    <PageShell
      href={`/docs/components/${name}`}
      crumbs={[
        { href: "/docs", title: "Docs" },
        { href: "/docs/components", title: "Components" },
      ]}
      title={item.title}
      intro={item.description}
      actions={
        <>
          <CopyButton text={command} label="Copy install command" size="sm" />
          <a href={`${repoUrl}/blob/main/registry/threadcn/ui/${name}.tsx`} className={buttonVariants({ size: "sm", variant: "secondary" })}>
            <Stitch />
            View source
          </a>
        </>
      }
      toc={toc}
    >
      <H2 id="preview">Preview</H2>
      <Preview label={item.title} code={<CodeBlock file={`${name}-demo.tsx`} code={readSource(`app/docs/_demos/${name}.tsx`)} />}>
        <Demo />
      </Preview>

      <H2 id="installation">Installation</H2>
      <InstallTabs
        cli={
          <>
            <InstallCommand item={name} />
            <p className={muted}>
              It adds {files.map((f) => f.path.split("/").pop()).join(" and ")} to your components folder
              {style ? ", and its styles to your global CSS" : ""}. First time? Add the threadcn registry once, see{" "}
              <Link href="/docs" className="font-semibold underline underline-offset-4">
                Installation
              </Link>
              .
            </p>
          </>
        }
        manual={manual}
      />

      <H2 id="usage">Usage</H2>
      <CodeBlock file={`${name} import`} code={usage} />
      <p className={muted}>The Code tab under Preview above shows a full example you can copy.</p>

      {guide && guide.examples.length > 0 && (
        <>
          <H2 id="examples">Examples</H2>
          {guide.examples.map(({ slug, title, description, file, Component }) => (
            <section key={slug} aria-labelledby={slug} className="grid gap-3">
              <H3 id={slug}>{title}</H3>
              <p>{description}</p>
              <Preview label={title} code={<CodeBlock file={file.split("/").pop()} code={readSource(file)} />}>
                <Component />
              </Preview>
            </section>
          ))}
        </>
      )}

      {guide?.Notes && <guide.Notes />}
    </PageShell>
  )
}
