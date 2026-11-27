import { useId } from "react"

/**
 * The threadcn mark: a four-hole sewing button, sewn on with a cross stitch.
 * One color (currentColor), so it works on any background. The holes, the rim
 * and the thread are cut out with a mask, so the background shows through.
 */
export function SewingButton({ className }: { className?: string }) {
  const mask = useId()
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden="true" focusable="false">
      <mask id={mask}>
        <rect width="96" height="96" fill="#fff" />
        <circle cx="48" cy="48" r="31" fill="none" stroke="#000" strokeWidth="3.5" />
        <circle cx="38" cy="38" r="6" />
        <circle cx="58" cy="38" r="6" />
        <circle cx="38" cy="58" r="6" />
        <circle cx="58" cy="58" r="6" />
        <path d="M38 38 58 58M58 38 38 58" stroke="#000" strokeWidth="5.5" strokeLinecap="round" />
      </mask>
      <circle cx="48" cy="48" r="42" fill="currentColor" mask={`url(#${mask})`} />
    </svg>
  )
}

/** The mark plus the name, as the site shows it in the top bar. */
export function Logo() {
  return (
    <span className="inline-flex items-center gap-2 font-(family-name:--tx-font-patch) text-xl font-semibold tracking-tight">
      <SewingButton className="size-7 text-(--tx-patch)" />
      threadcn
    </span>
  )
}
