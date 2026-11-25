// The Denim fabric: Denim in light mode, Quilted night in dark mode.
// This file is the one source of every Denim design value.
// scripts/build-registry.ts turns each key into a --tx-<key> CSS variable
// (for the app and for the installable registry items), and
// tests/contrast.test.ts checks every color pair for readability.
// A value may point at another token with var(--tx-...).

/** One side of a contrast pair: a token name, or a blend of two tokens (like CSS color-mix). */
export type PairSide = string | { mix: [string, string, number] }

export type Fabric = {
  name: string
  status: "draft" | "approved"
  shared: Record<string, string>
  light: Record<string, string>
  dark: Record<string, string>
  pairs: { fg: PairSide; bg: PairSide; min: number }[]
}

export const denim = {
  name: 'denim',
  status: "approved", // by the owner on 2026-11-23

  // Same in both modes.
  shared: {
    radius: '14px',
    'stitch-inset': '6px',
    'stitch-dash': '5 4', // stitch length, then gap
    'press-depth': '4px',
    'press-duration': '80ms',
    'patch-shadow': 'rgb(0 0 0 / .28)', // soft shadow a raised patch casts on the fabric
    'texture-opacity': '1',
    'font-patch': 'inherit',
    'font-heading': 'inherit',
    // a gap in the fabric color, then the ring color
    'focus-ring': '0 0 0 2px var(--tx-fabric), 0 0 0 5px var(--tx-ring)',
  },

  light: {
    fabric: '#2b4a74',
    'fabric-highlight': '#3a5a86', // lightest line in the twill texture
    surface: '#335687',
    'surface-highlight': '#335687', // denim cards have no sheen
    'surface-foreground': '#eef3fb',
    'muted-foreground': '#cfdbee',
    thread: '#f7b866', // copper topstitch, bright enough to pop on denim
    'thread-width': '1.8px',
    patch: '#e1a73e',
    'patch-foreground': '#3a2a1a',
    'patch-edge': '#a8741f',
    'patch-secondary': '#1f3a5e',
    'patch-secondary-foreground': '#eef3fb',
    'patch-secondary-edge': '#13263f',
    'patch-destructive': '#a9462a',
    'patch-destructive-foreground': '#fff3e6',
    'patch-destructive-edge': '#6e2a14',
    leather: '#7b4a28',
    'leather-foreground': '#f1d7b8',
    'leather-edge': '#442916',
    field: '#efe3c6',
    'field-foreground': '#3a2a1a',
    'field-border': '#8a6d3b',
    ring: '#ffd27a',
    invalid: '#ffc9bb', // error text and error outline on the fabric
    'invalid-edge': '#a9462a', // error outline on the cream field
    rivet: '#c9853a',
    'rivet-light': '#ffe2b0',
    'rivet-dark': '#6b3d12',
    texture: 'repeating-linear-gradient(135deg, var(--tx-fabric-highlight) 0 1px, transparent 1px 4px), repeating-linear-gradient(45deg, rgb(0 0 0 / .14) 0 1px, transparent 1px 3px)',
    'texture-size': 'auto',
    'card-shadow': '0 10px 24px rgb(0 0 0 / .32), inset 0 1px 0 rgb(255 255 255 / .12)',
    'card-sheen': 'none',
  },

  dark: {
    fabric: '#151a2c',
    'fabric-highlight': '#262d47', // quilting line color, also used inside the SVG below
    surface: '#232a44',
    'surface-highlight': '#2f3754', // brightest point of the puffy card sheen
    'surface-foreground': '#e7eaf3',
    'muted-foreground': '#aab2c9',
    thread: '#9aa3bd', // white thread, made solid so contrast can be measured
    'thread-width': '1.6px',
    patch: '#e1a73e',
    'patch-foreground': '#3a2a1a',
    'patch-edge': '#8a5e18',
    'patch-secondary': '#2a3150',
    'patch-secondary-foreground': '#e7eaf3',
    'patch-secondary-edge': '#10142a',
    'patch-destructive': '#a9462a',
    'patch-destructive-foreground': '#fff3e6',
    'patch-destructive-edge': '#6e2a14',
    leather: '#5a3519',
    'leather-foreground': '#f1d7b8',
    'leather-edge': '#321d0e',
    field: '#1b2036',
    'field-foreground': '#e7eaf3',
    'field-border': '#7d86a3',
    ring: '#ffd27a',
    invalid: '#ff9b85',
    'invalid-edge': '#ff9b85',
    rivet: '#c9853a',
    'rivet-light': '#ffe2b0',
    'rivet-dark': '#6b3d12',
    texture: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44'%3E%3Cpath d='M0 22 L22 0 L44 22 L22 44Z' fill='none' stroke='%23262d47' stroke-width='1.2' stroke-dasharray='3 3'/%3E%3C/svg%3E\")",
    'texture-size': '44px 44px',
    'card-shadow': 'inset 0 -6px 12px rgb(0 0 0 / .35), inset 0 2px 0 rgb(255 255 255 / .08), 0 8px 18px rgb(0 0 0 / .35)',
    'card-sheen': 'radial-gradient(ellipse at 40% 25%, var(--tx-surface-highlight), transparent 65%)',
  },

  // Every pair is checked in both modes. min 4.5 = normal text,
  // min 3 = focus rings, borders and other non-text parts.
  // A side can be a blend, { mix: [a, b, weightOfA] }, the same as CSS color-mix.
  pairs: [
    // text on surfaces and on the fabric texture
    { fg: 'surface-foreground', bg: 'surface', min: 4.5 },
    { fg: 'muted-foreground', bg: 'surface', min: 4.5 },
    { fg: 'surface-foreground', bg: 'surface-highlight', min: 4.5 },
    { fg: 'muted-foreground', bg: 'surface-highlight', min: 4.5 },
    { fg: 'surface-foreground', bg: 'fabric', min: 4.5 },
    { fg: 'surface-foreground', bg: 'fabric-highlight', min: 4.5 },
    { fg: 'muted-foreground', bg: 'fabric-highlight', min: 4.5 },
    { fg: 'field-foreground', bg: 'field', min: 4.5 },
    // placeholder text in a field (canvas.css uses the same 70% blend)
    { fg: { mix: ['field-foreground', 'field', 0.7] }, bg: 'field', min: 4.5 },
    // error text on the fabric, its texture lines, and inside cards
    { fg: 'invalid', bg: 'fabric', min: 4.5 },
    { fg: 'invalid', bg: 'fabric-highlight', min: 4.5 },
    { fg: 'invalid', bg: 'surface', min: 4.5 },
    // patches: rest, hover (85% toward the edge), pressed with reduced motion (75%)
    { fg: 'patch-foreground', bg: 'patch', min: 4.5 },
    { fg: 'patch-foreground', bg: { mix: ['patch', 'patch-edge', 0.85] }, min: 4.5 },
    { fg: 'patch-foreground', bg: { mix: ['patch', 'patch-edge', 0.75] }, min: 4.5 },
    { fg: 'patch-secondary-foreground', bg: 'patch-secondary', min: 4.5 },
    { fg: 'patch-secondary-foreground', bg: { mix: ['patch-secondary', 'patch-secondary-edge', 0.85] }, min: 4.5 },
    { fg: 'patch-secondary-foreground', bg: { mix: ['patch-secondary', 'patch-secondary-edge', 0.75] }, min: 4.5 },
    { fg: 'patch-destructive-foreground', bg: 'patch-destructive', min: 4.5 },
    { fg: 'patch-destructive-foreground', bg: { mix: ['patch-destructive', 'patch-destructive-edge', 0.85] }, min: 4.5 },
    { fg: 'patch-destructive-foreground', bg: { mix: ['patch-destructive', 'patch-destructive-edge', 0.75] }, min: 4.5 },
    { fg: 'leather-foreground', bg: 'leather', min: 4.5 },
    { fg: 'leather-foreground', bg: { mix: ['leather', 'leather-edge', 0.85] }, min: 4.5 },
    { fg: 'leather-foreground', bg: { mix: ['leather', 'leather-edge', 0.75] }, min: 4.5 },
    // non-text: focus ring, field stitch, error outlines, thread
    { fg: 'ring', bg: 'fabric', min: 3 },
    { fg: 'ring', bg: 'fabric-highlight', min: 3 },
    { fg: 'ring', bg: 'patch-secondary', min: 3 },
    { fg: 'field-border', bg: 'field', min: 3 },
    { fg: 'invalid-edge', bg: 'field', min: 3 },
    { fg: 'thread', bg: 'fabric', min: 3 },
    { fg: 'thread', bg: 'fabric-highlight', min: 3 },
    { fg: 'thread', bg: 'surface', min: 3 },
  ],
} satisfies Fabric
