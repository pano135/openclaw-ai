import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenClaw AI | The Ultimate Resource for Autonomous Agents",
  description: "OpenClaw (formerly Clawdbot/Moltbot) 2026 Guide. Installation, Kimi/Claude benchmarks, Clawhub skills, and security alerts.",
  keywords: ["OpenClaw", "Clawdbot", "Moltbot", "autonomous agents", "AI agents", "Kimi", "Claude", "Mac Mini"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-slate-950 text-slate-200 selection:bg-cyan-500 selection:text-white min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
