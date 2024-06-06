import * as React from "react";

export type ArbitraryObject = Record<string, any>;

export type EmptyObject = Record<keyof any, never>;

export type Props<
  T extends React.ElementType,
  P extends ArbitraryObject = EmptyObject,
> = P & React.HTMLProps<T>;
