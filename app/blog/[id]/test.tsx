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
      <article className="prose prose-slate">
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
