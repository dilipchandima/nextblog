"use client";
import React from "react";

import Link from "next/link";
import { FiMenu, FiSun, FiMoon, FiX } from "react-icons/fi";

import { useAppContext } from "~/store/useAppContext";

import { NavLink } from "./NavLink";
import { NavTitle } from "./NavTitle";
import { ThemeToggler } from "./ThemeToggler";

const menuItems = [
  { name: "HOME", link: "/" },
  { name: "PROJECTS", link: "/about" },
  { name: "GALLERY", link: "/blog" },
];

export const FullScreenNav = () => {
  const { isNavOpen, toggleNav, isDarkMode, toggleDarkMode } = useAppContext();

  return (
    <div
      className={`fixed top-0 w-full h-screen bg-gray-100 dark:bg-gray-800 p-10 ease-in duration-300 ${
        isNavOpen ? " left-0 " : " left-[-100%] "
      }`}
    >
      <div className="container mx-auto text-gray-800 dark:text-gray-100">
        <div className="flex justify-between mb-20 align-middle">
          <ThemeToggler />
          <div onClick={toggleNav}>
            <FiX size={40} strokeWidth={1} />
          </div>
        </div>

        <div className="flx flex-col">
          <NavTitle title="MENU" />
          {menuItems.map(({ name, link }) => (
            <NavLink href={link} key={name} name={name} onClick={toggleNav} />
          ))}
        </div>
      </div>
    </div>
  );
};
