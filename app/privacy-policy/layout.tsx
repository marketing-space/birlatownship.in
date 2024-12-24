import { getSiteConfig } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Privacy Policy | ${getSiteConfig().name}`,
  description: `Privacy Policy for ${getSiteConfig().name}`,
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
