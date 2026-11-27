import { CopyButton } from "./copy"

/** A dark code panel with a file name and a copy button. Plain text, no colors. */
export function CodeBlock({ code, file }: { code: string; file?: string }) {
  return (
    <div className="overflow-hidden rounded-xl bg-[#13243b] text-[#e6edf7] shadow-[inset_0_0_0_1.5px_#2c4466] dark:bg-[#0e1220] dark:shadow-[inset_0_0_0_1.5px_#2a3150]">
      <div className="flex items-center justify-between gap-3 border-b border-dashed border-white/15 py-1.5 pr-1.5 pl-4">
        <span className="font-mono text-[13px] text-[#9fb0c9]">{file ?? ""}</span>
        <CopyButton text={code} />
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  )
}
