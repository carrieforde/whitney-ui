import * as React from "react";
import cn from "classnames";
import s from "./text.module.css";

type TextComponent = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type TextVariant =
  | "title"
  | "subtitle"
  | "body1"
  | "body2"
  | "overline"
  | "finePrint";

type TComponent<T extends HTMLParagraphElement = HTMLParagraphElement> = T;

export type TextProps = {
  component?: TextComponent;
  variant?: TextVariant;
  className?: string;
} & React.HTMLProps<TComponent>;

export const Text = React.forwardRef<
  TComponent,
  React.PropsWithChildren<TextProps>
>(({ children, className, component, variant = "body1", ...props }, ref) => {
  const Comp = variant === "title" && !component ? "h1" : component ?? "p";
  const textClasses = cn("text", s.text, [s[variant]], className);

  return (
    <Comp {...props} className={textClasses} ref={ref}>
      {children}
    </Comp>
  );
});

Text.displayName = "Text";
