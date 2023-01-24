import Link from "next/link";
import React, { useEffect } from "react";
import Test from "../../../src/components/test";
import { getAllPostIds, getPostData } from "../../../src/util";

export default async function Page({ params: { id } }: any) {
  const postData: any = await getData(id);

  return <Test postData={postData} />;
}

export async function generateStaticParams() {
  const paths = await getAllPostIds();
  paths.map((x) => console.log(x));

  return paths.map((x) => ({ id: x.params.id }));
}

async function getData(id: string) {
  const postData = await getPostData(id);

  return postData;
}
