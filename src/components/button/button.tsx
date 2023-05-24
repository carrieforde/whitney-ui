import * as React from "react";

import cn from "classnames";
import { Spinner } from "../spinner/spinner";
import s from "./button.module.css";

type ButtonType = "button" | "reset" | "submit";
type ButtonVariant = "filled" | "outline" | "text" | "icon";
type ButtonColor = "primary" | "secondary" | "tertiary" | "error";

export type ButtonProps = {
  type: ButtonType;
  variant?: ButtonVariant;
  color?: ButtonColor;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  spinnerClassName?: string;
} & React.HTMLProps<HTMLButtonElement>;

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ButtonProps>
>(
  (
    {
      children,
      className,
      color = "tertiary",
      type,
      variant = "text",
      loading,
      disabled,
      spinnerClassName,
      ...props
    },
    ref
  ) => {
    const buttonClasses = cn(
      s.button,
      [s[color]],
      [s[variant]],
      "button",
      `button--${color}`,
      `button--${variant}`,
      className
    );
    const buttonSpinnerClasses = cn(
      s.spinner,
      "button__spinner",
      spinnerClassName
    );

    return (
      <button
        {...props}
        type={type}
        ref={ref}
        className={buttonClasses}
        disabled={disabled}
      >
        {loading ? <Spinner className={buttonSpinnerClasses} /> : children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
