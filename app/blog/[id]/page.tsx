import Link from "next/link";
import React, { useEffect } from "react";
import { getAllPostIds, getPostData } from "../../../src/util";

export default async function Page({ params: { id } }: any) {
  const postData: any = await getData(id);

  return (
    <div>
      titleeeeeee={postData.title}
      <br />
      id------{postData.id}
      <br />
      date --------{postData.date}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
}

//https://beta.nextjs.org/docs/data-fetching/generating-static-params
// this is get static paths from old nextjs
export async function generateStaticParams() {
  const paths = await getAllPostIds();

  paths.map((x) => console.log(x));
  return paths.map((x) => ({ id: x.params.id }));
}

async function getData(id: string) {
  const paths = await getAllPostIds();
  paths.map((x) => console.log("-----", x));
  const postData = await getPostData(id);
  return postData;
}
