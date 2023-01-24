"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiSun, FiMoon, FiX } from "react-icons/fi";

const links = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Blog", link: "/blog" },
];

const Navbar = ({ toggleMode, mode }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-50 fixed w-full h-20 shadow-xl ">
      <div className="flex justify-between items-center w-full h-full px-2 lg:px-16">
        <Link href="/">Dileepa</Link>
        <div className="flex gap-4">
          <div
            className=" w-9 h-9"
            onClick={() => {
              setOpen(true);
            }}
          >
            <FiMenu size={40} strokeWidth={1} />
          </div>
        </div>
      </div>

      <div
        className={
          open
            ? "fixed left-0 top-0 w-full  h-screen bg-black/50  ease-in duration-500"
            : ""
        }
      >
        <div
          className={
            open
              ? "fixed left-0 top-0 w-full h-screen bg-gray-100 dark:bg-gray-800 p-10 ease-in duration-300"
              : "fixed left-[-100%] top-0 w-full h-screen bg-gray-100 dark:bg-gray-800 p-10 ease-in duration-300"
          }
        >
          <div className="container mx-auto">
            <div
              onClick={() => {
                setOpen(false);
              }}
            >
              <FiX
                size={40}
                strokeWidth={1}
                className="text-gray-800 dark:text-gray-100"
              />
            </div>
            <div
              className=" w-9 h-9"
              onClick={() => {
                toggleMode();
              }}
            >
              {!mode ? (
                <FiMoon size={40} strokeWidth={1} className="text-gray-800" />
              ) : (
                <FiSun size={40} strokeWidth={1} className="text-gray-100" />
              )}
            </div>
            <div></div>
            <div className="flx flex-col">
              {links.map(({ name, link }) => (
                <div key={name} className="py-6">
                  <Link
                    className="text-3xl text-gray-800 dark:text-gray-100"
                    href={link}
                    onClick={() => {
                      setOpen(false);
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
    </div>
  );
};

export default Navbar;
