"use client";

import * as React from "react";

export function useToggle(initialState = false): [boolean, () => void] {
  const [toggled, setToggledState] = React.useState(initialState);

  const toggleState = React.useCallback(() => {
    setToggledState((s) => !s);
  }, []);

  return [toggled, toggleState];
}
