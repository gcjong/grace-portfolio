import type { Metadata } from "next";
import { Geist, Geist_Mono, EB_Garamond } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grace Jong — Product Designer & Software Engineer",
  description: "Portfolio of Grace Jong, a Software Engineering student at UC Irvine passionate about UI/UX design.",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32" },
      { url: "/favicon.png", sizes: "192x192" },
      { url: "/favicon.png", sizes: "512x512" },
      { url: "/favicon.png", sizes: "1024x1024" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180" },
      { url: "/favicon.png", sizes: "512x512" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
