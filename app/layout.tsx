import EnquireSection from "@/components/enquire-section";
import Navbar from "@/components/navbar";
import MobileActionBar from "@/components/mobile-action-bar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";
import { ModalProvider } from "@/components/providers/modal-provider";
import { getSiteConfig } from "@/lib/config";
import ClientLayout from "./client-layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: getSiteConfig().seo.title,
  description: getSiteConfig().seo.description,
  keywords: getSiteConfig().seo.keywords,
  openGraph: {
    images: [getSiteConfig().branding.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientLayout fonts={`${geistSans.variable} ${geistMono.variable}`}>
      <ModalProvider />
      <Navbar />
      <main className="flex flex-col w-full min-h-[calc(100vh-var(--navbar-height))] mt-[var(--navbar-height)] pb-[56px] lg:pb-0">
        <div className="flex-1 flex flex-col justify-between lg:w-3/4">
          {children}
          <Footer />
        </div>
        <div className="lg:w-1/4 lg:flex-shrink-0 hidden lg:block">
          <div className="lg:fixed lg:right-0 lg:top-[var(--navbar-height)] lg:h-[calc(100vh-var(--navbar-height))] lg:w-1/4">
            <EnquireSection />
          </div>
        </div>
      </main>
      <MobileActionBar />
    </ClientLayout>
  );
}
