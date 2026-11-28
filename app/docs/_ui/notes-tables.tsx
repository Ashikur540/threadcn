import type * as React from "react"

import { C } from "./page-shell"

/** One prop threadcn adds or changes. `part` names the sub-component, for components with several parts. */
export type PropRow = { part?: string; name: string; type: string; def: string; what: React.ReactNode }

/** One per-component setting (a `--_` CSS variable): name, what it changes, and an optional example class. */
export type SettingRow = [name: string, what: React.ReactNode, example?: string]

const cell = "border-b border-dashed border-(--tx-field-border)/50 px-3 py-2.5 text-left align-top"
const mono = `${cell} font-mono text-[13px]`

function Table({ head, children }: { head: string[]; children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[36rem] border-collapse text-[15px]">
        <thead>
          <tr className="font-(family-name:--tx-font-patch)">
            {head.map((h) => (
              <th key={h} className={cell}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

/** The Props table of a guide. The Part column shows only when a row names a part. */
export function PropsTable({ rows }: { rows: PropRow[] }) {
  const parts = rows.some((r) => r.part)
  return (
    <Table head={[...(parts ? ["Part"] : []), "Prop", "Type", "Default", "What it does"]}>
      {rows.map((p) => (
        <tr key={`${p.part ?? ""}-${p.name}`}>
          {parts && <td className={cell}>{p.part}</td>}
          <td className={cell}>
            <C>{p.name}</C>
          </td>
          <td className={mono}>{p.type}</td>
          <td className={mono}>{p.def}</td>
          <td className={`${cell} min-w-64`}>{p.what}</td>
        </tr>
      ))}
    </Table>
  )
}

/** The "What each setting changes" table. The Example column shows only when rows have one. */
export function SettingsTable({ rows }: { rows: SettingRow[] }) {
  const examples = rows.some((r) => r[2])
  return (
    <Table head={["Setting", "What it changes", ...(examples ? ["Example class"] : [])]}>
      {rows.map(([name, what, example]) => (
        <tr key={name}>
          <td className={`${cell} whitespace-nowrap`}>
            <C>{name}</C>
          </td>
          <td className={cell}>{what}</td>
          {examples && <td className={`${mono} whitespace-nowrap`}>{example}</td>}
        </tr>
      ))}
    </Table>
  )
}

/** A link to a Base UI component page, opening in a new tab. `name` is the slug, like "switch" or "preview-card". */
export function BaseUiLink({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <a href={`https://base-ui.com/react/components/${name}`} target="_blank" rel="noreferrer" className="font-semibold underline underline-offset-4">
      {children}
    </a>
  )
}
