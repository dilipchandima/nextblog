import React from "react";

import BlogTiles from "~/components/BlogTiles";
import { getAllMarkdownDocMeta } from "~/util";

export default async function Post() {
  const paths = await getData();

  return (
    <div className="my-16">
      <BlogTiles blogs={paths} />
    </div>
  );
}

async function getData() {
  const paths = await getAllMarkdownDocMeta("blog");

  return paths;
}
