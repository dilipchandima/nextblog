import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

const ASSETS = {
  navDivider:
    'https://www.figma.com/api/mcp/asset/afa35585-51ed-44fd-9b7a-139598c5bbbe',
  linkedin:
    'https://www.figma.com/api/mcp/asset/e3654946-5257-44b7-90e1-c811d80ad423',
  instagram:
    'https://www.figma.com/api/mcp/asset/6ce34e3f-1377-4d04-9d01-2a0a3898257b',
  github:
    'https://www.figma.com/api/mcp/asset/a4482813-8029-47c3-b264-7f91392f90f7',
  dribbble:
    'https://www.figma.com/api/mcp/asset/684bb8b1-fb88-412f-8663-fa9a265cdd74',
} as const

const navItems = [
  { label: 'Home', to: '/' as const },
  { label: 'About', hash: '#experience' as const },
  { label: 'Projects', hash: '#projects' as const },
  { label: 'Resume', hash: '#contact' as const },
] as const

function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center bg-neutral-950 pb-60 text-neutral-50">
      <div className="flex w-full max-w-[640px] flex-col gap-12 px-3">
        <header className="flex w-full flex-col items-end gap-0.5 pt-4 pb-8">
          <nav
            aria-label="Primary"
            className="flex flex-wrap items-center justify-end gap-2.5"
          >
            {navItems.map((item) =>
              'to' in item ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className="px-2.5 py-0.5 text-sm font-normal leading-5 text-neutral-50 decoration-transparent underline-offset-2 transition-colors hover:text-neutral-300"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.hash}
                  className="px-2.5 py-0.5 text-sm font-normal leading-5 text-neutral-500 decoration-transparent underline-offset-2 transition-colors hover:text-neutral-300"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>
          <div className="relative h-0 w-full shrink-0">
            <div className="absolute inset-x-0 -top-px bottom-0">
              <img
                alt=""
                className="block size-full max-w-none"
                src={ASSETS.navDivider}
                width={640}
                height={1}
              />
            </div>
          </div>
        </header>

        <section className="flex flex-col gap-0.5" aria-labelledby="hero-name">
          <p className="w-full text-xs font-light leading-4 tracking-normal text-neutral-50">
            Your Vision, Engineered.
          </p>
          <h1
            id="hero-name"
            className="w-full text-5xl font-extralight leading-[48px] tracking-normal text-neutral-50"
          >
            Dileepa Chandima
          </h1>
        </section>

        <p className="w-full text-base font-normal leading-6 tracking-normal text-neutral-50">
          Bridging Sri Lankan roots with NZ innovation. Expert in Mobile & Web
          development with a specialized focus on UI/UX design. I create
          scalable, user-centric solutions that perform.
        </p>

        <section
          id="experience"
          className="flex flex-col gap-3 scroll-mt-8"
          aria-labelledby="experience-heading"
        >
          <h2
            id="experience-heading"
            className="w-full min-w-0 text-xl font-semibold leading-8 text-neutral-200 underline decoration-solid"
          >
            Experience
          </h2>
          <p className="w-full min-w-0 text-base font-normal leading-6 tracking-normal text-neutral-50">
            FullStack Developer at Mad Paws (Remote from Auckland) Primary
            technical owner for mobile and web platforms. I specialize in
            Next.js migrations, Expo/React Native optimization, and building
            robust design systems that accelerate development and elevate UI/UX
            standards.
          </p>
          <a
            href="#contact"
            className="inline-flex w-fit p-0.5 text-xs font-normal leading-4 tracking-normal text-neutral-600 decoration-transparent underline-offset-2 transition-colors hover:text-neutral-400"
          >
            read more about me
          </a>
        </section>

        <section
          id="projects"
          className="flex flex-col gap-3 scroll-mt-8"
          aria-labelledby="projects-heading"
        >
          <h2
            id="projects-heading"
            className="w-full min-w-0 text-xl font-semibold leading-8 text-neutral-200 underline decoration-solid"
          >
            Projects
          </h2>
          <p className="w-full min-w-0 text-base font-normal leading-6 tracking-normal text-neutral-50">
            As the technical lead for I&apos;m Coming App, I bridge social discovery
            with high-end engineering. From sunset romances to hiking buddies, I
            built the architecture that lets users switch their intent
            instantly, proving that great code can foster genuine human
            connection without the pressure of traditional apps.
          </p>
          <a
            href="#projects"
            className="inline-flex w-fit p-0.5 text-xs font-normal leading-4 tracking-normal text-neutral-600 decoration-transparent underline-offset-2 transition-colors hover:text-neutral-400"
          >
            my projects
          </a>
        </section>

        <section
          id="contact"
          className="flex flex-col gap-3 scroll-mt-8"
          aria-labelledby="contact-heading"
        >
          <h2
            id="contact-heading"
            className="w-full min-w-0 text-xl font-semibold leading-8 text-neutral-50 underline decoration-solid"
          >
            From Concept to Code. Let&apos;s Build It.
          </h2>
          <p className="w-full min-w-0 text-base font-normal leading-6 tracking-normal text-neutral-50">
            <span>Reach me at </span>
            <a
              href="mailto:dilipchandima@gmail.com"
              className="text-base font-normal leading-6 text-neutral-50 underline decoration-solid underline-offset-2 transition-colors hover:text-neutral-300"
            >
              dilipchandima@gmail.com
            </a>
            <span> &amp; </span>
            <a
              href="tel:+642904327001"
              className="text-base font-normal leading-6 text-neutral-50 underline decoration-solid underline-offset-2 transition-colors hover:text-neutral-300"
            >
              +642904327001
            </a>
            <span>
              {' '}
              or connect with me on the platforms below.
            </span>
          </p>
          <div className="flex gap-4 pt-10" aria-label="Social links">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="relative size-5 shrink-0"
              aria-label="LinkedIn"
            >
              <img
                alt=""
                className="absolute inset-0 block size-full max-w-none"
                src={ASSETS.linkedin}
                width={20}
                height={20}
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="relative size-5 shrink-0"
              aria-label="Instagram"
            >
              <img
                alt=""
                className="absolute inset-0 block size-full max-w-none"
                src={ASSETS.instagram}
                width={20}
                height={20}
              />
            </a>
            <a
              href="https://github.com/dilipchandima"
              target="_blank"
              rel="noreferrer noopener"
              className="relative size-5 shrink-0"
              aria-label="GitHub"
            >
              <img
                alt=""
                className="absolute inset-0 block size-full max-w-none"
                src={ASSETS.github}
                width={20}
                height={20}
              />
            </a>
            <a
              href="https://dribbble.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="relative size-5 shrink-0"
              aria-label="Dribbble"
            >
              <img
                alt=""
                className="absolute inset-0 block size-full max-w-none"
                src={ASSETS.dribbble}
                width={20}
                height={20}
              />
            </a>
          </div>
        </section>

      </div>
    </main>
  )
}
