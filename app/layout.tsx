import type { Metadata, Viewport } from "next";
import { Libre_Baskerville, DM_Sans } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-baskerville",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://butwhy-droo4you.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ButWhy — Curiosity without a bottom",
    template: "%s — ButWhy",
  },
  description:
    "Ask why, then ask why again. Written trails for thirty-two questions, and a live model when you want to keep going.",
  openGraph: {
    title: "ButWhy",
    description: "Curiosity without a bottom.",
    siteName: "ButWhy",
    url: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F0E8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${dmSans.variable}`}
    >
      <body className="bg-paper text-ink antialiased">
        <a className="skip" href="#content">
          Skip to content
        </a>
        <div id="content">{children}</div>
      </body>
    </html>
  );
}
