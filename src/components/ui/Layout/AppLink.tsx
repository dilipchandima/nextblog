"use-client";

import React from "react";

import Link from "next/link";

const AppLink = ({ link, icon }: any) => {
  return (
    <Link href={link} target={"_blank"}>
      <div className="text-2xl text-gray-400 hover:text-purple-600 py-5 flex items-center justify-center">
        {icon}
      </div>
    </Link>
  );
};

export default AppLink;
