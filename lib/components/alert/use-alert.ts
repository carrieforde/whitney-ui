"use client";

import { AlertContext } from "@/components/alert/alert-provider";
import { AlertProps, AlertVariant } from "@/components/alert/types";
import { useTheme } from "@/components/theme-provider/use-theme";
import * as React from "react";

type AlertOptions = Pick<AlertProps, "icon" | "dismissible"> & {
  duration?: number;
};

export const useAlert = () => {
  const { components } = useTheme();
  const dispatch = React.useContext(AlertContext);
  const timeout = React.useRef<any>(null);

  const defaultAlertOptions: AlertOptions = React.useMemo(
    () => ({
      duration: components.alert.defaultDurationInMs,
      icon: undefined,
    }),
    [components.alert.defaultDurationInMs],
  );

  if (!dispatch) {
    throw new Error("`useAlert` must be called within an `AlertProvider`!");
  }

  React.useEffect(() => () => clearTimeout(timeout.current), []);

  const baseAlertDispatch = React.useCallback(
    (
      type: AlertVariant,
      message: React.ReactNode,
      options: AlertOptions = defaultAlertOptions,
    ) => {
      const {
        icon,
        duration = components.alert.defaultDurationInMs,
        dismissible,
      } = options;

      dispatch({
        type,
        payload: {
          children: message,
          icon,
          dismissible,
        },
      });

      timeout.current = setTimeout(() => dispatch({ type: "close" }), duration);
    },
    [components.alert.defaultDurationInMs, defaultAlertOptions, dispatch],
  );

  return {
    error: React.useCallback(
      (message: React.ReactNode, options?: AlertOptions) =>
        baseAlertDispatch("error", message, options),
      [baseAlertDispatch],
    ),
    info: React.useCallback(
      (message: React.ReactNode, options?: AlertOptions) =>
        baseAlertDispatch("info", message, options),
      [baseAlertDispatch],
    ),
    success: React.useCallback(
      (message: React.ReactNode, options?: AlertOptions) =>
        baseAlertDispatch("success", message, options),
      [baseAlertDispatch],
    ),
    warning: React.useCallback(
      (message: React.ReactNode, options?: AlertOptions) =>
        baseAlertDispatch("warning", message, options),
      [baseAlertDispatch],
    ),
    close: React.useCallback(() => dispatch({ type: "close" }), [dispatch]),
  };
};
