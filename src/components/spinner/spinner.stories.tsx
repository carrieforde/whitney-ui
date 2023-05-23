import { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./spinner";
import { Theme, theme as defaultTheme } from "../theme-provider/theme";
import { ThemeProvider } from "../theme-provider/theme-provider";

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

export const ThemeSpinner: Story = {
  render: (args) => {
    const theme: Theme = {
      ...defaultTheme,
      components: {
        ...defaultTheme.components,
        spinner: {
          icon: "⏳",
        },
      },
    };

    return (
      <ThemeProvider theme={theme}>
        <Spinner {...args} />
      </ThemeProvider>
    );
  },
  args: {
    ...Medium.args,
  },
  parameters: {
    docs: {
      canvas: { sourceState: "shown" },
    },
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
