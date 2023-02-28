"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { BsDribbble, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";

import AppLink from "./AppLink";

export const metadata = {
  title: "Dileepa Chandima Personal portfolio",
  description: "Dileepa Chandima Personal portfolio",
};

const navLinks = [
  { name: "HOME", link: "/" },
  { name: "ABOUT ME", link: "/about" },
  { name: "PROJECTS", link: "/projects" },
  { name: "BLOG", link: "/blog" },
];

const apps = [
  { link: "https://www.linkedin.com/in/dilipchandima/", icon: <BsLinkedin /> },
  { link: "https://github.com/dilipchandima", icon: <BsGithub /> },
  { link: "https://dribbble.com/dilipchandima", icon: <BsDribbble /> },
  { link: "https://www.instagram.com/dilipchandima/", icon: <BsInstagram /> },
];

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  const [isOpenNav, setNavOpen] = useState(false);

  return (
    <>
      {/* left nav for bigger screens */}
      <div className="relative h-screen hidden md:flex">
        <div className="bg-gray-800 fixed px-2 h-screen w-[120px] text-center flex flex-col item-center justify-center">
          <Image
            alt="logo"
            className="mb-10 mx-auto"
            height={80}
            src="/logo.png"
            width={80}
          />
          <div>
            {navLinks.map((link) => (
              <Link href={link.link} key={link.name}>
                <div className="my-2 py-3 hover:bg-purple-900 duration-300 rounded-xl">
                  {link.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* top nav for small screens */}
      <div className="bg-gray-800 md:hidden p-4 flex items-center justify-between h-20 z-10">
        <Link href={"/"}>
          <Image alt="logo" height={50} src="/logo.png" width={50} />
        </Link>
        {isOpenNav ? (
          <FiX
            size={30}
            strokeWidth={1}
            onClick={() => {
              setNavOpen(false);
            }}
          />
        ) : (
          <FiMenu
            size={30}
            strokeWidth={1}
            onClick={() => {
              setNavOpen(true);
            }}
          />
        )}
      </div>

      <div
        className={`bg-gray-800 md:hidden p-4 w-full flex items-center justify-between fixed  ease-in duration-300 z-0 ${
          isOpenNav ? "top-20" : "top-[-50%]"
        }`}
      >
        <div>
          {navLinks.map((link) => (
            <Link
              href={link.link}
              key={link.name}
              onClick={() => {
                setNavOpen(false);
              }}
            >
              <div className="my-2 py-3 hover:bg-purple-900 duration-300 rounded-xl">
                {link.name}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-2 md:px-10">{children}</div>

      {/* right nav for bigger screens */}
      <div className="h-screen  hidden md:flex">
        <div className="fixed bg-gray-800 w-[80px] h-screen  text-center flex flex-col item-center justify-end pb-20">
          {apps.map((app, index) => (
            <AppLink key={index} {...app} />
          ))}
        </div>
      </div>

      {/* bottom nav for small screens */}
      <div className="bg-gray-800 h-20 md:hidden flex gap-5 justify-end px-10 items-center">
        {apps.map((app, index) => (
          <AppLink key={index} {...app} />
        ))}
      </div>
    </>
  );
}
