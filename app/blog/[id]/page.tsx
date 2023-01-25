import React from "react";

import Test from "~/components/test";
import {
  getAllMarkdownDocMeta,
  getAllMarkdownFileNames,
  readSingleMarkdownDoc,
} from "~/util";

export default async function Page({ params: { id } }: any) {
  const postData: any = await getData(id);

  return <Test postData={postData} />;
}

export async function generateStaticParams() {
  const paths = await getAllMarkdownFileNames("blog");

  return paths.map((x) => ({ id: x }));
}

async function getData(id: string) {
  const detailsArray = await getAllMarkdownDocMeta("blog");
  const blog = detailsArray.filter((i) => i.slug === id);

  console.log(id, detailsArray, blog);
  const postData = await readSingleMarkdownDoc("blog", blog[0].id);

  return postData;
}
