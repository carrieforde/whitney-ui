"use client";

import cn from "classnames";

import * as React from "react";

import s from "@/components/banner/banner.module.css";
import { useTheme } from "@/components/theme-provider/use-theme";

type BannerVariant = "default" | "error" | "info" | "success" | "warning";

export type BannerProps = React.PropsWithChildren<{
  variant?: BannerVariant;
  icon?: React.ReactNode;
  className?: string;
  iconClassName?: string;
}>;

type BannerIconProps = React.PropsWithChildren<
  Pick<BannerProps, "variant"> & { className?: string }
>;

export type BannerIconConfig = Record<BannerVariant, React.ReactNode>;

const Icon: React.FC<BannerIconProps> = ({
  children,
  className,
  variant = "default",
}) => {
  const {
    components: { banner },
  } = useTheme();
  const iconClasses = cn(s.icon, "banner__icon", className);

  if (children === null) {
    return null;
  }

  return React.createElement(
    "span",
    { className: iconClasses },
    children || banner.icons[variant],
  );
};

export function Banner({ children, className, icon, variant }: BannerProps) {
  const bannerClasses = cn(
    s.banner,
    variant && [s[variant]],
    "banner",
    `banner--${variant}`,
    className,
  );

  return (
    <section className={bannerClasses}>
      <Icon variant={variant} className={s.icon}>
        {icon}
      </Icon>
      {children}
    </section>
  );
}
