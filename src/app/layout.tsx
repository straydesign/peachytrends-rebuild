import type { Metadata } from "next";
import { Libre_Caslon_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const libreCaslon = Libre_Caslon_Display({
  variable: "--font-caslon",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://peachytrends-video.vercel.app"),
  title: "Peachy Trends — Apparel with Purpose",
  description:
    "Premium apparel that gives back. Every purchase supports Palestinian refugee families — shelter, education, and essential resources. Wear your values with Peachy Trends.",
  keywords: [
    "purpose-driven apparel",
    "ethical fashion",
    "charitable clothing",
    "Palestinian refugee families",
    "Peachy Trends",
  ],
  openGraph: {
    title: "Peachy Trends — Wear Your Values",
    description:
      "Premium apparel that gives back. Every purchase supports Palestinian refugee families with shelter, education, and essential resources.",
    type: "website",
    url: "https://peachytrends-video.vercel.app",
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
        className={`${libreCaslon.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
