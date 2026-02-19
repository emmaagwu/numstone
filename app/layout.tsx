import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Numstone — Nigeria's #1 Software Agency",
  description:
    "Numstone builds world-class web apps, mobile apps, SaaS products, and digital solutions for ambitious businesses across Nigeria and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans antialiased dark:bg-neutral-950">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
