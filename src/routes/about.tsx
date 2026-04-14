import { createFileRoute } from '@tanstack/react-router'

import { GrayscaleZoomBanner } from '#/components/GrayscaleZoomBanner'
import { SiteHeader } from '#/components/SiteHeader'
import { aboutProfile } from '#/data/aboutProfile'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  const { professional_summary, skills, experience, education, awards } =
    aboutProfile

  return (
    <main className="flex min-h-dvh flex-col items-center bg-neutral-950 pb-60 text-neutral-50">
      <div className="flex w-full max-w-[640px] flex-col gap-12 px-3">
        <SiteHeader />

        <section
          id="professional-summary"
          className="flex flex-col gap-3 scroll-mt-8"
          aria-labelledby="summary-heading"
        >
          <h1
            id="summary-heading"
            className="w-full min-w-0 text-xl font-semibold leading-8 text-neutral-200 underline decoration-solid"
          >
            Professional summary
          </h1>
          <p className="w-full min-w-0 text-base font-normal leading-6 tracking-normal text-neutral-50">
            {professional_summary}
          </p>
        </section>

        <section
          id="skills"
          className="flex flex-col gap-6 scroll-mt-8"
          aria-labelledby="skills-heading"
        >
          <h2
            id="skills-heading"
            className="w-full min-w-0 text-xl font-semibold leading-8 text-neutral-200 underline decoration-solid"
          >
            Skills
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-400">
                Technical
              </h3>
              <ul className="flex flex-wrap gap-2">
                {skills.technical_skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-xs font-normal text-neutral-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-400">
                Developer tools
              </h3>
              <ul className="flex flex-wrap gap-2">
                {skills.developer_tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-xs font-normal text-neutral-200"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="flex flex-col gap-8 scroll-mt-8"
          aria-labelledby="experience-heading"
        >
          <h2
            id="experience-heading"
            className="w-full min-w-0 text-xl font-semibold leading-8 text-neutral-200 underline decoration-solid"
          >
            Experience
          </h2>
          <ol className="flex list-none flex-col gap-10 p-0">
            {experience.map((job) => (
              <li
                key={`${job.company}-${job.period}`}
                className="flex flex-col gap-2"
              >
                <div className="flex flex-col gap-0.5">
                  <p className="text-base font-semibold leading-6 text-neutral-50">
                    {job.role}
                  </p>
                  <p className="text-sm font-normal leading-5 text-neutral-400">
                    {job.company} · {job.location}
                  </p>
                  <p className="text-xs font-normal leading-4 text-neutral-500">
                    {job.period}
                  </p>
                </div>
                {'bannerSrc' in job && job.bannerSrc ? (
                  <GrayscaleZoomBanner src={job.bannerSrc} label={job.company} />
                ) : null}
                <ul className="m-0 flex list-disc flex-col gap-2 ps-5 text-base font-normal leading-6 text-neutral-50 marker:text-neutral-500">
                  {job.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="education"
          className="flex flex-col gap-4 scroll-mt-8"
          aria-labelledby="education-heading"
        >
          <h2
            id="education-heading"
            className="w-full min-w-0 text-xl font-semibold leading-8 text-neutral-200 underline decoration-solid"
          >
            Education
          </h2>
          <ul className="m-0 flex list-none flex-col gap-6 p-0">
            {education.map((entry) => (
              <li key={entry.degree} className="flex flex-col gap-1">
                <p className="text-base font-semibold leading-6 text-neutral-50">
                  {entry.degree}
                </p>
                <p className="text-sm font-normal leading-5 text-neutral-400">
                  {entry.institution}
                </p>
                <p className="text-xs font-normal leading-4 text-neutral-500">
                  {entry.location} · {entry.period}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="awards"
          className="flex flex-col gap-4 scroll-mt-8"
          aria-labelledby="awards-heading"
        >
          <h2
            id="awards-heading"
            className="w-full min-w-0 text-xl font-semibold leading-8 text-neutral-200 underline decoration-solid"
          >
            Awards
          </h2>
          <ul className="m-0 flex list-none flex-col gap-4 p-0">
            {awards.map((award) => (
              <li key={award.title} className="flex flex-col gap-0.5">
                <p className="text-base font-semibold leading-6 text-neutral-50">
                  {award.title}
                </p>
                <p className="text-sm font-normal leading-5 text-neutral-400">
                  {award.detail}
                </p>
                <p className="text-xs font-normal leading-4 text-neutral-500">
                  {award.date}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
