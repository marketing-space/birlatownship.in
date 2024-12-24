import { getSiteConfig } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Cookies Policy | ${getSiteConfig().name}`,
  description: `Cookies Policy for ${getSiteConfig().name}`,
};

export default function CookiesPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
