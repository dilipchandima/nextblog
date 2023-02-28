import React from "react";
import { Typewriter } from "react-simple-typewriter";

import Link from "next/link";
import { FiMenu } from "react-icons/fi";

import { useAppContext } from "~/store/useAppContext";

export const TopNav = () => {
  // const { toggleNav } = useAppContext();

  return (
    <div className="container px-5 md:px-0 mx-auto flex justify-between items-center w-full h-full text-gray-900 dark:text-gray-50">
      <Link className="text-xl text-gray-400 dark:text-gray-500" href="/">
        DC
      </Link>
      {/* <FiMenu size={40} strokeWidth={1} onClick={toggleNav} /> */}
    </div>
  );
};
