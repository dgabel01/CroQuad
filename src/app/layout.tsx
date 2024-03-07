import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";
import Navbar from "../../components/HomePageComponents/Navbar";
import Footer from "../../components/HomePageComponents/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

const mont= Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Cro Quad",
  description: "CroQuad official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights/>
      <body className={mont.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
