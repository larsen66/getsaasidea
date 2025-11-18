import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "GetSaaS Idea - Validate Your SaaS Idea in 15 Minutes",
  description: "AI-powered market research that gives you a clear GO/NO-GO verdict and your exact next step. Validate your SaaS idea in minutes, not hours.",
  metadataBase: new URL("https://getsaasidea.com"),
  openGraph: {
    title: "GetSaaS Idea - Validate Your SaaS Idea in 15 Minutes",
    description: "AI-powered market research that gives you a clear GO/NO-GO verdict and your exact next step.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning style={{ background: "var(--bg-primary)" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ background: "var(--bg-primary)", minHeight: "100vh" }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
