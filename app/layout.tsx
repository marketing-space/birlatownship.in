import "@/app/globals.css";
import { geistMono, geistSans } from "./fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-white`}>
        {children}
      </body>
    </html>
  );
}
