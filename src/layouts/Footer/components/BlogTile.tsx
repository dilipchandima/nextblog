import React from "react";

import Link from "next/link";

import { Blog } from "~/components/NavBar/components/BlogTile";

export const BlogTile = ({
  title,
  author,
  date,
  category,
  tags,
  slug,
}: Blog) => {
  return (
    <div className="py-2 px-2 rounded-xl my-2 lg:py-3 lg:my-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 duration-300">
      <Link href={`/blog/${slug}`}>
        <span className="font-thin text-xs text-gray-600 dark:text-gray-400">
          {date}
        </span>
        <h2 className="font-semibold text-l">{title}</h2>
      </Link>
    </div>
  );
};
