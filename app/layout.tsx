import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "GB Foods Conference 26",
  description:
    "Guide to Coffee Break, Dining, and Conference areas. Get directions to each space.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "GB Foods Conference 26",
    description:
      "Guide to Coffee Break, Dining, and Conference areas. Get directions to each space.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GB Foods Conference 26",
    description:
      "Guide to Coffee Break, Dining, and Conference areas. Get directions to each space.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
