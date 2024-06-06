import { Banner } from "@/main";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Banner> = {
  title: "Banner",
  component: Banner,
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const Primary: Story = {
  args: {
    variant: "default",
    children: "This is the default banner",
  },
  name: "Default",
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "Oops! There was an error.",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "A banner for your information",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Your information was submitted successfully.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Watch out! It's a warning banner.",
  },
};

export const CustomIcon: Story = {
  args: {
    variant: "success",
    icon: "💡",
    children:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
  },
};

export const Playground: Story = {
  args: {
    variant: "default",
    icon: "",
    children: "This is a banner",
  },
  parameters: {
    docs: {
      canvas: { sourceState: "shown" },
    },
  },
};
