import { Text } from "@/main";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const meta: Meta<typeof Text> = {
  title: "Text",
  component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Body1: Story = {
  args: {
    variant: "body1",
    children: "The quick brown fox jumped over the lazy dog.",
  },
};

export const Body2: Story = {
  args: {
    ...Body1.args,
    variant: "body2",
  },
};

export const Title: Story = {
  args: {
    ...Body1.args,
    variant: "title",
  },
};

export const Subtitle: Story = {
  args: {
    ...Body1.args,
    variant: "subtitle",
  },
};

export const Overline: Story = {
  args: {
    ...Body1.args,
    variant: "overline",
  },
};

export const CustomAs: Story = {
  args: {
    children: "Google",
    as: "a",
    href: "https://google.com",
    variant: "overline",
  },
};

export const Styled: Story = {
  render: (args) => (
    <Text
      {...args}
      style={
        {
          "--body1-font-family": '"Times New Roman", serif',
          "--body1-color": "rebeccapurple",
          "--body1-font-size": "20px",
          "--body1-line-height": 1.2,
        } as React.CSSProperties
      }
    />
  ),
  args: {
    ...Body1.args,
  },
  parameters: {
    docs: {
      source: {
        code: `
<style>
  :root {
    --body1-color: rebeccapurple,
    --body1-font-family: "Times New Roman", serif,
    --body1-font-size: 20px,
    --body1-line-height: 1.2,
  }
</style>
<Text variant="body1">
  The quick brown fox jumped over the lazy dog.
</Text>
        `,
      },
    },
  },
};

export const Playground: Story = {
  // ...Body1,
  args: {
    ...Body1.args,
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
};
