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
      <body className="bg-gray-50 dark:bg-gray-800 ">
        <div className="container mx-auto mainGrid">
          <div className="bg-gray-800 h-screen">
            {/* <Navbar /> */}
            <div className="fixed w-[120px]">sample</div>
          </div>
          <div className="bg-gray-900">
            {children}
            {/* <h1 className="my-5 text-9xl purple-shadow text-gray-50 font-bold">
              Dileepa
              <br />
              Chandima
            </h1> */}
          </div>
          <div className="bg-gray-800 h-screen">
            <div className="fixed w-[80px]">
              <MainFooter />
            </div>
          </div>
        </div>
        {/* <Navbar />
        <div className=" text-gray-900 dark:text-gray-200 pt-20 min-h-screen flex flex-col">
          <div className="grow lg:container  mx-auto">{children}</div>
          <MainFooter />
        </div> */}
      </body>
    </html>
  );
};
