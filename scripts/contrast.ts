// WCAG 2.2 contrast checks for fabric tokens. Used by tests/contrast.test.ts.
import type { Fabric, PairSide } from "@/registry/threadcn/fabrics/denim"

const HEX = /^#[0-9a-f]{6}$/i

function channels(hex: string): number[] {
  if (!HEX.test(hex)) throw new Error(`Contrast check needs a 6-digit hex color, got "${hex}"`)
  return [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16))
}

function luminance(hex: string): number {
  const [r, g, b] = channels(hex).map((v) => {
    const c = v / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

/** Contrast ratio of two colors, rounded to 2 decimals (21 is the maximum). */
export function ratio(fgHex: string, bgHex: string): number {
  const [hi, lo] = [luminance(fgHex), luminance(bgHex)].sort((a, b) => b - a)
  return Math.round(((hi + 0.05) / (lo + 0.05)) * 100) / 100
}

/** Same math as CSS color-mix(in srgb, a weight%, b). */
export function mix(aHex: string, bHex: string, weight: number): string {
  const a = channels(aHex)
  const b = channels(bHex)
  return "#" + a.map((v, i) => Math.round(v * weight + b[i] * (1 - weight)).toString(16).padStart(2, "0")).join("")
}

function resolve(side: PairSide, colors: Record<string, string>) {
  if (typeof side === "string") return { label: side, hex: colors[side] }
  const [a, b, w] = side.mix
  return { label: `${a}~${b}@${w}`, hex: mix(colors[a], colors[b], w) }
}

/** Returns only the pairs that fail in the given mode. */
export function checkPairs(fabric: Pick<Fabric, "pairs"> & Record<"light" | "dark", Record<string, string>>, mode: "light" | "dark") {
  const colors = fabric[mode]
  return fabric.pairs
    .map(({ fg, bg, min }) => {
      const f = resolve(fg, colors)
      const b = resolve(bg, colors)
      return { fg: f.label, bg: b.label, ratio: ratio(f.hex, b.hex), min }
    })
    .filter((p) => p.ratio < p.min)
}
