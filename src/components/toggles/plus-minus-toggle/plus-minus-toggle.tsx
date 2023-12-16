import * as React from "react";
import cn from "classnames";

import s from "./plus-minus-toggle.module.css";
import { ToggleProps } from "../typings";

export const PlusMinusToggle: React.FC<ToggleProps> = ({ toggled }) => {
  const verticalBar = cn(
    "plus-minus-toggle",
    s.plusMinusBar,
    s.plusMinusVertical,
    {
      [s.plusMinusVerticalToggled]: toggled,
    }
  );
  const horiztonalBar = cn(s.plusMinusBar);

  return (
    <span className={s.plusMinus}>
      <span className={verticalBar} />
      <span className={horiztonalBar} />
    </span>
  );
};

export default PlusMinusToggle;
