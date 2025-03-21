import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/lib/utils/fonts";
import Navbar from "@/components/common/navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
