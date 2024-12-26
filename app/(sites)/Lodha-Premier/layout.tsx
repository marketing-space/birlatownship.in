import { getSiteConfig } from "@/lib/config";
import { routes } from "@/lib/config/routes";
import { Metadata } from "next";
import "./globals.css";

const route = routes.LodhaPremier;

export const metadata: Metadata = {
  title: getSiteConfig(route).seo.title,
  description: getSiteConfig(route).seo.description,
};

export default function LodhaPremierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
