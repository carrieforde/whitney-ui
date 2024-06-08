import * as React from "react";

import cn from "classnames";
import { Spinner } from "@/components/spinner/spinner";
import s from "@/components/button/button.module.css";
import { Props } from "@/utilities/types";
import { forwardRef } from "@/utilities/react";

const TagName = "button" satisfies React.ElementType;
type TagName = typeof TagName;

type ButtonType = "button" | "reset" | "submit";
type ButtonVariant = "filled" | "outline" | "text" | "icon";
type ButtonColor = "primary" | "secondary" | "tertiary" | "error";

type ButtonOptions<T extends React.ElementType = TagName> = {
  as?: T;
  type: ButtonType;
  variant?: ButtonVariant;
  color?: ButtonColor;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  spinnerClassName?: string;
};

export type ButtonProps<T extends React.ElementType = TagName> = Props<
  T,
  ButtonOptions<T>
>;

export const Button = forwardRef(
  (
    {
      as = TagName,
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
    ref,
  ) => {
    const buttonClasses = cn(
      s.button,
      [s[color]],
      [s[variant]],
      "button",
      `button--${color}`,
      `button--${variant}`,
      className,
    );
    const buttonSpinnerClasses = cn(
      s.spinner,
      "button__spinner",
      spinnerClassName,
    );

    return React.createElement(
      as,
      { ...props, type, ref, className: buttonClasses, disabled },
      loading
        ? React.createElement(Spinner, { className: buttonSpinnerClasses })
        : children,
    );
  },
);
