import { ChevronToggle } from "@/components/toggle/chevron-toggle/chevron-toggle";
import { PlusMinusToggle } from "@/components/toggle/plus-minus-toggle/plus-minus-toggle";
import { ToggleProps } from "@/components/toggle/types";
import * as React from "react";

export const Toggle: React.FC<ToggleProps> = ({ variant, toggled }) => {
  if (variant === "chevron") {
    return <ChevronToggle toggled={toggled} />;
  }

  if (variant === "plus-minus") {
    return <PlusMinusToggle toggled={toggled} />;
  }

  return null;
};
