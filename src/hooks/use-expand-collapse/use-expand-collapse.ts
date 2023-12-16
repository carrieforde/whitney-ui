import * as React from "react";

export const useExpandCollapse = <
  TElement extends HTMLElement = HTMLElement
>() => {
  const collapse = React.useCallback(
    (elementRef: React.RefObject<TElement>) => {
      const element = elementRef.current;
      const height = element?.scrollHeight;
      if (!element) {
        return;
      }

      requestAnimationFrame(() => {
        element.style.height = `${height}px`;

        requestAnimationFrame(() => {
          element.style.height = "0px";
        });
      });
    },
    []
  );

  const expand = React.useCallback((elementRef: React.RefObject<TElement>) => {
    const element = elementRef.current;
    const height = element?.scrollHeight;
    if (!element) {
      return;
    }

    element.style.height = `${height}px`;
  }, []);

  return {
    collapse,
    expand,
  };
};
