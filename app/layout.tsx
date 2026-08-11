import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sergios — Web Designer, Developer, SEO & AI Agents",
  description:
    "Web design, development, SEO and AI agent integration for ambitious brands that want to attract, convert and automate.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
