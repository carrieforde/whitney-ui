import type { Preview } from "@storybook/react";
import "../src/styles/styles.css";
import { AlertProvider } from "../src/components";
import * as React from "react";

const withAlertProvider = (Story) => <AlertProvider>{Story()}</AlertProvider>;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withAlertProvider],
};

export default preview;
