import { evamConfig } from "./evam";
import { routes } from "./routes";
import { siteConfig } from "./site";
import { taranyaConfig } from "./taranya";

const configs = {
  [routes.default]: siteConfig,
  [routes.Evam]: evamConfig,
  [routes.Taranya]: taranyaConfig,
};

export function getSiteConfig(site?: string) {
  return site
    ? configs[site as keyof typeof configs] || configs[routes.default]
    : configs[routes.default];
}
