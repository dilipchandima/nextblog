"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimationOnScroll } from "react-animation-on-scroll";

const projects = [
  {
    title: "ScrumTable",
    date: "Completed - 22/03/2023",
    tags: "React, Firebase, Next.js",
    link: "https://www.scrumtable.xyz/",
    image: "/projects/scrum.png",
    description:
      "Scrum poker, also known as planning poker, is a technique used by teams in agile software development to estimate the effort required to complete a task or a set of tasks. This is a online tool for scrum poker.",
  },
  {
    title:
      "React Native package for date range selection - open source project",
    date: "Completed - 12/01/2023",
    tags: "React Native, React, Moment",
    link: "https://www.npmjs.com/package/rn-select-date-range",
    image: "/projects/date.png",
    description:
      "Fully customized react native date range selection package where react native developers can use for their own projects.",
  },
  {
    title: "Baas Mobile Application",
    tags: "React Native, React, Firebase, Redux, Axios, Google Map, React Native Background Geolocation",
    link: "https://apps.apple.com/us/app/handy-next-door-services-jobs/id1515142863",
    image: "/projects/baas.png",
    description:
      "Mobile-based application that Handymans and Users can register to the app and Users will be able to post jobs and Handymen can bid for the job posts and then Users can offer the job to the handyman and they can do the job. When the handyman comes to the user’s place Users can see the location change.",
  },
  {
    title: "Baas Web Site",
    date: "Completed - 12/01/2023",
    tags: "HTML, CSS, Boostrap, Firebase",
    link: "https://goodbaas.com/",
    image: "/projects/basweb.png",
    description:
      "website for Mobile-based application that Handymans and Users can register to the app and Users will be able to post jobs and Handymen can bid for the job posts and then Users can offer the job to the handyman and they can do the job.",
  },
  {
    title: "DocZig",
    date: "ongoing",
    tags: "React Native, React, Firebase, Redux, Axios, Google Map",
    image: "/projects/doczig.png",
    link: "",
    description:
      "Mobile-based application that for online pdf document signing with very securer way.",
  },
];

export const Projects = () => {
  return (
    <main>
      <div className="container mx-auto md:max-w-5xl px-4 md:px-0 pt-40">
        <h1>Projects</h1>
        {projects.map(({ title, date, tags, link, image, description }) => (
          <AnimationOnScroll key={title} animateIn="animate__zoomIn">
            <div key={title}>
              <div className="flex flex-wrap my-24">
                <div className="w-full md:w-2/4 relative">
                  <Image
                    src={image}
                    alt="dileepa"
                    width={400}
                    height={400}
                    className="mx-auto rounded-2xl -z-20"
                  />
                </div>
                <div className="w-full md:w-2/4">
                  <h3 className="mb-10">{title}</h3>
                  <p className="font-mono">{description}</p>

                  {link !== "" && (
                    <Link
                      href={link}
                      target="_blank"
                      className="block mt-5 italic underline "
                    >
                      link to project
                    </Link>
                  )}
                  <div className="flex flex-wrap gap-2 mt-10">
                    {tags.split(", ").map((item) => (
                      <div
                        key={item}
                        className="px-4 py-1 text-sm border-[1px] rounded-xl border-gray-700 font-mono"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </AnimationOnScroll>
        ))}
      </div>
    </main>
  );
};
