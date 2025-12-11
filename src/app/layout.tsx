import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Portfolio - Ocean Charlie Gunawan",
  description: "Portfolio of Ocean Charlie Gunawan, Information Systems student specializing in Frontend Engineering and Data-driven Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#0A0A0A] text-white`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}