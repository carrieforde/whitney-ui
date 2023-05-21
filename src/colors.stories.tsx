import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const COLOR_NAMES = [
  "primary",
  "secondary",
  "info",
  "error",
  "warning",
  "success",
];

const COLOR_VALUES = [
  "main",
  "light",
  "dark",
  "contrast",
  "900",
  "800",
  "700",
  "600",
  "500",
  "400",
  "300",
  "200",
  "100",
  "50",
];

function getCssPropertyValue(value: string) {
  const { documentElement } = document;
  const documentStyles = getComputedStyle(documentElement);
  return documentStyles.getPropertyValue(value).trim();
}

const ColorSection: React.FC<{ name: typeof COLOR_NAMES }> = ({
  name = "default",
}) => {
  const config: [string, string][] = COLOR_VALUES.reduce((acc, curr) => {
    const colorString = `--color-${name}-${curr}`;
    const colorValue = getCssPropertyValue(colorString);

    return [...acc, [colorString, colorValue]];
  }, [] as [string, string][]);

  return (
    <section>
      <div
        style={{
          display: "grid",
          gap: "24px",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, auto))",
          justifyContent: "center",
        }}
      >
        {config.map(([colorName, value]) => (
          <div
            key={colorName}
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "12px",
            }}
          >
            <div
              style={{
                border: "1px solid var(--color-default-light)",
                width: "200px",
                height: "150px",
                backgroundColor: `var(${colorName})`,
              }}
            />
            <code>{colorName}</code>
            <code>{value}</code>
          </div>
        ))}
      </div>
    </section>
  );
};

const meta: Meta<typeof ColorSection> = {
  title: "Tokens/Colors",
};

export default meta;

type Story = StoryObj<typeof ColorSection>;

export const Neutral: Story = {
  render: (props) => <ColorSection {...props} />,
  name: "Default",
};

export const Primary: Story = {
  ...Neutral,
  args: {
    name: "primary",
  },
};

export const Secondary: Story = {
  ...Neutral,
  args: {
    name: "secondary",
  },
};

export const Info: Story = {
  ...Neutral,
  args: {
    name: "info",
  },
};

export const Error: Story = {
  ...Neutral,
  args: {
    name: "error",
  },
};

export const Warning: Story = {
  ...Neutral,
  args: {
    name: "warning",
  },
};

export const Success: Story = {
  ...Neutral,
  args: {
    name: "success",
  },
};
