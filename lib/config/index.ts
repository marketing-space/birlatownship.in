import { lodhaAmaraSiteConfig } from "@/lib/config/lodha-amara";
import { routes } from "./routes";
import { siteConfig } from "./site";
import { lodhaPremierSiteConfig } from "./lodha-premier";
import { lodhaCrownThaneSiteConfig } from "./lodha-crown-thane";
import { lodhaHangingGardensSiteConfig } from "./lodha-hanging-gardens";
import { lodhaPokhranSiteConfig } from "./lodha-pokhran";

const configs = {
  [routes.default]: siteConfig,
  [routes.LodhaAmara]: lodhaAmaraSiteConfig,
  [routes.LodhaPremier]: lodhaPremierSiteConfig,
  [routes.LodhaCrownThane]: lodhaCrownThaneSiteConfig,
  [routes.LodhaHangingGardens]: lodhaHangingGardensSiteConfig,
  [routes.LodhaPokhran]: lodhaPokhranSiteConfig,
};

export function getSiteConfig(site?: string) {
  return site
    ? configs[site as keyof typeof configs] || configs[routes.default]
    : configs[routes.default];
}
