export type AlertVariant = "error" | "info" | "warning" | "success";

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

export type AlertIconProps = React.PropsWithChildren<
  Pick<AlertProps, "variant"> & { className?: string }
>;

export type AlertIconConfig = Record<AlertVariant, React.ReactNode>;

export type AlertState = AlertProps;

export type AlertAction =
  | { type: "open" }
  | { type: "close" }
  | {
      type: AlertVariant;
      payload: AlertProps;
    };
