import React from "react";

import Image from "next/image";
import Link from "next/link";

const BlogTiles = ({ blogs }: any) => {
  return (
    <div className="flex flex-wrap">
      {blogs.map(({ id, title, date, description, image }: any) => (
        <div
          className="w-full md:w-2/4 lg:w-4/12 xl:w-3/12 p-6 rounded-xl"
          key={id}
        >
          <Link href={`/blog/${id.replace(".md", "")}`}>
            <div
              className="w-full border-2 p-6 rounded-xl border-cyan-800  hover:bg-slate-800 hover:border-cyan-600 transition duration-200"
              key={id}
            >
              <h2 className="text-xl font-bold mb-6">{title}</h2>
              {image && (
                <Image alt="sample" height={250} src={image} width={700} />
              )}
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
