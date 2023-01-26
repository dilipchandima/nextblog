import React from "react";

type Props = {
  title: string;
};

export const Title = ({ title }: Props) => {
  return (
    <div className="flex py-1 lg:py-2 border-b-2 border-gray-400 dark:border-gray-600 text-gray-400 dark:text-gray-600 dark:font-thin my-4 text-sm lg:text-l">
      {title}
    </div>
  );
};
