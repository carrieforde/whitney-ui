import { Banner, type BannerProps } from "@/components/banner/banner";
import { render, screen } from "@testing-library/react";

const defaultProps = {
  children: "This is a banner",
};

function renderBanner(args?: Omit<BannerProps, "children">) {
  const props = { ...defaultProps, ...args };
  render(<Banner {...props} />);
}

describe("Banner", () => {
  it("should render the info banner with the correct class", () => {
    renderBanner();
    expect(screen.getByText(defaultProps.children)).not.toHaveClass(
      "banner--info",
    );
  });

  it("should render the error banner with the correct class", () => {
    renderBanner({ variant: "error" });
    expect(screen.getByText(defaultProps.children)).toHaveClass(
      "banner--error",
    );
  });

  it("should render the info banner with the correct class", () => {
    renderBanner({ variant: "info" });
    expect(screen.getByText(defaultProps.children)).toHaveClass("banner--info");
  });

  it("should render the success banner with the correct class", () => {
    renderBanner({ variant: "success" });
    expect(screen.getByText(defaultProps.children)).toHaveClass(
      "banner--success",
    );
  });

  it("should render the warning banner with the correct class", () => {
    renderBanner({ variant: "warning" });
    expect(screen.getByText(defaultProps.children)).toHaveClass(
      "banner--warning",
    );
  });
});
