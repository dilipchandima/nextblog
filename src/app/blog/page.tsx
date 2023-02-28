import React from "react";

import Link from "next/link";

import { getAllMarkdownDocMeta } from "@/components/library/utils";
import BlogTiles from "@/components/ui/BlogTiles";

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
