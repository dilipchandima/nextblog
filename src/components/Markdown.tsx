"use client";

import React, { useEffect } from "react";
import "highlight.js/styles/github-dark.css";

import hljs from "highlight.js";

export default function MarkDown({ postData }: any) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="pt-20">
      <article className="prose mx-auto dark:prose-invert prose-img:rounded-lg prose-p:font-light tracking-wide ">
        <h1 className="text-7xl font-semibold">{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
}
