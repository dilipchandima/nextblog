import React from "react";

type Props = {
  tags: string;
};

export const Tag = ({ tags }: Props) => {
  return (
    <div className="flex gap-2 my-4 flex-wrap">
      {tags.split(", ").map((tag) => (
        <span
          className="bg-gray-300 dark:bg-gray-700 dark:text-gray-400 py-1 px-2 rounded-xl text-xs font-mono"
          key={tag}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};
