"use client";

import cn from "classnames";

import * as React from "react";

import { useTheme } from "../theme-provider/theme-provider";
import { Text, TextProps } from "../text/text";
import s from "./banner.module.css";

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

const Icon: React.FC<React.PropsWithChildren<BannerIconProps>> = ({
  children,
  className,
  variant = "default",
}) => {
  const { bannerIcons } = useTheme();
  const iconClasses = cn(s.icon, "banner__icon", className);
  const textProps: Pick<TextProps, "component" | "className"> = {
    component: "span",
    className: iconClasses,
  };

  if (children) {
    return <Text {...textProps}>{children}</Text>;
  }

  return <Text {...textProps}>{bannerIcons[variant]}</Text>;
};

export const Banner: React.FC<BannerProps> = ({
  children,
  className,
  icon,
  iconClassName,
  variant,
}) => {
  const bannerClasses = cn(
    s.banner,
    variant && [s[variant]],
    "banner",
    `banner--${variant}`,
    className
  );

  return (
    <section className={bannerClasses}>
      <Icon variant={variant} className={iconClassName}>
        {icon}
      </Icon>
      {children}
    </section>
  );
};

export default Banner;
