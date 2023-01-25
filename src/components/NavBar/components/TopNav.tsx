import React from "react";

import Link from "next/link";
import { FiMenu } from "react-icons/fi";

import { useAppContext } from "~/store/useAppContext";

export const TopNav = () => {
  const { toggleNav } = useAppContext();

  return (
    <div className=" container mx-auto flex justify-between items-center w-full h-full text-gray-900 dark:text-gray-50">
      <Link className="text-xl font-thin" href="/">
        Dileepa Chandima
      </Link>
      <FiMenu size={40} strokeWidth={1} onClick={toggleNav} />
    </div>
  );
};
