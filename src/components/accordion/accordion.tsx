"use client";

import { kebabCase } from "lodash";
import * as React from "react";
import cn from "classnames";

import { useExpandCollapse } from "../../hooks";
import expandCollapse from "../../styles/expand-collapse.module.css";
import { PlusMinusToggle } from "../toggles/plus-minus-toggle/plus-minus-toggle";

import { Button } from "../button/button";
import { Text, TextProps } from "../text/text";
import s from "./accordion.module.css";

type HeadingLevel = Omit<TextProps["component"], "p" | "span">;

type AccordionContextProps = {
  expandedPanels?: string[];
  setExpandedPanels?: React.Dispatch<React.SetStateAction<string[]>>;
  displayMultiplePanels?: boolean;
  toggleIcon?: React.ReactElement;
  headingLevel?: HeadingLevel;
};

const AccordionContext = React.createContext<AccordionContextProps>({
  expandedPanels: undefined,
  setExpandedPanels: undefined,
  displayMultiplePanels: false,
  toggleIcon: undefined,
  headingLevel: "h3",
});

const useAccordion = () => {
  const { expandedPanels, setExpandedPanels, ...rest } =
    React.useContext(AccordionContext);

  if (!expandedPanels || !setExpandedPanels) {
    throw new Error("AccordionPanel must be used inside an Accordion!");
  }

  return {
    expandedPanels,
    setExpandedPanels,
    ...rest,
  };
};

interface AccordionComposition {
  // eslint-disable-next-line no-use-before-define
  Panel: React.FC<React.PropsWithChildren<AccordionPanelProps>>;
}

export type AccordionProps = {
  displayMultiplePanels?: boolean;
  toggleIcon?: React.ReactElement;
  headingLevel?: HeadingLevel;
};

export const Accordion: React.FC<React.PropsWithChildren<AccordionProps>> &
  AccordionComposition = ({
  children,
  displayMultiplePanels,
  toggleIcon,
  headingLevel,
}) => {
  const [expandedPanels, setExpandedPanels] = React.useState<string[]>([]);

  return (
    <AccordionContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        expandedPanels,
        setExpandedPanels,
        displayMultiplePanels,
        toggleIcon,
        headingLevel,
      }}
    >
      <div className={cn("accordion", s.accordion)}>{children}</div>
    </AccordionContext.Provider>
  );
};

export type AccordionPanelProps = {
  title: string;
};

const AccordionPanel: React.FC<
  React.PropsWithChildren<AccordionPanelProps>
> = ({ children, title }) => {
  const panelRef = React.useRef<HTMLDivElement>(null);
  const {
    expandedPanels,
    setExpandedPanels,
    displayMultiplePanels,
    toggleIcon,
    headingLevel,
  } = useAccordion();
  const { collapse, expand } = useExpandCollapse<HTMLDivElement>();

  const key = kebabCase(title);
  const buttonId = `${key}-button`;
  const panelId = `${key}-panel`;
  const isHidden = !expandedPanels.includes(key);

  const panelClasses = cn(
    "accordion-panel",
    s.accordionPanel,
    expandCollapse.collapsed,
    {
      [expandCollapse.expanded]: !isHidden,
    }
  );

  const toggle = toggleIcon
    ? React.cloneElement(toggleIcon, {
        toggled: !isHidden,
      })
    : null;

  const handleClick = () => {
    if (displayMultiplePanels) {
      if (isHidden) {
        setExpandedPanels((panels) => [...panels, key]);
        expand(panelRef);
      } else {
        setExpandedPanels((panels) => panels.filter((panel) => panel !== key));
        collapse(panelRef);
      }
    } else if (isHidden) {
      setExpandedPanels([key]);
      expand(panelRef);
    } else {
      // This block is only needed when closing a single opened panel.
      setExpandedPanels([]);
      collapse(panelRef);
    }
  };

  React.useEffect(() => {
    // This handles collapsing the panel when another this panel key is replaced (for single open panel).
    if (isHidden) {
      collapse(panelRef);
    }
  }, [collapse, isHidden]);

  return (
    <>
      <Text
        component={headingLevel as TextProps["component"]}
        className={s.accordionHeading}
      >
        <Button
          type="button"
          onClick={handleClick}
          className={cn("accordion-toggle", s.accordionToggle)}
          aria-expanded={!isHidden}
          aria-controls={panelId}
          id={buttonId}
        >
          {title}
          {toggle ?? <PlusMinusToggle toggled={!isHidden} />}
        </Button>
      </Text>
      <div
        ref={panelRef}
        id={panelId}
        role="region"
        className={panelClasses}
        aria-labelledby={buttonId}
      >
        {children}
      </div>
    </>
  );
};

Accordion.Panel = AccordionPanel;

export default Accordion;
