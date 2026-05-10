import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script, Nunito, Playfair_Display } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "katex/dist/katex.min.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  weight: "400",
  variable: "--font-playfair-display",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "CCW Quiz Platform",
  description: "Quiz platform for OOP, OS, Data Structures, and core computer science topics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${nunito.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
