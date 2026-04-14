import { createFileRoute } from '@tanstack/react-router'

import { GrayscaleZoomBanner } from '#/components/GrayscaleZoomBanner'
import { SiteHeader } from '#/components/SiteHeader'
import { projectExternalHref, projects } from '#/data/projects'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

function ProjectsPage() {
  return (
    <main className="flex min-h-dvh flex-col items-center bg-neutral-950 pb-60 text-neutral-50">
      <div className="flex w-full max-w-[640px] flex-col gap-12 px-3">
        <SiteHeader />

        <section
          className="flex flex-col gap-10 scroll-mt-8"
          aria-labelledby="projects-heading"
        >
          <h1
            id="projects-heading"
            className="w-full min-w-0 text-xl font-semibold leading-8 text-neutral-200 underline decoration-solid"
          >
            Projects
          </h1>
          <ul className="m-0 flex list-none flex-col gap-12 p-0">
            {projects.map((project) => {
              const href = projectExternalHref(project.url)
              return (
                <li key={project.name} className="flex flex-col gap-2">
                  <div className="flex flex-col gap-0.5">
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="w-fit text-base font-semibold leading-6 text-neutral-50 underline decoration-solid underline-offset-2 transition-colors hover:text-neutral-300"
                    >
                      {project.name}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                    <p className="text-xs font-normal leading-4 text-neutral-500">
                      {project.url}
                    </p>
                  </div>
                  {'bannerSrc' in project && project.bannerSrc ? (
                    <GrayscaleZoomBanner
                      src={project.bannerSrc}
                      label={project.name}
                    />
                  ) : null}
                  <ul className="m-0 flex list-disc flex-col gap-2 ps-5 text-base font-normal leading-6 text-neutral-50 marker:text-neutral-500">
                    {project.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </main>
  )
}
