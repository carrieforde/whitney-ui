import { BannerIconConfig } from "banner/banner";
import { CircleNotch } from "../icons/circle-notch";

export type Theme = {
  components: {
    banner: {
      icons: BannerIconConfig;
    };
    spinner: {
      icon: React.ReactNode;
    };
  };
};

export const theme: Theme = {
  components: {
    banner: {
      icons: {
        default: null,
        info: "ℹ️",
        error: "🛑",
        warning: "⚠️",
        success: "✅",
      },
    },
    spinner: {
      icon: <CircleNotch />,
    },
  },
};
