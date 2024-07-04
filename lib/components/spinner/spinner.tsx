import * as React from "react";

import cn from "classnames";
import { useTheme } from "@/components/theme-provider/use-theme";
import s from "@/components/spinner/spinner.module.css";

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
  const spinnerClasses = cn(
    s.spinner,
    size && [s[size]],
    color && [s[color]],
    "spinner",
    `spinner--${color}`,
    `spinner--${size}`,
    className,
  );

  const {
    components: { spinner },
  } = useTheme();

  return (
    <span className={spinnerClasses} title="Loading">
      {spinner.icon}
    </span>
  );
};
