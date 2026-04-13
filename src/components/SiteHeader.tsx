import { Link } from '@tanstack/react-router'

import {
  RESUME_DOWNLOAD_FILENAME,
  RESUME_HREF,
} from '#/constants/resume'

const NAV_DIVIDER =
  'https://www.figma.com/api/mcp/asset/afa35585-51ed-44fd-9b7a-139598c5bbbe'

const navLinkBase =
  'px-2.5 py-0.5 text-sm leading-5 decoration-transparent underline-offset-2 transition-colors hover:text-neutral-300'

const resumeLinkClass =
  'px-2.5 py-0.5 text-sm font-normal leading-5 text-neutral-500 decoration-transparent underline-offset-2 transition-colors hover:text-neutral-300'

export function SiteHeader() {
  return (
    <header className="flex w-full flex-col items-end gap-0.5 pt-4 pb-8">
      <nav
        aria-label="Primary"
        className="flex flex-wrap items-center justify-end gap-2.5"
      >
        <Link
          to="/"
          activeOptions={{ exact: true }}
          className={navLinkBase}
          activeProps={{
            className:
              'font-bold text-neutral-300 underline decoration-solid',
            'aria-current': 'page',
          }}
          inactiveProps={{ className: 'font-normal text-neutral-50' }}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={navLinkBase}
          activeProps={{
            className:
              'font-bold text-neutral-300 underline decoration-solid',
            'aria-current': 'page',
          }}
          inactiveProps={{ className: 'font-normal text-neutral-50' }}
        >
          About
        </Link>
        <Link
          to="/projects"
          className={navLinkBase}
          activeProps={{
            className:
              'font-bold text-neutral-300 underline decoration-solid',
            'aria-current': 'page',
          }}
          inactiveProps={{ className: 'font-normal text-neutral-50' }}
        >
          Projects
        </Link>
        <a
          href={RESUME_HREF}
          download={RESUME_DOWNLOAD_FILENAME}
          className={resumeLinkClass}
        >
          Resume
        </a>
      </nav>
      <div className="relative h-0 w-full shrink-0">
        <div className="absolute inset-x-0 -top-px bottom-0">
          <img
            alt=""
            className="block size-full max-w-none"
            src={NAV_DIVIDER}
            width={640}
            height={1}
          />
        </div>
      </div>
    </header>
  )
}
