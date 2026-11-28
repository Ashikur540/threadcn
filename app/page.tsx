import Link from "next/link"

import { buttonVariants } from "@/registry/threadcn/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/threadcn/ui/card"
import { Stitch } from "@/registry/threadcn/ui/stitch"

import { PatchColor } from "./_landing/patch-color"
import { Quilt } from "./_landing/quilt"
import { Seam } from "./_landing/seam"
import { catalog, components } from "./_site/catalog"
import { CodeBlock } from "./_site/code-block"
import { GitHubIcon, repoUrl } from "./_site/github"

const heading = "font-(family-name:--tx-font-heading) font-bold tracking-tight text-balance"
const wrap = "mx-auto w-full max-w-7xl px-4 md:px-8"

function SectionHead({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 max-w-[60ch]">
      <h2 id={id} className={`${heading} text-4xl md:text-5xl`}>
        {title}
      </h2>
      <p className="mt-4 text-lg text-(--tx-muted-foreground)">{children}</p>
    </div>
  )
}

/** A line of thread between sections. */
function Seamline() {
  return <hr className="border-0 border-t-[1.8px] border-dashed border-(--tx-thread)/60" />
}

/** The button drawn as a sewing pattern: its four pieces and the CSS variable behind each. */
function PatternSheet() {
  // The labels inside the drawing get too small on a phone, so there they move to a list below it.
  const label = "max-md:hidden font-(family-name:--tx-font-heading) text-[17px] font-bold fill-[#3a2412]"
  const token = "max-md:hidden font-mono text-[13px] fill-[#4a2f1a]"
  return (
    <div className="rotate-[-1.2deg] rounded bg-[#e9dcbc] bg-[radial-gradient(rgb(90_58_34/.14)_1px,transparent_1.2px)] bg-size-[22px_22px] p-5 shadow-[0_18px_34px_rgb(0_0_0/.38)] md:p-9 max-md:rotate-0">
      <svg viewBox="0 0 520 470" role="img" aria-label="A button cut into four pieces: the patch, the edge under it, the thread and the fabric" className="h-auto w-full">
        <defs>
          <pattern id="twill" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <path d="M0 0V8" stroke="#2b4a74" strokeWidth="2.2" opacity=".55" />
          </pattern>
        </defs>
        <rect x="10" y="10" width="270" height="96" rx="20" fill="none" stroke="#4a2f1a" strokeWidth="2" />
        <rect x="22" y="22" width="246" height="72" rx="13" fill="#e1a73e" opacity=".6" />
        <rect x="32" y="32" width="226" height="52" rx="9" fill="none" stroke="#a9462a" strokeWidth="1.4" strokeDasharray="8 5" />
        <text className={label} x="300" y="46">A · Patch</text>
        <text className={token} x="300" y="68">--tx-patch</text>
        <rect x="10" y="140" width="270" height="34" rx="12" fill="none" stroke="#4a2f1a" strokeWidth="2" />
        <rect x="20" y="149" width="250" height="16" rx="7" fill="#a8741f" opacity=".6" />
        <text className={label} x="300" y="152">B · Edge</text>
        <text className={token} x="300" y="174">--tx-press-depth: 4px</text>
        <rect x="10" y="210" width="270" height="96" rx="20" fill="none" stroke="#a9462a" strokeWidth="3" strokeDasharray="10 7" />
        <text className={label} x="300" y="246">C · Thread</text>
        <text className={token} x="300" y="268">--tx-thread-width</text>
        <text className={token} x="300" y="288">--tx-stitch-inset</text>
        <path d="M10 340H280V460H10Z" fill="none" stroke="#4a2f1a" strokeWidth="2" />
        <path d="M20 350H270V450H20Z" fill="url(#twill)" />
        <text className={label} x="300" y="392">D · Fabric</text>
        <text className={token} x="300" y="414">--tx-fabric</text>
      </svg>
      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-[#3a2412] md:hidden">
        {pieces.map(([name, token]) => (
          <div key={name}>
            <dt className="font-(family-name:--tx-font-heading) font-bold">{name}</dt>
            <dd className="font-mono text-[13px] break-all text-[#4a2f1a]">{token}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

const pieces = [
  ["A · Patch", "--tx-patch"],
  ["B · Edge", "--tx-press-depth"],
  ["C · Thread", "--tx-thread-width"],
  ["D · Fabric", "--tx-fabric"],
]

const brandCss = `/* your brand colors, threadcn's stitching */
:root {
  --tx-patch: var(--primary);
  --tx-patch-foreground: var(--primary-foreground);
}`

export default function Home() {
  return (
    <main>
      <Quilt />
      <Seamline />

      <section aria-labelledby="fabrics" className={`${wrap} py-24`}>
        <SectionHead id="fabrics" title="One set of components. Two fabrics.">
          Light mode is Denim. Dark mode is Quilted night, a padded cloth sewn with white thread. Drag the seam to compare the same card.
        </SectionHead>
        <Seam />
      </section>
      <Seamline />

      <section aria-labelledby="pieces" className={`${wrap} grid items-center gap-14 py-24 lg:grid-cols-[1.1fr_1fr]`}>
        <PatternSheet />
        <div className="min-w-0">
          <h2 id="pieces" className={`${heading} text-4xl md:text-5xl`}>Cut from a few pieces.</h2>
          <p className="mt-4 mb-6 text-lg text-(--tx-muted-foreground)">
            Every component is built from the same few pieces: the patch, the edge under it, the thread and the fabric. Each piece is one CSS
            variable. Set it to your brand color and every button, card and input follows, with no component code to edit.
          </p>
          <CodeBlock file="globals.css" code={brandCss} />
          <div className="mt-6">
            <p className="mb-3 font-(family-name:--tx-font-patch) text-(--tx-muted-foreground)">Try a patch color</p>
            <PatchColor />
          </div>
        </div>
      </section>

      <section aria-labelledby="components" data-fabric="flip" className="tx-fabric">
        <div className={`${wrap} py-24`}>
          <SectionHead id="components" title={`${components.length} components, and counting.`}>
            Same names as shadcn/ui, so what you already know carries over. More are on the way.
          </SectionHead>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {catalog.map(({ group, items }) => (
              <Card key={group} className={group === "Denim specials" ? "bg-(--tx-leather) text-(--tx-leather-foreground)" : undefined}>
                <CardHeader>
                  <CardTitle>{group}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={`/docs/components/${item.name}`}
                          title={item.description}
                          className="block rounded-lg bg-(--tx-patch-secondary) px-3 py-1 text-[15px] text-(--tx-patch-secondary-foreground) hover:bg-(--tx-patch) hover:text-(--tx-patch-foreground)"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
  </div>
      </section>

      <section aria-labelledby="open" className={`${wrap} pt-24 pb-10`}>
        <div className="relative grid items-center gap-10 rounded-[20px] bg-(--tx-leather) p-8 text-(--tx-leather-foreground) shadow-[0_6px_0_var(--tx-leather-edge),0_16px_30px_rgb(0_0_0/.35)] [--_inset:10px] [--_radius:20px] md:p-14 lg:grid-cols-[1.2fr_1fr]">
          <Stitch />
          <div>
            <h2 id="open" className={`${heading} text-4xl md:text-5xl`}>Built in the open.</h2>
            <p className="mt-4 mb-7 max-w-[48ch] text-lg">
              threadcn is free and MIT licensed. The code, the tests and every design decision live on GitHub. Ideas, bug reports and new fabrics
              are welcome.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={repoUrl} target="_blank" rel="noreferrer" className={buttonVariants()}>
                <Stitch />
                <GitHubIcon />
                Star on GitHub
              </a>
              <a href={`${repoUrl}/issues`} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "secondary" })}>
                <Stitch />
                Report an issue
              </a>
            </div>
          </div>
          <ul className="relative grid gap-3 rounded-2xl bg-(--tx-field) p-6 text-(--tx-field-foreground) [--_inset:7px] [--_radius:16px] [--_stitch:var(--tx-field-border)]">
            <Stitch />
            {[
              "Built on Base UI, so keyboard and screen readers work",
              "Tested: behavior, color contrast and reduced motion",
              "Never touches your own theme or your stock shadcn files",
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <svg viewBox="0 0 24 24" className="mt-1 size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
