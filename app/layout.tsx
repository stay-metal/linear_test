import type { Metadata } from "next";
import { ThemeProvider } from "./theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo App",
  description: "A simple todo application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-gray-50 dark:bg-gray-900 transition-colors">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
