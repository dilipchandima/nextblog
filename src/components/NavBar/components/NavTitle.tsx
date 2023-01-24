import React from "react";

type Props = {
  title: string;
};

export const NavTitle = ({ title }: Props) => {
  return (
    <div className="flex py-5 border-b-2 border-gray-100 font-thin my-6">
      {title}
    </div>
  );
};
