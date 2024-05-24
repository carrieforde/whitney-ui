"use client";

import cn from "classnames";

import * as React from "react";

import s from "./banner.module.css";

type BannerVariant = "default" | "error" | "info" | "success" | "warning";

export type BannerProps = React.PropsWithChildren<{
  variant?: BannerVariant;
  icon?: React.ReactNode;
  className?: string;
  iconClassName?: string;
}>;

export type BannerIconConfig = Record<BannerVariant, React.ReactNode>;

export function Banner({
  children,
  className,
  variant,
}: BannerProps) {
  const bannerClasses = cn(
    s.banner,
    variant && [s[variant]],
    "banner",
    `banner--${variant}`,
    className
  );

  return (
    <section className={bannerClasses}>
      {children}
    </section>
  );
}

