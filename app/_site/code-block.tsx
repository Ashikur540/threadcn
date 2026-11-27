import { cn } from "cn"

import { CopyButton } from "./copy"

/**
 * A dark code panel with a file name and a copy button. Plain text, no colors.
 * Its colors come from the fabric (a deep secondary patch), so it follows the mode.
 */
export function CodeBlock({ code, file, className }: { code: string; file?: string; className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl bg-[color-mix(in_srgb,var(--tx-patch-secondary)_62%,black)] text-(--tx-patch-secondary-foreground) shadow-[inset_0_0_0_1.5px_var(--tx-patch-secondary)]",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b border-dashed border-current/20 py-1.5 pr-1.5 pl-4">
        <span className="font-mono text-[13px] opacity-80">{file ?? ""}</span>
        <CopyButton text={code} />
      </div>
      <pre className="max-h-[32rem] overflow-auto p-4 font-mono text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  )
}
