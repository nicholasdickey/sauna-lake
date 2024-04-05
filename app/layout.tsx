

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import Body from "@/components/middle-body";


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
        <div className=" bg-slate-50 dark:bg-slate-700 text:slate-900 dark:text-slate-50">
        <Header/>
        <Body/>
        </div>

      </body>
    </html>
  );
}
