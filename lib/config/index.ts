import { lodhaAmaraSiteConfig } from "@/lib/config/lodha-amara";
import { routes } from "./routes";
import { siteConfig } from "./site";
import { lodhaPremierSiteConfig } from "./lodha-premier";
import { lodhaCrownThaneSiteConfig } from "./lodha-crown-thane";
import { lodhaHangingGardensSiteConfig } from "./lodha-hanging-gardens";
import { lodhaPokhranSiteConfig } from "./lodha-pokhran";
import { lodhaRegaliaSiteConfig } from "./lodha-regalia";
import { lodhaUpperThaneSiteConfig } from "./lodha-upper-thane";
import { lodhaMirabelleSiteConfig } from "./Lodha-Mirabelle";
import { lodhaStellaSiteConfig } from "./Lodha-Stella";
import { lodhaVillaRoyaleSiteConfig } from "./lodha-villa-royale";

const configs = {
  [routes.default]: siteConfig,
  [routes.LodhaAmara]: lodhaAmaraSiteConfig,
  [routes.LodhaPremier]: lodhaPremierSiteConfig,
  [routes.LodhaCrownThane]: lodhaCrownThaneSiteConfig,
  [routes.LodhaHangingGardens]: lodhaHangingGardensSiteConfig,
  [routes.LodhaPokhran]: lodhaPokhranSiteConfig,
  [routes.LodhaRegalia]: lodhaRegaliaSiteConfig,
  [routes.LodhaUpperThane]: lodhaUpperThaneSiteConfig,
  [routes.LodhaMirabelle]: lodhaMirabelleSiteConfig,
  [routes.LodhaStella]: lodhaStellaSiteConfig,
  [routes.LodhaVillaRoyale]: lodhaVillaRoyaleSiteConfig,
};

export function getSiteConfig(site?: string) {
  return site
    ? configs[site as keyof typeof configs] || configs[routes.default]
    : configs[routes.default];
}
