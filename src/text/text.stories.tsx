import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./text";

const meta: Meta<typeof Text> = {
  title: "Text",
  component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Body1: Story = {
  render: (props) => (
    <Text {...props}>The quick brown fox jumped over the lazy dog.</Text>
  ),
};

export const Body2: Story = {
  ...Body1,
  args: {
    variant: "body2",
  },
};

export const Title: Story = {
  ...Body1,
  args: {
    variant: "title",
  },
};

export const Subtitle: Story = {
  ...Body1,
  args: {
    variant: "subtitle",
  },
};

export const Overline: Story = {
  ...Body1,
  args: {
    variant: "overline",
  },
};

export const Playground: Story = {
  ...Body1,
  args: {},
};
