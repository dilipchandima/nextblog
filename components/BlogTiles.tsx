import Link from "next/link";
import React from "react";

const BlogTiles = ({ blogs }: any) => {
  return (
    <div className="flex flex-wrap">
      {blogs.map(({ id, title, date, description }: any) => (
        <div
          className="w-full md:w-2/4 lg:w-4/12 xl:w-3/12 p-6 rounded-xl"
          key={id}
        >
          <Link href={`/blog/${id.replace(".md", "")}`}>
            <div
              key={id}
              className="w-full border-2 p-6 rounded-xl border-cyan-800  hover:bg-slate-800 hover:border-cyan-600 transition duration-200"
            >
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="py-6 text-slate-400">{description}</p>
              <p className="text-xs text-slate-600">{date}</p>
              <p className="text-xs text-slate-600">{id.replace(".md", "")}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogTiles;
