// src/theme/ThemeProvider.tsx
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Appearance } from "react-native";
import { dark, light, AppTheme, ThemeShape } from "./theme";

type Ctx = {
  theme: ThemeShape;
  mode: AppTheme;
  setMode: React.Dispatch<React.SetStateAction<AppTheme>>;
};

const ThemeCtx = createContext<Ctx | null>(null);
const KEY = "dropcart.theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<AppTheme>("light");

  // Load saved theme or fall back to system
  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem(KEY);
      if (saved === "light" || saved === "dark") {
        setMode(saved);
      } else {
        const sys = Appearance.getColorScheme() === "dark" ? "dark" : "light";
        setMode(sys);
      }
    })();
  }, []);

  // Persist when changed
  useEffect(() => {
    AsyncStorage.setItem(KEY, mode).catch(() => {});
  }, [mode]);

  const theme = useMemo<ThemeShape>(
    () => (mode === "dark" ? dark : light),
    [mode]
  );

  const value: Ctx = useMemo(() => ({ theme, mode, setMode }), [theme, mode]);

  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
