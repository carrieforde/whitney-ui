import cn from "classnames";

import * as React from "react";

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

const Icon: React.FC<React.PropsWithChildren<BannerIconProps>> = ({
  children,
  className,
  variant,
}) => {
  const iconClasses = cn(s.icon, "banner__icon", className);
  const textProps: Pick<TextProps, "component" | "className"> = {
    component: "span",
    className: iconClasses,
  };

  if (children) {
    return <Text {...textProps}>{children}</Text>;
  }

  if (variant === "error") {
    return <Text {...textProps}>🛑</Text>;
  }

  if (variant === "info") {
    return <Text {...textProps}>ℹ️</Text>;
  }

  if (variant === "success") {
    return <Text {...textProps}>✅</Text>;
  }

  if (variant === "warning") {
    return <Text {...textProps}>⚠️</Text>;
  }

  return null;
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
