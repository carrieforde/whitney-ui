import { Meta, StoryObj } from "@storybook/react";

import s from "../styles/utilities.module.css";
import { Button } from "./button";
import { Heart } from "../icons/heart";
import { Text } from "../text/text";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    color: "primary",
    children: "Click me",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    color: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    ...Primary.args,
    color: "tertiary",
  },
};

export const Error: Story = {
  args: {
    ...Primary.args,
    color: "error",
  },
};

export const Icon: Story = {
  args: {
    type: "button",
    color: "error",
    variant: "icon",
    children: (
      <>
        <Text className={s.srOnly}>Favorite</Text>
        <Heart />
      </>
    ),
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
      source: {
        code: `
import Button from "components";
import s from "styles/utilities.module.css";

export const FavoriteButton: React.FC<ButtonProps> = (props) => (
  <Button {...props} type="button" color="error" variant="icon">
    <Text className={s.srOnly}>Favorite</Text>
    <Heart />
  </Button>
);
        `,
      },
    },
  },
};

export const Playground: Story = {
  args: {
    ...Primary.args,
    variant: "filled",
    color: "primary",
    type: "button",
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
};

export const Styled: Story = {
  render: () => (
    <div
      style={
        {
          "--button-primary-main": "hotpink",
          "--button-font-family": "Verdana",
          "--button-font-size": "20px",
          "--button-padding": "16px 24px",
        } as React.CSSProperties
      }
    >
      <Button type="button" variant="filled" color="primary">
        Click me!
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<style>
  :root {
    --button-primary: hotpink;
    --button-font-family: Verdana, sans-serif;
    --button-font-size: 20px;
    --button-padding: 16px 24px;
  }
</style>
<Button type="button" variant="filled" color="primary">
  Click me!
</Button>
        `,
      },
    },
  },
};
