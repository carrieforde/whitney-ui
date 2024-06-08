import { VisuallyHidden } from "@/components/visually-hidden/visually-hidden";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof VisuallyHidden> = {
  title: "VisuallyHidden",
  component: VisuallyHidden,
};

export default meta;

type Story = StoryObj<typeof VisuallyHidden>;

export const Default: Story = {
  args: {
    children: "This text is visually hidden.",
  },
};
