import React from "react";
import { getAllPostIds, getPostData } from "../../src/util";

export default function Post({ postData }) {
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

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
    revalidate: 60, // In seconds
  };
}
