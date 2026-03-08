import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Peachy Trends — Apparel with Purpose",
  description:
    "Premium apparel that gives back. Every purchase supports foundations making real change. Wear your values with Peachy Trends.",
  keywords: [
    "purpose-driven apparel",
    "ethical fashion",
    "charitable clothing",
    "Fuerza Foundation",
    "Peachy Trends",
  ],
  openGraph: {
    title: "Peachy Trends — Wear Your Values",
    description:
      "Premium apparel that gives back. Every purchase supports foundations making real change.",
    type: "website",
    url: "https://peachytrends.vercel.app",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Peachy Trends — Apparel with Purpose",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peachy Trends — Wear Your Values",
    description: "Premium apparel that gives back.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
