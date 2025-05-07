import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        muted: "var(--color-muted)",
        "muted-foreground": "var(--color-muted-foreground)",
        accent: "var(--color-accent)",
        "accent-foreground": "var(--color-accent-foreground)",
      },
      fontFamily: {
        sans: ["Atkinson Hyperlegible", "sans-serif"],
        serif: ["IBM Plex Serif", "serif"],
        mono: ["GeistMono", "monospace"],
        clarity: ["Clarity City", "sans-serif"],
      },
    },
  },
} as Options;
