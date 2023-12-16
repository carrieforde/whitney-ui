import { Meta, StoryObj } from "@storybook/react";
import { useToggle } from "../../hooks/use-toggle/use-toggle";
import { Button } from "../button/button";
import { ChevronToggle as ToggleChevron } from "./chevron-toggle/chevron-toggle";
import { PlusMinusToggle as PlusMinus } from "./plus-minus-toggle/plus-minus-toggle";
import { ToggleProps } from "./typings";

const meta: Meta = {
  title: "Toggles",
};

export default meta;

type Story = StoryObj<ToggleProps>;

export const ChevronToggle: Story = {
  render: () => {
    const [toggled, setToggled] = useToggle();

    return (
      <Button type="button" onClick={setToggled} variant="icon">
        <ToggleChevron toggled={toggled} />
      </Button>
    );
  },
};

export const PlusMinusToggle: Story = {
  render: () => {
    const [toggled, setToggled] = useToggle();

    return (
      <Button type="button" onClick={setToggled} variant="icon">
        <PlusMinus toggled={toggled} />
      </Button>
    );
  },
};
