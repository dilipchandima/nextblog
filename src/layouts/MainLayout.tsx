"use client";

import React, { ReactElement } from "react";

import { Outfit } from "@next/font/google";

import Navbar from "~/components/NavBar/NavBar";
import { useAppContext } from "~/store/useAppContext";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

type Props = {
  children: ReactElement | ReactElement[];
};
export const MainLayout = ({ children }: Props) => {
  const { isDarkMode } = useAppContext();

  return (
    <html
      className={`${outfit.variable} font-sans ${
        isDarkMode ? "dark" : "light"
      }`}
      lang="en"
    >
      <body className="bg-white dark:bg-slate-900">
        <Navbar />
        <div className="lg:container mx-auto text-slate-900 dark:text-slate-200 pt-20">
          <div className="min-h-screen">{children}</div>
          <h2>footer</h2>
        </div>
      </body>
    </html>
  );
};
