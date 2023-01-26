import React from "react";

import MarkDown from "~/components/Markdown";
import { getAllMarkdownDocMeta, readSingleMarkdownDoc } from "~/util";

export default async function Page({ params: { id } }: any) {
  const postData: any = await getData(id);

  return <MarkDown postData={postData} />;
}

export async function generateStaticParams() {
  const paths = await getAllMarkdownDocMeta("blog");

  return paths.map((x) => ({ id: x.slug }));
}

async function getData(id: string) {
  const detailsArray = await getAllMarkdownDocMeta("blog");
  const blog = detailsArray.filter((i) => i.slug === id);

  const postData = await readSingleMarkdownDoc("blog", blog[0].id);

  return postData;
}
