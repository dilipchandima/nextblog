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
    <div className="bg-gray-200 dark:bg-gray-800 py-16 mt-32">
      <div className="container mx-auto flex flex-col items-end gap-20 flex-wrap px-6 lg:px-0">
        <div className="grow">
          <div className="flex flex-col gap-4 mx-auto px-5">
            <Link
              href="https://www.linkedin.com/in/dilipchandima/"
              target={"_blank"}
            >
              <div className="text-3xl text-gray-600 dark:text-gray-600">
                <BsLinkedin />
              </div>
            </Link>
            <Link href="https://github.com/dilipchandima" target={"_blank"}>
              <div className="text-3xl text-gray-600 dark:text-gray-600">
                <BsGithub />
              </div>
            </Link>
            <Link href="https://dribbble.com/dilipchandima" target={"_blank"}>
              <div className="text-3xl text-gray-600 dark:text-gray-600">
                <BsDribbble />
              </div>
            </Link>
            <Link
              href="https://www.instagram.com/dilipchandima/"
              target={"_blank"}
            >
              <div className="text-3xl text-gray-600 dark:text-gray-600">
                <BsInstagram />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
