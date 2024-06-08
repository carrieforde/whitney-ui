import { ToggleProps } from "@/components/toggle/types";
import cn from "classnames";
import * as React from "react";

import { IconChevronDown } from "@/components/icons/icon-chevron-down";
import s from "@/components/toggle/chevron-toggle/chevron-toggle.module.css";

export const ChevronToggle: React.FC<ToggleProps> = ({ toggled }) => {
  const toggleClasses = cn("chevron-toggle", s.chevronToggle, {
    [s.toggled]: toggled,
  });

  return (
    <span className={toggleClasses}>
      <IconChevronDown />
    </span>
  );
};
