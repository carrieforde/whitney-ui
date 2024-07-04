"use client";

import { Alert } from "@/components/alert/alert";
import { AlertAction, AlertState } from "@/components/alert/types";
import * as React from "react";

const initialState: AlertState = {
  isOpen: false,
};

function reducer(state: AlertState, action: AlertAction): AlertState {
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

export const AlertContext = React.createContext<
  React.Dispatch<AlertAction> | undefined
>(undefined);

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
