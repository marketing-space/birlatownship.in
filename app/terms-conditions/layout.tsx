import { getSiteConfig } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Terms and Conditions | ${getSiteConfig().name}`,
  description: `Terms and Conditions for ${getSiteConfig().name}`,
};

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
