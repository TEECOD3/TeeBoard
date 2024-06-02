import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Siteconfig } from "@/Config/site";

const roboto = Roboto({
  weight: ["100", "300", "500", "700", "900", "400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: Siteconfig.siteName,
    template: `%s | ${Siteconfig.siteName}`,
  },
  description: Siteconfig.siteDescription,
  icons: {
    icon: Siteconfig.siteIcon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
