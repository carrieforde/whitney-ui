"use client";

import * as React from "react";
import { createPortal } from "react-dom";

import cn from "classnames";
import { Button } from "../button/button";
import { XMark } from "../icons/x-mark";
import { useTheme } from "../theme-provider/theme-provider";
import { Text, TextProps } from "../text/text";
import s from "./alert.module.css";
import utilS from "../../styles/utilities.module.css";

type AlertVariant = "error" | "info" | "warning" | "success";

export type AlertProps = React.PropsWithChildren<{
  isOpen?: boolean;
  icon?: React.ReactNode;
  variant?: AlertVariant;
  dismissible?: boolean;
  className?: string;
  iconClassName?: string;
  /**
   * For the dismissible / close button.
   */
  buttonClassName?: string;
}>;

type AlertIconProps = React.PropsWithChildren<
  Pick<AlertProps, "variant"> & { className?: string }
>;

export type AlertIconConfig = Record<AlertVariant, React.ReactNode>;

type State = AlertProps;

type Action =
  | { type: "open" }
  | { type: "close" }
  | {
      type: AlertVariant;
      payload: AlertProps;
    };

const initialState: State = {
  isOpen: false,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "close":
      return { ...state, isOpen: false };

    case "open":
      return { ...state, isOpen: true };

    case "error":
    case "info":
    case "success":
    case "warning":
      return {
        ...state,
        ...action.payload,
        variant: action.type,
        isOpen: true,
      };

    default:
      return state;
  }
}

const AlertContext = React.createContext<React.Dispatch<Action> | undefined>(
  undefined
);

const Icon: React.FC<AlertIconProps> = ({
  children,
  className,
  variant = "info",
}) => {
  const { components } = useTheme();

  const iconClasses = cn(s.icon, "alert__icon", className);
  const textProps: Pick<TextProps, "component" | "className"> = {
    component: "span",
    className: iconClasses,
  };

  if (children) {
    return <Text {...textProps}>{children}</Text>;
  }

  return <Text {...textProps}>{components.alert.icons[variant]}</Text>;
};

const Alert: React.FC<AlertProps> = ({
  variant,
  children,
  icon,
  isOpen = false,
  dismissible = false,
  className,
  iconClassName,
  buttonClassName,
}) => {
  const dispatch = React.useContext(AlertContext);
  const alertClasses = cn(s.alert, variant && [s[variant]], "alert", className);
  const iconClasses = cn("alert__icon", iconClassName);
  const buttonClasses = cn(s.button, "alert__button", buttonClassName);

  const handleClick = () => dispatch?.({ type: "close" });

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
        <Button type="button" onClick={handleClick} className={buttonClasses}>
          <Text className={utilS.srOnly}>Close</Text>
          <XMark />
        </Button>
      )}
    </div>,
    document.body
  );
};

export const AlertProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AlertContext.Provider value={dispatch}>
      {children}
      <Alert {...state} />
    </AlertContext.Provider>
  );
};

type AlertOptions = Pick<AlertProps, "icon" | "dismissible"> & {
  duration?: number;
};

export const useAlert = () => {
  const { components } = useTheme();
  const dispatch = React.useContext(AlertContext);
  const timeout = React.useRef<any>(null);

  const defaultAlertOptions: AlertOptions = {
    duration: components.alert.defaultDurationInMs,
    icon: undefined,
  };

  if (!dispatch) {
    throw new Error("`useAlert` must be called within an `AlertProvider`!");
  }

  React.useEffect(() => () => clearTimeout(timeout.current), []);

  const baseAlertDispatch = React.useCallback(
    (
      type: AlertVariant,
      message: React.ReactNode,
      options: AlertOptions = defaultAlertOptions
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
    [dispatch]
  );

  return {
    error: React.useCallback(
      (message: React.ReactNode, options?: AlertOptions) =>
        baseAlertDispatch("error", message, options),
      [baseAlertDispatch]
    ),
    info: React.useCallback(
      (message: React.ReactNode, options?: AlertOptions) =>
        baseAlertDispatch("info", message, options),
      [baseAlertDispatch]
    ),
    success: React.useCallback(
      (message: React.ReactNode, options?: AlertOptions) =>
        baseAlertDispatch("success", message, options),
      [baseAlertDispatch]
    ),
    warning: React.useCallback(
      (message: React.ReactNode, options?: AlertOptions) =>
        baseAlertDispatch("warning", message, options),
      [baseAlertDispatch]
    ),
  };
};
