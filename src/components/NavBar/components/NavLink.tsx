import React from "react";

import Link from "next/link";

type Props = {
  href: string;
  onClick?(): void;
  name: string;
};

export const NavLink = ({ name, href, onClick }: Props) => {
  return (
    <div className="py-3 my-3 lg:py-6 lg:my-6" key={name}>
      <Link
        className="text-xl text-gray-600 hover:text-gray-900 dark:text-gray-300 font-extralight hover:dark:text-gray-50 duration-300 hover:font-semibold"
        href={href}
        onClick={onClick}
      >
        {name}
      </Link>
    </div>
  );
};
