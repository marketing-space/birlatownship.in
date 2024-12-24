import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Narang Privado",
  description: "Thank you for your interest in Narang Privado",
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
