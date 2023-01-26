import React from "react";

import Link from "next/link";
import { BsDribbble, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

import { useAppContext } from "~/store/useAppContext";

import { BlogTile } from "./components/BlogTile";
import { NavLink } from "./components/NavLink";
import { Title } from "./components/Title";

export const MainFooter = () => {
  const { navLinks, latestBlogs } = useAppContext();

  return (
    <div className="bg-gray-200 border-gray-300 dark:bg-gray-800 border-t-2 dark:border-gray-600 py-16 mt-32">
      <div className="container mx-auto flex gap-20 flex-wrap px-6 lg:px-0">
        <div className="grow min-w-[200px]">
          <Title title="MENU" />
          {navLinks.map((link) => (
            <NavLink key={link.name} {...link} />
          ))}
        </div>
        <div className="grow min-w-[200px]">
          <Title title="ABOUT ME" />
          <div className="mb-6">
            <p className="text-xl font-semibold">Dileepa Chandima</p>
            <p className="font-thin tracking-widest">FullStack Developer</p>
            <p className="font-thin tracking-wider">M: +94 71 071 1787</p>
            <p className="font-thin tracking-wider">
              E: dilipchandima@gmail.com
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://www.linkedin.com/in/dilipchandima/"
              target={"_blank"}
            >
              <div className="text-3xl text-gray-600 dark:text-gray-400">
                <BsLinkedin />
              </div>
            </Link>
            <Link href="https://github.com/dilipchandima" target={"_blank"}>
              <div className="text-3xl text-gray-600 dark:text-gray-400">
                <BsGithub />
              </div>
            </Link>
            <Link href="https://dribbble.com/dilipchandima" target={"_blank"}>
              <div className="text-3xl text-gray-600 dark:text-gray-400">
                <BsDribbble />
              </div>
            </Link>
            <Link
              href="https://www.instagram.com/dilipchandima/"
              target={"_blank"}
            >
              <div className="text-3xl text-gray-600 dark:text-gray-400">
                <BsInstagram />
              </div>
            </Link>
          </div>
        </div>
        <div className="grow min-w-[200px]">
          <Title title="LATEST ARTICLES" />
          {latestBlogs.map((blog) => (
            <BlogTile key={blog.title} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};
