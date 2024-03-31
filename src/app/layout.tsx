import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";
import Navbar from "../../components/HomePageComponents/Navbar";
import Footer from "../../components/HomePageComponents/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import WhatsappButton from "../../components/HomePageComponents/WhatsappButton";
import UnderDevelopmentAlert from "../../components/HomePageComponents/UnderDevelopmentAlert";

const mont= Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Cro Quad",
  description: "CroQuad Hvar official website",
  authors:[
    { name: 'Dominik Gabela', url: 'https://github.com/dgabel01' }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/public/favicon.ico" sizes="96x96" />
      </head>
      <body className={mont.className}>
        <UnderDevelopmentAlert/>
        <Navbar/>
        {children}
        <SpeedInsights/>
        <Analytics />
        <WhatsappButton/>
        <Footer/>
        </body>
    </html>
  );
}
