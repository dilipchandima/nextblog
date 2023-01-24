import React from "react";

import Link from "next/link";
import { FiMenu } from "react-icons/fi";

export const TopNav = () => {
  return (
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
  );
};
