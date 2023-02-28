// "use client";

import Image from "next/image";
import Link from "next/link";

import { getAllMarkdownDocMeta } from "@/components/library/utils";
import Particle from "@/components/ui/Particle";
import Section from "@/components/ui/Section";

export default async function Home() {
  const projects = await getData();

  return (
    <main>
      <section className="h-[60vh] md:h-[80vh] flex flex-col justify-center">
        <Particle />
        <p className="text-xl text-purple-500">Hi! My name is</p>
        <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold purple-shadow">
          Dileepa
          <br />
          Chandima
        </h1>
        <p className="text-2xl md:text-4xl text-purple-500 font-extralight mt-5">
          I build things for web and mobile
        </p>
      </section>
      <Section title="Nice to meet you">
        <Image alt="profile" height={200} src="/images/face.png" width={200} />
        <div className="w-full md:w-3/5 text-xl mt-10">
          <p className="bg-gray-900 rounded-3xl py-5">
            My name is Dileepa Chandima. I started coding when I was 12years old
            using Adobe flash action script. When I was in the advance level
            class I automated my School bell system.
          </p>
          <p className="bg-gray-900 rounded-3xl py-5">
            Now I love to use JavaScript in Web, Mobile and Backend development.
            I`&apos;m a self-motivated software engineer with a Computer Science
            and Engineering background having 6+ years of experience in Mobile
            Application and Web Application development. A dynamic personality,
            and motivated team player with sound leadership skills.
          </p>
        </div>
      </Section>
      <Section title="My resent work">
        <div className="flex flex-col md:flex-row gap-3">
          {projects.slice(0, 2).map(({ title, image }, index) => (
            <div
              className="grayscale hover:grayscale-0 duration-150 relative"
              key={`project_${index}`}
            >
              <div className="absolute bg-gray-900 h-[500px] w-[500px] bg-opacity-10 flex flex-col items-center justify-center p-20 text-center ">
                <div className="text-3xl bg-slate-200 rounded-xl p-5 text-purple-600 shadow-lg border-2 border-purple-400">
                  {title}
                </div>
                <Link
                  className="bg-purple-800 py-1 px-2 text-white rounded mt-2 hover:bg-purple-500"
                  href="/projects"
                >
                  MORE
                </Link>
              </div>
              <Image
                alt={title}
                className="rounded-2xl"
                height={500}
                src={image}
                width={500}
              />
            </div>
          ))}
        </div>
      </Section>
      {/* <Section title="Say Hello!">
        <p>
          Experienced and self-motivated software engineer with a Computer
          Science and Engineering background having 6+ years of experience in
          Mobile Application and Web Application development. A dynamic
          personality, and motivated team player with sound leadership skills.
        </p>
      </Section> */}
    </main>
  );
}

async function getData() {
  const projects = await getAllMarkdownDocMeta("projects");

  return projects;
}
