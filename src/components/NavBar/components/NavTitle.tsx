import React from "react";

type Props = {
  title: string;
};

export const NavTitle = ({ title }: Props) => {
  return (
    <div className="flex py-5 lg:py-10 border-b-2 border-gray-800 dark:border-gray-100  dark:font-thin  my-6 lg:text-2xl">
      {title}
    </div>
  );
};
