"use client";
import React, { useEffect } from "react";

import { FiX } from "react-icons/fi";

import { useAppContext } from "~/store/useAppContext";

import { BlogTile } from "./BlogTile";
import { NavLink } from "./NavLink";
import { NavTitle } from "./NavTitle";
import { ThemeToggler } from "./ThemeToggler";

export const FullScreenNav = () => {
  const { isNavOpen, toggleNav, navLinks, latestBlogs } = useAppContext();

  return (
    <div
      className={`fixed top-0 w-full h-screen bg-gray-100 dark:bg-gray-800 p-10 ease-in duration-300 overflow-y-scroll ${
        isNavOpen ? " left-0 " : " left-[-100%] "
      }`}
    >
      <div
        className={`fixed w-full top-5 bg-gray-100 dark:bg-gray-800  ease-in duration-300 ${
          isNavOpen ? " left-0 " : " left-[-100%] "
        }`}
      >
        <div className="flex justify-between container mx-auto text-gray-800 dark:text-gray-100">
          <ThemeToggler />

          <div className="right-0" onClick={toggleNav}>
            <FiX size={40} strokeWidth={1} />
          </div>
        </div>
      </div>

      <div className="container mx-auto text-gray-800 dark:text-gray-100 pt-20">
        <div className="flex flex-wrap md:flex-nowrap gap-20 w-full">
          <div className="w-full">
            <NavTitle title="MENU" />
            {navLinks.map(({ name, link }) => (
              <NavLink href={link} key={name} name={name} onClick={toggleNav} />
            ))}
          </div>
          <div className="w-full">
            <NavTitle title="LATEST ARTICLES" />
            <>
              {latestBlogs.map((blog) => (
                <BlogTile key={blog.title} {...blog} />
              ))}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};
