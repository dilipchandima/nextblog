import React from "react";

import Link from "next/link";

type Props = {
  href: string;
  onClick?(): void;
  name: string;
};

export const NavLink = ({ name, href, onClick }: Props) => {
  return (
    <div className="py-3 my-3" key={name}>
      <Link
        className="text-3xl text-gray-800 dark:text-gray-100 font-extralight"
        href={href}
        onClick={onClick}
      >
        {name}
      </Link>
    </div>
  );
};
