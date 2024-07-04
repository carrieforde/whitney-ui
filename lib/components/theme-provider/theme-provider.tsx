import * as React from "react";
import {
  Theme,
  theme as defaultTheme,
} from "@/components/theme-provider/theme";

type ThemeContextProps = Theme;

export const ThemeContext =
  React.createContext<ThemeContextProps>(defaultTheme);

type ThemeProviderProps = React.PropsWithChildren<{
  theme?: Theme;
}>;

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = defaultTheme,
}) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
