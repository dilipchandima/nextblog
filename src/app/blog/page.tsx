import React from "react";

import Link from "next/link";

import { getAllMarkdownDocMeta } from "@/components/library/utils";
import BlogTiles from "@/components/ui/BlogTiles";

export default async function Post() {
  const paths = await getData();

  return (
    <div className="my-16">
      <div className="absolute bottom-0 -z-10 text-[400px] text-gray-800 font-bold opacity-50">
        Blog
      </div>
      <BlogTiles blogs={paths} />
    </div>
  );
}

async function getData() {
  const paths = await getAllMarkdownDocMeta("blog");

  return paths;
}
