import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Particle({ children, title }: Props) {
  return (
    <section className="my-20 relative">
      <span className="text-5xl md:text-9xl font-bold opacity-10 text-purple-500 absolute top-[-10%]">
        {title}
      </span>
      <div className="text-3xl md:text-7xl font-bold mb-10 text-purple-600 white-shadow">
        {title}
      </div>
      <div className="py-10">{children}</div>
    </section>
  );
}
