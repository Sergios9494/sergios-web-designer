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
      <head>
        {/* Start every reload at the top instead of restoring the previous
            scroll position (still honours #anchor links). */}
        <script
          dangerouslySetInnerHTML={{
            __html: "if('scrollRestoration' in history){history.scrollRestoration='manual';}",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
