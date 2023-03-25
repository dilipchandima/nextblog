"use client";

import Link from "next/link";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const Projects = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-32 bg-gray-100"
      id="section-0"
    >
      <div className="container mx-auto text-center">
        <p className="text-2xl w-full md:max-w-3xl px-4 md:px-0  mx-auto text-gray-900 font-light mb-16">
          I’m working on a online planning poker tool for Agile teams to measure
          their task with remote team members.
        </p>
        <AnimationOnScroll animateIn="animate__bounceIn" delay={100}>
          <Link className="btn-dark" href={"/projects"}>
            My projects
          </Link>
        </AnimationOnScroll>
      </div>
    </section>
  );
};
