import * as React from "react";

export function forwardRef<T extends React.FC<any>>(render: T) {
  const Role = React.forwardRef((props, ref) => render({ ...props, ref }));
  Role.displayName = render.displayName || render.name;
  return Role as unknown as T;
}
