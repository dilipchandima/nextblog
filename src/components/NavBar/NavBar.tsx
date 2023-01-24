"use client";

import React from "react";

import Link from "next/link";
import { FiMenu, FiSun, FiMoon, FiX } from "react-icons/fi";

import { useAppContext } from "~/store/useAppContext";

const links = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Blog", link: "/blog" },
];

const Navbar = ({ toggleMode, mode }: any) => {
  const { isNavOpen, toggleNav } = useAppContext();

  return (
    <div className="bg-slate-50 fixed w-full h-20 shadow-xl ">
      <div className="flex justify-between items-center w-full h-full px-2 lg:px-16">
        <Link href="/">Dileepa</Link>
        <div className="flex gap-4">
          <div
            className=" w-9 h-9"
            onClick={() => {
              toggleNav(true);
            }}
          >
            <FiMenu size={40} strokeWidth={1} />
          </div>
        </div>
      </div>

      <div
        className={
          isNavOpen
            ? "fixed left-0 top-0 w-full h-screen bg-gray-100 dark:bg-gray-800 p-10 ease-in duration-300"
            : "fixed left-[-100%] top-0 w-full h-screen bg-gray-100 dark:bg-gray-800 p-10 ease-in duration-300"
        }
      >
        <div className="container mx-auto">
          <div
            onClick={() => {
              toggleNav(false);
            }}
          >
            <FiX
              className="text-gray-800 dark:text-gray-100"
              size={40}
              strokeWidth={1}
            />
          </div>
          <div
            className=" w-9 h-9"
            onClick={() => {
              toggleMode();
            }}
          >
            {!mode ? (
              <FiMoon className="text-gray-800" size={40} strokeWidth={1} />
            ) : (
              <FiSun className="text-gray-100" size={40} strokeWidth={1} />
            )}
          </div>
          <div></div>
          <div className="flx flex-col">
            {links.map(({ name, link }) => (
              <div className="py-6" key={name}>
                <Link
                  className="text-3xl text-gray-800 dark:text-gray-100 font-extralight"
                  href={link}
                  onClick={() => {
                    toggleNav(false);
                  }}
                >
                  {name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
