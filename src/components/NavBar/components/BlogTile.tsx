import React from "react";

export const BlogTile = () => {
  return (
    <div className="py-3 my-3 lg:py-6 lg:my-6">
      <span className="font-thin text-gray-600 dark:text-gray-400">date</span>
      <h2 className="font-semibold text-2xl">Title of the blog</h2>
      <p className="text-gray-700 dark:text-gray-300 mt-3">small description</p>
    </div>
  );
};
