import Project from "~/components/Project";
import { getAllMarkdownDocMeta } from "~/util";

export default async function Page() {
  const projects = await getData();

  return (
    <main className="w-full min-h-[70vh] mt-20">
      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <Project key={project.id} {...project} index={index} />
        ))}
      </div>
    </main>
  );
}

async function getData() {
  const projects = await getAllMarkdownDocMeta("projects");

  return projects;
}
