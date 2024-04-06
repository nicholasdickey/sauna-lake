

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  { NavSection } from '@/components/header/nav';
import Header from "@/components/header";
import Body from "@/components/middle-body";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Little Sand Sauna",
  description: "The Nordic sauna experience on floating sauna rafts in the lake, Remer, MN.",
};
let  sections: NavSection[] = [
  { name: 'Home', id: 'home',ref :undefined},
  { name: 'Nordic Sauna Experience', id: 'about',ref:undefined },
  { name: 'Availability', id: 'availability',ref:undefined },
  { name: 'F.A.Q.', id: 'faq',ref:undefined }
];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" bg-slate-50 dark:bg-slate-700 text:slate-900 dark:text-slate-50">
        <Header sections={sections}/>
        <Body sections={sections}/>

        </div>

      </body>
    </html>
  );
}
