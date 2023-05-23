import { BannerIconConfig } from "banner/banner";

export type Theme = {
  bannerIcons: BannerIconConfig;
};

export const theme: Theme = {
  bannerIcons: {
    default: null,
    info: "ℹ️",
    error: "🛑",
    warning: "⚠️",
    success: "✅",
  },
};
