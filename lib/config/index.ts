import { routes } from "./routes";
import { siteConfig } from "./site";
import { evaraHeightsConfig } from "./Evara-Heights";

const configs = {
  [routes.default]: siteConfig,
  [routes.EveraHeights]: evaraHeightsConfig,
};

export function getSiteConfig(site?: string) {
  return site
    ? configs[site as keyof typeof configs] || configs[routes.default]
    : configs[routes.default];
}
