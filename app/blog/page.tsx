import Link from "next/link";
import React from "react";
import { getAllPostIds } from "../../src/util";

export default async function Post() {
  const paths = await getData();

  return (
    <div>
      {paths.map(({ params: { id } }) => (
        <Link key={id} href={`/blog/${id}`}>
          <h1>{id}</h1>
        </Link>
      ))}
    </div>
  );
}

async function getData() {
  const paths = await getAllPostIds();

  return paths;
}
