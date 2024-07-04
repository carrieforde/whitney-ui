"use client";

import * as React from "react";
import { createPortal } from "react-dom";

import { useTheme } from "@/components/theme-provider/use-theme";
import cn from "classnames";
import { Button } from "@/components/button/button";

import s from "@/components/alert/alert.module.css";
import { IconXMark } from "@/components/icons/icon-xmark";
import { VisuallyHidden } from "@/main";
import { AlertIconProps, AlertProps } from "@/components/alert/types";
import { useAlert } from "@/components/alert/use-alert";

const Icon: React.FC<AlertIconProps> = ({
  children,
  className,
  variant = "info",
}) => {
  const {
    components: { alert },
  } = useTheme();
  const iconClasses = cn(s.icon, "alert__icon", className);

  if (children === null) {
    return null;
  }

  return React.createElement(
    "span",
    { className: iconClasses },
    children || alert.icons[variant],
  );
};

export const Alert: React.FC<AlertProps> = ({
  variant,
  children,
  icon,
  isOpen = false,
  dismissible = false,
  className,
  iconClassName,
  buttonClassName,
}) => {
  const { close } = useAlert();
  const alertClasses = cn(s.alert, variant && [s[variant]], "alert", className);
  const iconClasses = cn("alert__icon", iconClassName);
  const buttonClasses = cn(s.button, "alert__button", buttonClassName);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div role="alert" className={alertClasses}>
      <Icon variant={variant} className={iconClasses}>
        {icon}
      </Icon>
      {children}
      {dismissible && (
        <Button type="button" onClick={close} className={buttonClasses}>
          <VisuallyHidden>Close</VisuallyHidden>
          <IconXMark />
        </Button>
      )}
    </div>,
    document.body,
  );
};
