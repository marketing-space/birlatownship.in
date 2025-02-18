import { lodhaAmaraSiteConfig } from "@/lib/config/lodha-amara";
import { routes } from "./routes";
import { siteConfig } from "./site";
import { lodhaPremierSiteConfig } from "./lodha-premier";

const configs = {
  [routes.default]: siteConfig,
  [routes.LodhaAmara]: lodhaAmaraSiteConfig,
  [routes.LodhaPremier]: lodhaPremierSiteConfig,
};

export function getSiteConfig(site?: string) {
  return site
    ? configs[site as keyof typeof configs] || configs[routes.default]
    : configs[routes.default];
}
