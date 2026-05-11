import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "My Blog",
    template: "%s | My Blog",
  },
  description: "个人博客 — 记录想法、技术与生活。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <div className="eva-corners" aria-hidden="true" />
        <div className="eva-stripes" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
