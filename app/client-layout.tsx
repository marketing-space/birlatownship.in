"use client";

import { useAutoModal } from "@/lib/hooks/use-auto-modal";
import { getSiteConfig } from "@/lib/config";

export default function ClientLayout({
  children,
  fonts,
}: {
  children: React.ReactNode;
  fonts: string;
}) {
  const { branding } = getSiteConfig();
  useAutoModal(3000);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={branding.favicon} />
      </head>
      <body className={`${fonts} antialiased bg-white`}>{children}</body>
    </html>
  );
}
