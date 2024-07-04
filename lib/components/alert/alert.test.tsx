import { act, render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Button } from "@/components/button/button";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import { AlertProvider } from "@/components/alert/alert-provider";
import { useAlert } from "@/components/alert/use-alert";
import { AlertProps } from "@/components/alert/types";

const wrapper = ({ children }: React.PropsWithChildren) => (
  <ThemeProvider>
    <AlertProvider>{children}</AlertProvider>
  </ThemeProvider>
);

const defaultProps: AlertProps = {
  children: "This is an alert",
};

type Props = Pick<AlertProps, "dismissible"> & { duration?: number };

const TestComponent: React.FC<Props> = ({ dismissible, duration }) => {
  const alert = useAlert();

  const handleClick = () => {
    act(() => {
      alert.error(defaultProps.children, { dismissible, duration });
    });
  };

  return (
    <Button type="button" onClick={handleClick}>
      Show Alert
    </Button>
  );
};

function renderUseAlert(args?: Props) {
  return {
    user: userEvent.setup(),
    ...render(<TestComponent {...args} />, { wrapper }),
  };
}

describe("useAlert", () => {
  it("should show an alert when the button is clicked", async () => {
    const { user } = renderUseAlert();
    const button = screen.getByRole("button");

    await user.click(button);

    await waitFor(() => {
      expect(
        screen.getByText(defaultProps.children as string),
      ).toBeInTheDocument();
    });
  });

  it("should display a dismissable alert", async () => {
    const { user } = renderUseAlert({ dismissible: true });
    const button = screen.getByRole("button");

    await user.click(button);

    let alert: HTMLElement;

    await waitFor(() => {
      alert = screen.getByText(defaultProps.children as string);
      expect(alert).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: "Close" }));

    await waitFor(() => {
      expect(alert).not.toBeInTheDocument();
    });
  });
});
