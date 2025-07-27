import { evamConfig } from "./evam";
import { routes } from "./routes";
import { siteConfig } from "./site";

const configs = {
  [routes.default]: siteConfig,
  [routes.Evam]: evamConfig,
};

export function getSiteConfig(site?: string) {
  return site
    ? configs[site as keyof typeof configs] || configs[routes.default]
    : configs[routes.default];
}
