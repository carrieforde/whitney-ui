"use client";

import * as React from "react";
import { Theme, theme as defaultTheme } from "./theme";

type ThemeContextProps = Theme;

const ThemeContext = React.createContext<ThemeContextProps>(defaultTheme);

type ThemeProviderProps = React.PropsWithChildren<{
  theme?: Theme;
}>;

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = defaultTheme,
}) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;

export const useTheme = () => {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error("`useTheme` can only be used within a ThemeProvider!");
  }

  return context;
};
