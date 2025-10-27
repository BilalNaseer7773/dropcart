// src/theme/theme.ts
export type AppTheme = "light" | "dark";

export type ThemeColors = {
  bg: string;
  text: string;
  primary: string;
  muted: string;
  card: string;
  border: string;
};

export type ThemeShape = {
  name: AppTheme;
  colors: ThemeColors;
};

export const light: ThemeShape = {
  name: "light",
  colors: {
    bg: "#FFFFFF",
    text: "#111827",
    primary: "#2563EB",
    muted: "#6B7280",
    card: "#F9FAFB",
    border: "#E5E7EB",
  },
};

export const dark: ThemeShape = {
  name: "dark",
  colors: {
    bg: "#0B0F14",
    text: "#F3F4F6",
    primary: "#60A5FA",
    muted: "#9CA3AF",
    card: "#111827",
    border: "#1F2937",
  },
};
