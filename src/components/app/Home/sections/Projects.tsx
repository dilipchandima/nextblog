import Link from "next/link";

export const Projects = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-32 bg-gray-100"
      id="section-0"
    >
      <div className="container mx-auto text-center">
        <p className="text-2xl w-full md:max-w-3xl  mx-auto text-gray-900 font-light mb-16">
          I’m working on a online planning poker tool for Agile teams to measure
          their task with remote team members.
        </p>
        <Link className="btn-dark" href={"/projects"}>
          My projects
        </Link>
      </div>
    </section>
  );
};
