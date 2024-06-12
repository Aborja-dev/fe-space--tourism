import type { Metadata } from "next";
import "./globals.css";
import { bellefair, barlow, barlowCondensed } from "@/app/lib/fonts";
import Header from "@/app/ui/Header/Header";


export const metadata: Metadata = {
  title: "Space Landing",
  description: "Space Landing webpage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bellefair.variable} ${barlowCondensed.variable} ${barlow.variable} antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
