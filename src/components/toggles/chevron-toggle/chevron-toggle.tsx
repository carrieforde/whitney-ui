import * as React from "react";
import cn from "classnames";
import { ChevronDown } from "../../icons";
import { ToggleProps } from "../typings";

import s from "./chevron-toggle.module.css";

export const ChevronToggle: React.FC<ToggleProps> = ({ toggled }) => {
  const toggleClasses = cn("chevron-toggle", s.chevronToggle, {
    [s.toggled]: toggled,
  });

  return (
    <span className={toggleClasses}>
      <ChevronDown />
    </span>
  );
};

export default ChevronToggle;
