import { BannerIconConfig } from "components/banner/banner";
import { AlertIconConfig } from "components/alert/alert";
import { CircleCheck, CircleExclamation, CircleInfo } from "../icons";
import { CircleNotch } from "../icons/circle-notch";

export type Theme = {
  components: {
    alert: {
      defaultDurationInMs: number;
      icons: AlertIconConfig;
    };
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
    alert: {
      defaultDurationInMs: 5000,
      icons: {
        info: <CircleInfo />,
        error: <CircleExclamation />,
        warning: <CircleExclamation />,
        success: <CircleCheck />,
      },
    },
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
