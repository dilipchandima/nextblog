import Link from "next/link";
import React from "react";
import { getAllPostIds } from "../../src/util";

export default function Post({ paths }) {
  console.log(paths);
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

export async function getStaticProps({}) {
  const paths = await getAllPostIds();

  console.log(paths);
  return {
    props: {
      paths,
    },
  };
}
