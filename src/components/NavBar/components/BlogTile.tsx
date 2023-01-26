import React from "react";

import Link from "next/link";

import { Tag } from "~/components/Tag";
import { useAppContext } from "~/store/useAppContext";

export type Blog = {
  title: string;
  author: string;
  date: string;
  category: string;
  tags: string;
  slug: string;
};

export const BlogTile = ({
  title,
  author,
  date,
  category,
  tags,
  slug,
}: Blog) => {
  const { toggleNav } = useAppContext();

  return (
    <div className="py-3 px-3 rounded-xl my-3 lg:py-6 lg:my-6 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 duration-300">
      <Link href={`/blog/${slug}`} onClick={toggleNav}>
        <span className="font-thin text-gray-600 dark:text-gray-400">
          {date}
        </span>
        <h2 className="font-semibold text-2xl">{title}</h2>
        <Tag tags={tags} />
      </Link>
    </div>
  );
};
