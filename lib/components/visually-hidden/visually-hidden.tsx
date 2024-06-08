import { Props } from "@/utilities/types";
import * as React from "react";
import cn from "classnames";
import { forwardRef } from "@/utilities/react";
import s from "@/components/visually-hidden/visually-hidden.module.css";

const TagName = "span" satisfies React.ElementType;
type TagName = typeof TagName;

type VisuallyHiddenOptions<T extends React.ElementType = TagName> = {
  as?: T;
  focusable?: boolean;
};

export type VisuallyHiddenProps<T extends React.ElementType = TagName> = Props<
  T,
  VisuallyHiddenOptions<T>
>;

export const VisuallyHidden = forwardRef(function VisuallyHidden(
  { as = TagName, children, className, focusable, ...props },
  ref,
) {
  const classes = cn(
    {
      [s.visuallyHidden]: !focusable,
      [s.visuallyHiddenFocusable]: focusable,
    },
    "visually-hidden",
    className,
  );

  return React.createElement(
    as,
    {
      ref,
      className: classes,
      ...props,
    },
    children,
  );
});
