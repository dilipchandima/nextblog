"use client";

import React, { ReactElement } from "react";
import Navbar from "../components/NavBar/NavBar";
import { useAppContext } from "../store/useAppContext";
import { Outfit } from "@next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

type Props = {
  children: ReactElement | ReactElement[];
};
export const MainLayout = ({ children }: Props) => {
  const { isNavOpen, toggleNav } = useAppContext();

  return (
    <html
      lang="en"
      className={`${outfit.variable} font-sans ${isNavOpen ? "dark" : "light"}`}
    >
      <body className="bg-white dark:bg-slate-900">
        <Navbar toggleMode={() => toggleNav(!isNavOpen)} mode={isNavOpen} />
        <div className="lg:container mx-auto text-slate-900 dark:text-slate-200 pt-20">
          <div className="min-h-screen">{children}</div>
          <h2>footer</h2>
        </div>
      </body>
    </html>
  );
};
