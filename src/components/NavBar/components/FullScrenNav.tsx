"use client";
import React, { useEffect } from "react";

import { FiX } from "react-icons/fi";

import { useAppContext } from "~/store/useAppContext";

import { BlogTile } from "./BlogTile";
import { NavLink } from "./NavLink";
import { NavTitle } from "./NavTitle";
import { ThemeToggler } from "./ThemeToggler";

const blogs = [
  {
    title: "Are you seeking for build your app on cloud.",
    author: "Dileepa Chandima",
    date: "12/01/2023",
    category: "TECH",
    tags: "react-native, storybook, components",
    slug: "are-you-seeking-for-build-your-app-on-cloud",
  },
  {
    title:
      "Why Complex code with Getters and Setters in JAVA ? It’s time to move with Lombok",
    author: "Dileepa Chandima",
    date: "12/01/2023",
    category: "TECH",
    tags: "java, lombok",
    slug: "why-complex-code-with-Getters-and-Setters-in-JAVA-It-s-time-to-move-with-Lombok",
  },
  {
    title: "Getting started with Storybook",
    author: "Dileepa Chandima",
    date: "12/01/2023",
    category: "TECH",
    tags: "react, react-native, storybook, components",
    slug: "getting-started-with-storybook",
  },
];

export const FullScreenNav = () => {
  const { isNavOpen, toggleNav, navLinks } = useAppContext();

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
              {blogs.map((blog) => (
                <BlogTile key={blog.title} {...blog} />
              ))}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};
