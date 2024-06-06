import * as React from "react";
import cn from "classnames";
import s from "@/components/text/text.module.css";
import { Props } from "@/utilities/types";
import { forwardRef } from "@/utilities/react";

const TagName = "p" satisfies React.ElementType;
type TagName = typeof TagName;

type TextVariant =
  | "title"
  | "subtitle"
  | "body1"
  | "body2"
  | "overline"
  | "finePrint";

type TextOptions<T extends React.ElementType = TagName> = {
  as?: T;
  variant?: TextVariant;
};

export type TextProps<T extends React.ElementType = TagName> = Props<
  T,
  TextOptions<T>
>;

export const Text = forwardRef(function Text(
  { as = TagName, children, className, variant = "body", ...props },
  ref,
) {
  const tagName = variant === "title" && !as ? "h1" : as ?? "p";
  const classes = cn(
    s.text,
    s[variant],
    "text",
    variant && `text-${variant}`,
    className,
  );

  return React.createElement(
    tagName,
    {
      ref,
      className: classes,
      ...props,
    },
    children,
  );
});
