

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Little Sand Sauna",
  description: "The Nordic sauna experience on floating sauna rafts in the lake, Remer, MN.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
      </body>
    </html>
  );
}
