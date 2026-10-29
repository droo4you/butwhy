// Design tokens — single source of truth for inline styles that can't use Tailwind classes
// (e.g. JS-computed colors, clamp() font sizes, dynamic border colors)
// Static colors should prefer Tailwind classes from tailwind.config.ts

export const T = {
  paper:     "#F5F0E8",
  cream:     "#EDE8DC",
  warm:      "#E2DAC8",
  ink:       "#1C1812",
  inkLight:  "#3D3428",
  inkFaint:  "#6B5F4E",
  inkMuted:  "#9C8E7A",
  rule:      "#C8BFA8",
  accent:    "#8B3A1A",
  accentSoft:"#C4622D",
} as const;

export const CAT_COLORS: Record<string, string> = {
  science:    "#2A5C45",
  history:    "#6B3A1F",
  nature:     "#4A6741",
  philosophy: "#3D3A6B",
  food:       "#7A3B1E",
  everyday:   "#5C4A2A",
  gamedev:    "#2A3F78",
  web:        "#1E4D4A",
  music:      "#7A3B4E",
  body:       "#7A4E3A",
  question:   "#6B3A1F",
};

export const CAT_LABELS: Record<string, string> = {
  science: "Science",
  history: "History",
  nature: "Nature",
  philosophy: "Philosophy",
  food: "Food",
  everyday: "Everyday",
  gamedev: "Game Dev",
  web: "Web",
  music: "Music",
  body: "Bodies",
  question: "Your question",
};

export const PROVIDER_LABELS: Record<string, string> = {
  groq: "Groq",
  gemini: "Gemini",
  claude: "Claude",
  openai: "OpenAI",
  preset: "Written trail",
  mock: "Practice mode",
};
