import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./globalicons.css";

const inter = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Satkirat Singh",
  description: "Full-stack web/mobile app developer",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        href: "/favicons/icon-dark.png",
        url: "/favicons/icon-dark.png",
      },
      {
        media: "(prefers-color-scheme: light)",
        href: "/favicons/icon-light.png",
        url: "/favicons/icon-light.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
