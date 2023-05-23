import { BannerIconConfig } from "components/banner/banner";
import { CircleCheck, CircleExclamation, CircleInfo } from "../icons";
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
        info: <CircleInfo />,
        error: <CircleExclamation />,
        warning: <CircleExclamation />,
        success: <CircleCheck />,
      },
    },
    spinner: {
      icon: <CircleNotch />,
    },
  },
};
