import type { Metadata } from "next";
import { Manrope, Open_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Boldo | Wisdom Abah",
  description: "Boldo landing page by Wisdom Abah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${openSans.variable} ${manrope.variable}  antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
