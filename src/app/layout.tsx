import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import Image from "next/image";
import { Figtree, Red_Hat_Mono } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

const redHatMono = Red_Hat_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-redHatMono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${redHatMono.variable} font-mono font-light tracking-wide`}
      >
        {children}
      </body>
    </html>
  );
}
