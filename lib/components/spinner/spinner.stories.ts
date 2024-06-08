import { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "@/components/spinner/spinner";
const meta: Meta<typeof Spinner> = {
  title: "Spinner",
  component: Spinner,
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Primary: Story = {
  args: {
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
  },
};

export const Playground: Story = {
  ...Small,
  parameters: {
    docs: {
      canvas: { sourceState: "shown" },
    },
  },
};
