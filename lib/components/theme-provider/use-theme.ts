"use client";

import { ThemeContext } from "@/components/theme-provider/theme-provider";
import * as React from "react";

export const useTheme = () => {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error("`useTheme` can only be used within a ThemeProvider!");
  }

  return context;
};
