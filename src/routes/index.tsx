import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
        Dilip Chandima
      </h1>
    </main>
  )
}
