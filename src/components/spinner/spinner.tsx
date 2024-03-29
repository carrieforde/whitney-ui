import * as React from "react";

import cn from "classnames";
import { useTheme } from "../theme-provider/theme-provider";
import s from "./spinner.module.css";

type SpinnerSize = "small" | "medium" | "large";

export type SpinnerProps = {
  color?: "default" | "primary" | "secondary";
  size?: SpinnerSize;
  className?: string;
};

export const Spinner: React.FC<SpinnerProps> = ({
  size,
  color = "default",
  className,
}) => {
  const { components } = useTheme();

  const spinnerClasses = cn(
    s.spinner,
    size && [s[size]],
    color && [s[color]],
    "spinner",
    `spinner--${color}`,
    `spinner--${size}`,
    className
  );

  return (
    <span className={spinnerClasses} title="Loading">
      {components.spinner.icon}
    </span>
  );
};

export default Spinner;
