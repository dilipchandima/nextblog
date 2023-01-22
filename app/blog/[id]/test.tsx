"use client";

import React, { useEffect } from "react";
import "highlight.js/styles/github-dark.css";

import hljs from "highlight.js";

export default function Test({ postData }: any) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div>
      {/* <article className="lg:prose prose-2xl prose prose-slate mx-auto"> */}
      <article className="prose prose-slate mx-auto">
        titleeeeeee={postData.title}
        <br />
        id------{postData.id}
        <br />
        date --------{postData.date}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
}
