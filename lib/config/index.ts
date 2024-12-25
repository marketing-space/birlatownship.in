import { gardenCityConfig } from "@/lib/config/garden-city";
import { routes } from "./routes";
import { siteConfig } from "./site";

const configs = {
  [routes.default]: siteConfig,
  [routes.Gardencity]: gardenCityConfig,
};

export function getSiteConfig(site?: string) {
  return site
    ? configs[site as keyof typeof configs] || configs[routes.default]
    : configs[routes.default];
}
