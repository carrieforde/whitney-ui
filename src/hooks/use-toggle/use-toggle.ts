"use client";

import * as React from "react";

export const useToggle = (
  initialState = false
): [toggled: boolean, toggleState: () => void] => {
  const [toggled, setToggledState] = React.useState(initialState);

  const toggleState = React.useCallback(() => {
    setToggledState((s) => !s);
  }, []);

  return [toggled, toggleState];
};
