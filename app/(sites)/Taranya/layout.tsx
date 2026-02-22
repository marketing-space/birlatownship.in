import { getSiteConfig } from "@/lib/config";
import { routes } from "@/lib/config/routes";
import { Metadata } from "next";
import "./globals.css";

const route = routes.Taranya;

export const metadata: Metadata = {
  title: getSiteConfig(route).seo.title,
  description: getSiteConfig(route).seo.description,
};
export default function EveraHeightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
