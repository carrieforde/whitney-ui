import { Meta, StoryObj } from "@storybook/react";
import { CSSProperties } from "react";
import { Button } from "../button/button";
import { AlertProps, AlertProvider, useAlert } from "./alert";
import { Theme, theme as defaultTheme } from "../theme-provider/theme";
import { ThemeProvider } from "../theme-provider/theme-provider";

type Props = AlertProps & { duration?: number };

const meta: Meta<Props> = {
  title: "Hooks/useAlert",
  argTypes: {
    variant: {
      control: "select",
      options: ["error", "info", "success", "warning"],
    },
    children: { control: "text" },
    icon: { control: "text" },
    duration: { control: "number" },
    dismissible: { control: "boolean" },
  },
};

export default meta;

const Trigger = ({
  variant,
  children,
  ...args
}: Props & { duration?: number }) => {
  const alert = useAlert();

  const handleClick = () => {
    alert[variant ?? "error"](children ?? "This is an alert", {
      ...args,
    });
  };

  return (
    <Button type="button" onClick={handleClick}>
      Show Alert
    </Button>
  );
};

type Story = StoryObj<Props & { duration?: number }>;

export const Error: Story = {
  render: (args) => (
    <AlertProvider>
      <Trigger {...args} />
    </AlertProvider>
  ),
  args: {
    variant: "error",
  },
};

export const Info: Story = {
  ...Error,
  args: {
    variant: "info",
  },
};

export const Success: Story = {
  ...Error,
  args: {
    variant: "success",
  },
};

export const Warning: Story = {
  ...Error,
  args: {
    variant: "warning",
  },
  parameters: {
    docs: {
      canvas: { sourceState: "shown" },
      source: {
        code: `
const ShowAlertButton: React.FC = () => {
  const alert = useAlert();

  const handleClick = () => alert.warning("This is an alert", { /* options go here. */})

  return <Button type="button">Show Alert</Button>
}
        `,
      },
    },
  },
};

export const Dismissible: Story = {
  ...Error,
  args: {
    ...Error.args,
    dismissible: true,
    duration: 15000,
  },
};

export const CustomIcon: Story = {
  ...Error,
  args: {
    variant: "info",
    icon: "👋",
  },
};

export const CustomDuration: Story = {
  ...Error,
  args: {
    ...Error.args,
    duration: 150,
  },
};

export const WithAction: Story = {
  ...Error,
  args: {
    ...Error.args,
    variant: "warning",
    dismissible: true,
    children: (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "space-between",
          alignItems: "space-between",
        }}
      >
        This is an alert regarding an action you just took.
        <Button
          type="button"
          color="primary"
          style={
            {
              "--button-padding": "0",
            } as CSSProperties
          }
        >
          Undo
        </Button>
      </div>
    ),
  },
};

export const ThemeCustomizations: Story = {
  render: (args) => {
    const theme: Theme = {
      ...defaultTheme,
      components: {
        ...defaultTheme.components,
        alert: {
          defaultDurationInMs: 7500,
          icons: {
            info: "ℹ️",
            error: "🛑",
            warning: "⚠️",
            success: "✅",
          },
        },
      },
    };

    return (
      <ThemeProvider theme={theme}>
        <AlertProvider>
          <Trigger {...args} />
        </AlertProvider>
      </ThemeProvider>
    );
  },
  args: {
    ...Error.args,
    dismissible: true,
  },
  parameters: {
    docs: {
      canvas: { sourceState: "shown" },
      source: {
        code: `
export const App: React.FC<React.PropsWithChildren> = ({ children }) => {
  const theme: Theme = {
    ...defaultTheme,
    components: {
      ...defaultTheme.components,
      alert: {
        defaultDurationInMs: 7500,
        icons: {
          info: "ℹ️",
          error: "🛑",
          warning: "⚠️",
          success: "✅",
        },
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <AlertProvider>
        {children}
      </AlertProvider>
    </ThemeProvider>
  );
}        
        `,
      },
    },
  },
};
