import React from "react";

import Link from "next/link";

import { useAppContext } from "~/store/useAppContext";

// title: "Are you seeking for build your app on cloud.",
//     author: "Dileepa Chandima",
//     date: "12/01/2023",
//     category: "TECH",
//     tags: "react-native, storybook, components",
//   slug: "are-you-seeking-for-build-your-app-on-cloud",

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
    <div className="py-3 my-3 lg:py-6 lg:my-6">
      <Link href={`/blog/${slug}`} onClick={toggleNav}>
        <span className="font-thin text-gray-600 dark:text-gray-400">
          {date}
        </span>
        <h2 className="font-semibold text-2xl">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mt-3">{tags}</p>
      </Link>
    </div>
  );
};
