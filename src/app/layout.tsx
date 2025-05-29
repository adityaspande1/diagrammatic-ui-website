import type { Metadata } from "next";
import { Inter, Roboto_Mono, Syne_Mono, Revalia, Monoton, Stylish } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const syneMono = Syne_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne-mono",
});

const revalia = Revalia({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-revalia",
});

const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-monoton",
});

const stylish = Stylish({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-stylish",
});

export const metadata: Metadata = {
  title: "Diagrammatic-UI - Interactive Graph Visualization Library",
  description: "A powerful and flexible graph visualization library for React applications. Create stunning, interactive diagrams with ease.",
  keywords: ["graph visualization", "diagram library", "react", "interactive graphs", "data visualization"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable} ${syneMono.variable} ${revalia.variable} ${monoton.variable} ${stylish.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
