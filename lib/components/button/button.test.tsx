import { render, screen } from "@testing-library/react";
import { Button, ButtonProps } from "@/components/button/button";

const defaultProps: Pick<ButtonProps, "children" | "type"> = {
  children: "Click me!",
  type: "button",
};

function renderButton(args?: Partial<Omit<ButtonProps, "children" | "ref">>) {
  const props = { ...defaultProps, ...args };
  render(<Button {...props} />);
}

describe("Button", () => {
  it("should render a filled button correctly", () => {
    renderButton({ variant: "filled" });
    expect(screen.getByRole("button")).toHaveClass(
      "button--filled button--tertiary",
    );
  });

  it("should not render a button's text children while loading", () => {
    renderButton({ loading: true });
    expect(screen.getByRole("button")).not.toHaveTextContent(
      defaultProps.children as string,
    );
  });
});
