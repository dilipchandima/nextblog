"use client";

import React, { ReactElement } from "react";

import { Outfit } from "@next/font/google";

import Navbar from "~/components/NavBar/NavBar";
import { useAppContext } from "~/store/useAppContext";

import { MainFooter } from "./Footer/MainFooter";

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
      <body className="bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className=" text-gray-900 dark:text-gray-200 pt-20 min-h-screen flex flex-col">
          <div className="grow lg:container  mx-auto">{children}</div>
          <MainFooter />
        </div>
      </body>
    </html>
  );
};
