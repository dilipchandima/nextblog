"use-client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Tag } from "./Tag";

const Project = ({
  id,
  title,
  date,
  description,
  image,
  tags,
  link,
  index,
}: any) => {
  return (
    <div
      className={`w-3/4 mx-auto border-b-2 py-20 border-gray-300 dark:border-gray-600 flex flex-wrap md:flex-nowrap gap-10`}
      key={id}
    >
      <div className="w-full md:w-2/4">
        <Image
          alt={title}
          className="rounded-2xl ms-auto"
          height={500}
          src={image}
          width={500}
        />
      </div>
      <div className="grow w-2/4">
        <h2 className="text-3xl md:text-5xl font-semibold mb-10">{title}</h2>
        {link && (
          <Link
            className="font-thin bg-blue-300 dark:bg-blue-700 py-1 px-2 rounded-lg"
            href={link}
            target="_blank"
          >
            Project Link
          </Link>
        )}
        <div className="my-10">
          <span className="font-mono tracking-wider text-sm text-gray-400">
            TECHNOLOGIES
          </span>
          <Tag tags={tags} />
        </div>
        <span className="font-mono tracking-wider text-sm text-gray-400">
          DESCRIPTION
        </span>
        <p className="tracking-wider font-light mt-2">{description}</p>
        <p className="text-xs text-gray-400 dark:text-gray-600 mt-16">{date}</p>
      </div>
    </div>
  );
};

export default Project;
