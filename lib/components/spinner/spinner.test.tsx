import { render, screen } from "@testing-library/react";
import { Spinner, SpinnerProps } from "@/components/spinner/spinner";

function renderSpinner(args?: Partial<SpinnerProps>) {
  render(<Spinner {...args} />);
}

describe("Spinner", () => {
  it("should render a large spinner", () => {
    renderSpinner({ size: "large" });
    expect(screen.getByTitle("Loading")).toHaveClass("spinner--large");
  });
});
