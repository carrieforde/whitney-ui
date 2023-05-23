import * as React from "react";

import cn from "classnames";
import { useTheme } from "../theme-provider/theme-provider";
import s from "./spinner.module.css";

type SpinnerSize = "small" | "medium" | "large";

type SpinnerProps = {
  color?: "default" | "primary" | "secondary";
  size?: SpinnerSize;
};

export const Spinner: React.FC<SpinnerProps> = ({ size, color }) => {
  const { components } = useTheme();

  const spinnerClasses = cn(
    s.spinner,
    size && [s[size]],
    color && [s[color]],
    "spinner"
  );

  return <span className={spinnerClasses}>{components.spinner.icon}</span>;
};

export default Spinner;
