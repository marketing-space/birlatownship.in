import { routes } from "./routes";
import { siteConfig } from "./site";
import { evaraHeightsConfig } from "./Evara-Heights";
import { sewriConfig } from "./sewri";
import { mahimConfig } from "./mahim";

const configs = {
  [routes.default]: siteConfig,
  [routes.EveraHeights]: evaraHeightsConfig,
  [routes.Sewri]: sewriConfig,
  [routes.Mahim]: mahimConfig,
};

export function getSiteConfig(site?: string) {
  return site
    ? configs[site as keyof typeof configs] || configs[routes.default]
    : configs[routes.default];
}
