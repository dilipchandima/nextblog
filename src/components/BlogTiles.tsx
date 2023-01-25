"use-client";

import React from "react";

import Link from "next/link";

const BlogTiles = ({ blogs }: any) => {
  return (
    <div className="flex flex-wrap">
      {blogs.map(({ id, title, date, description, image, tags, slug }: any) => (
        <div
          className="w-full md:w-2/4 lg:w-4/12 xl:w-3/12 p-6 rounded-xl"
          key={id}
        >
          <Link href={`/blog/${slug}`}>
            <div
              className="w-full border-2 p-6 rounded-xl border-gray-300 dark:border-gray-600  hover:bg-gray-100 hover:dark:bg-gray-800 hover:dark:border-gray-600 hover:border-gray-400 transition duration-200"
              key={id}
            >
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className=" text-gray-500 dark:text-gray-400">{tags}</p>
              <p className="text-xs text-gray-400 dark:text-gray-600">{date}</p>
              <p className="text-xs text-gray-400 dark:text-gray-600">
                {id.replace(".md", "")}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogTiles;
