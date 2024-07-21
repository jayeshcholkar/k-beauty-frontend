import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Questrial({ subsets: ["latin"], weight : ['400'] });

export const metadata: Metadata = {
  title: "K-Beauty",
  description: "E-Commerce website for Korean beauty products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
