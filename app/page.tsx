export default function Page() {
  return (
    <main className="w-full min-h-[70vh] flex items-center justify-center mt-20 md:mt-36">
      <div className="w-3/4">
        <h2 className="text-2xl text-right md:text-4xl text-gray-600 font-semibold">
          DILEEPA CHANDIMA
        </h2>
        <h2 className="text-xl text-right md:text-2xl text-gray-600 mb-10 font-thin">
          FullStack Developer
        </h2>
        <h1 className="text-7xl md:text-9xl font-semibold">
          Let’s make your <span className="text-rose-600">idea</span> into{" "}
          <span className="text-blue-600">reality</span>
        </h1>
        <h2 className="text-3xl md:text-5xl text-gray-600 mt-10 font-thin">
          DESIGN &
          <br />
          DEVELOPMENT
        </h2>
        <div className="mt-14 md:mt-24">
          <a
            className="bg-amber-500 px-7 py-4 rounded-3xl text-gray-900 font-medium hover:dark:bg-amber-200 duration-300"
            href="/projects"
          >
            VIEW MY PROJECTS
          </a>
        </div>
      </div>
    </main>
  );
}
