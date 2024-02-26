import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Naavbar from "../../components/Navbaar";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Naavbar/>
        {children}
        </body>
    </html>
  );
}
