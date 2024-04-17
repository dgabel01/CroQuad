import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";
import Navbar from "../../components/HomePageComponents/Navbar";
import Footer from "../../components/HomePageComponents/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import WhatsappButton from "../../components/HomePageComponents/WhatsappButton";
import UnderDevelopmentAlert from "../../components/HomePageComponents/UnderDevelopmentAlert";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'



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
        <link rel="icon" href="/favicon.ico"/>
        <Script
          id="gtag-script"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CREZFYP46K">
        </Script>

        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CREZFYP46K');
          `}
        </Script>

      </head>
      <body className={mont.className}>
        <UnderDevelopmentAlert/>
        <Navbar/>
        {children}
        <SpeedInsights/>
        <Analytics />
        <WhatsappButton/>
        <Footer/>
        <GoogleAnalytics gaId="G-CREZFYP46K" />

        </body>
    </html>
  );
}
