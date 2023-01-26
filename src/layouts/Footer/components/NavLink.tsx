import React from "react";

import Link from "next/link";

type Props = {
  name: string;
  link: string;
};

export const NavLink = ({ name, link }: Props) => {
  return (
    <div className="py-1 my-1">
      <Link
        className="text-l lg:text-xl text-gray-600 hover:text-gray-900 dark:text-gray-300 font-extralight hover:dark:text-gray-50 duration-300 hover:font-semibold"
        href={link}
      >
        {name}
      </Link>
    </div>
  );
};
