import { getSiteConfig } from "@/lib/config";
import { routes } from "@/lib/config/routes";
import { Metadata } from "next";

const route = routes.Evam;

const siteConfig = getSiteConfig(route) as {
  thankYou: {
    seo: {
      title: string;
      description: string;
    };
  };
};

export const metadata: Metadata = {
  title: siteConfig.thankYou.seo.title,
  description: siteConfig.thankYou.seo.description,
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
