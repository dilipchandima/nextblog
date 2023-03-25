"use client";

import { Figtree, Red_Hat_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { FiMenu, FiX } from "react-icons/fi";

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

const links = [
  { name: "home", url: "/", target: "_self" },
  { name: "about", url: "/about", target: "_self" },
  { name: "projects", url: "/projects", target: "_self" },
  { name: "contact", url: "/contact", target: "_self" },
  { name: "blog", url: "https://blog.dilipchandima.com/", target: "_blank" },
];

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpenNav, setNavOpen] = useState(false);

  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${redHatMono.variable} font-sans  scrollbar-hide`}
      >
        {/* this is nav bar for bigger screens */}
        <div className="hidden md:flex fixed font-mono text-black justify-between h-20 w-full z-50 items-center px-20 gap-10 backdrop-blur-xl border-b-2">
          <Link href="/" className="font-bold text-lg">
            dilipchandima
          </Link>
          <div className="flex gap-10">
            {links.map(({ name, url, target }) => (
              <Link key={name} className="nav-item" href={url} target={target}>
                {name}
              </Link>
            ))}
            <Link className="btn-dark" href={"/resume.pdf"} target="_blank">
              resume
            </Link>
          </div>
        </div>

        {/* nav bar for small screens */}
        <div className="bg-white md:hidden p-4 flex items-center justify-between h-20 z-10 font-mono">
          <Link href="/" className="font-bold text-lg">
            dilipchandima
          </Link>
          {isOpenNav ? (
            <FiX
              size={40}
              strokeWidth={1}
              onClick={() => {
                setNavOpen(false);
              }}
            />
          ) : (
            <FiMenu
              size={40}
              strokeWidth={1}
              onClick={() => {
                setNavOpen(true);
              }}
            />
          )}
        </div>

        <div
          className={`bg-gray-100 md:hidden p-4 w-3/5 flex items-center justify-center fixed  h-screen ease-in duration-300 z-10 ${
            isOpenNav ? "left-[40%]" : "left-[100%]"
          }`}
        >
          <div className="flex flex-col text-center gap-4">
            {links.map(({ name, url, target }) => (
              <Link
                className="block my-2 py-3 px-10 duration-300 text-center"
                href={url}
                key={name}
                target={target}
                onClick={() => {
                  setNavOpen(false);
                }}
              >
                {name}
              </Link>
            ))}
            <Link className="btn-dark" href={"/resume.pdf"} target="_blank">
              resume
            </Link>
          </div>
        </div>

        <>{children}</>
      </body>
    </html>
  );
};
