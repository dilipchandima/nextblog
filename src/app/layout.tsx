import "./globals.css";

import { Figtree } from "next/font/google";

import MainLayout from "@/components/ui/Layout/MainLayout";

export const metadata = {
  title: "Dileepa Chandima Personal portfolio",
  description: "Dileepa Chandima Personal portfolio",
};

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} font-sans font-light bg-gray-900 text-gray-100 mainGrid dark tracking-wide`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
