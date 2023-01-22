"use client";

import React, { useEffect } from "react";
import "highlight.js/styles/github-dark.css";

import hljs from "highlight.js";

export default function Test({ postData }: any) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="pt-20">
      <article className="prose  mx-auto">
        <h1>{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
}
