import React from "react";

import { notFound } from "next/navigation";

import { Disqus } from "~/components/Disqus";
import MarkDown from "~/components/Markdown";
import { Blog } from "~/components/NavBar/components/BlogTile";
import { getAllMarkdownDocMeta, readSingleMarkdownDoc } from "~/util";

export default async function Page({ params: { id } }: any) {
  const postData:
    | {
        id?: string;
        folderName: string;
        contentHtml: any;
        title?: string;
        author?: string;
        date?: string;
        category?: string;
        tags?: string;
        slug?: string;
      }
    | undefined = await getData(id);

  if (!postData) {
    notFound();
  }

  return (
    <>
      <MarkDown postData={postData} />
      <Disqus
        identifier={postData?.slug || ""}
        title={postData?.title || ""}
        url={`https://dilipchandima.vercel.app/blog/${postData.slug}`}
      />
    </>
  );
}

export async function generateStaticParams() {
  const paths = await getAllMarkdownDocMeta("blog");

  return paths.map((x) => ({ id: x.slug }));
}

async function getData(id: string) {
  const detailsArray = await getAllMarkdownDocMeta("blog");
  const blog = detailsArray.filter((i) => i.slug === id);

  if (blog.length === 0) {
    return undefined;
  }

  const postData = await readSingleMarkdownDoc("blog", blog[0].id);

  return postData;
}
