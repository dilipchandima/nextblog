import Link from "next/link";
import React from "react";
import BlogTiles from "../../components/BlogTiles";
import { getAllPostIds, getAllPostTileData } from "../../src/util";

export default async function Post() {
  const paths = await getData();
  console.log(paths);
  return (
    <div className="my-16">
      <BlogTiles blogs={paths} />
    </div>
  );
}

async function getData() {
  const paths = await getAllPostTileData();

  return paths;
}
