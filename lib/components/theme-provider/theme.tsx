import { AlertIconConfig } from "@/components/alert/types";
import { BannerIconConfig } from "@/components/banner/banner";
import { IconCircleCheck } from "@/components/icons/icon-circle-check";
import { IconCircleExclamation } from "@/components/icons/icon-circle-exclamation";
import { IconCircleInfo } from "@/components/icons/icon-circle-info";
import { IconCircleNotch } from "@/components/icons/icon-circle-notch";

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
        info: <IconCircleInfo />,
        error: <IconCircleExclamation />,
        warning: <IconCircleExclamation />,
        success: <IconCircleCheck />,
      },
    },
    banner: {
      icons: {
        default: null,
        info: <IconCircleInfo />,
        error: <IconCircleExclamation />,
        warning: <IconCircleExclamation />,
        success: <IconCircleCheck />,
      },
    },
    spinner: {
      icon: <IconCircleNotch />,
    },
  },
};
