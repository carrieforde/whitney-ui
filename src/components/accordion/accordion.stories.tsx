import { Meta, StoryObj } from "@storybook/react";
import { ChevronToggle } from "../toggles/chevron-toggle/chevron-toggle";
import { Accordion } from "./accordion";

const meta: Meta<typeof Accordion> = {
  title: "Content/Accordion",
  component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const SinglePanel: Story = {
  render: ({ displayMultiplePanels, toggleIcon }) => (
    <Accordion
      displayMultiplePanels={displayMultiplePanels}
      toggleIcon={toggleIcon}
    >
      <Accordion.Panel title="Panel 1">Panel 1 content</Accordion.Panel>
      <Accordion.Panel title="Panel 2">Panel 2 content</Accordion.Panel>
      <Accordion.Panel title="Panel 3">Panel 3 content</Accordion.Panel>
    </Accordion>
  ),
};

export const MultiPanel: Story = {
  ...SinglePanel,
  args: {
    displayMultiplePanels: true,
  },
};

export const CustomToggle: Story = {
  ...SinglePanel,
  args: {
    toggleIcon: <ChevronToggle />,
  },
};
