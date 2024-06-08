import { render, screen } from "@testing-library/react";
import { Text, TextProps } from "./text";

const defaultProps = {
  children: "The quick brown fox jumped over the lazy dog.",
};

function renderText(args?: Omit<TextProps, "children" | "ref">) {
  const props = { ...defaultProps, ...args };
  render(<Text {...props} />);
}

describe("Text", () => {
  it("should correctly render a title variant", () => {
    renderText({ variant: "title" });
    expect(screen.getByText(defaultProps.children)).toHaveClass("text--title");
  });

  it("should correctly render a subtitle", () => {
    renderText({ variant: "subtitle" });
    expect(screen.getByText(defaultProps.children)).toHaveClass(
      "text--subtitle",
    );
  });

  it("should correctly render a body1 variant", () => {
    renderText({ variant: "body1" });
    expect(screen.getByText(defaultProps.children)).toHaveClass("text--body1");
  });

  it("should correctly render a body2 variant", () => {
    renderText({ variant: "body2" });
    expect(screen.getByText(defaultProps.children)).toHaveClass("text--body2");
  });

  it("should correctly render a overline variant", () => {
    renderText({ variant: "overline" });
    expect(screen.getByText(defaultProps.children)).toHaveClass(
      "text--overline",
    );
  });

  it("should correctly render a finePrint variant", () => {
    renderText({ variant: "finePrint" });
    expect(screen.getByText(defaultProps.children)).toHaveClass(
      "text--finePrint",
    );
  });
});
