"use client";

import { ThemeProvider } from "next-themes";

export function ColorThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider disableTransitionOnChange attribute="class">
      {children}
    </ThemeProvider>
  );
}
