import type { Metadata } from "next";
import { Source_Serif_4, Karla, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const karla = Karla({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "STA Associates — Accounting, Tax & Business Advisory",
  description:
    "STA Associates is a Simcoe County accounting, tax and business advisory firm, proudly owned and led by a Nigerian-Canadian accounting professional — serving individuals, entrepreneurs, corporations and not-for-profits.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${karla.variable} ${plexMono.variable}`}
    >
      <body>
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "#faf8f2" }}>
          <TopBar />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
