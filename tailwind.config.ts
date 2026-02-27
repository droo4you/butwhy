import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper:    "#F5F0E8",
        cream:    "#EDE8DC",
        warm:     "#E2DAC8",
        ink: {
          DEFAULT: "#1C1812",
          light:   "#3D3428",
          faint:   "#6B5F4E",
          muted:   "#9C8E7A",
        },
        rule:     "#C8BFA8",
        accent: {
          DEFAULT: "#8B3A1A",
          soft:    "#C4622D",
        },
        cat: {
          science:    "#2A5C45",
          history:    "#6B3A1F",
          nature:     "#4A6741",
          philosophy: "#3D3A6B",
          food:       "#7A3B1E",
          everyday:   "#5C4A2A",
        },
      },
      fontFamily: {
        baskerville: ["var(--font-baskerville)", "Georgia", "serif"],
        sans:        ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
