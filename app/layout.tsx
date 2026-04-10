import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import AIChat from "@/components/AIChat";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import SoundToggle from "@/components/SoundToggle";

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: {
    default: "Brahmjeet Singh",
    template: "%s | Brahmjeet Singh",
  },
  description:
    "Portfolio of Brahmjeet Singh, a Full-Stack and AI Engineer building intelligent systems, scalable software, and production-ready products.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="relative">
      <body className="relative">
        <Loader />
        <CustomCursor />
        <Navbar />
        <SoundToggle />
        <SmoothScroll>{children}</SmoothScroll>
        <AIChat />
      </body>
    </html>
  );
}
