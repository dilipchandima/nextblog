import Link from "next/link";
import { BsDribbble, BsGithub, BsLinkedin } from "react-icons/bs";
import { FiList, FiUser } from "react-icons/fi";

export default function Page() {
  return (
    <main className="w-full min-h-[70vh] flex items-center justify-center mt-20 md:mt-36">
      <div className="w-3/4">
        <h2 className="text-2xl text-right md:text-4xl text-gray-600 dark:text-gray-400 font-semibold">
          DILEEPA CHANDIMA
        </h2>
        <h2 className="text-xl text-right md:text-2xl text-gray-600 dark:text-gray-400 mb-10 font-thin">
          FullStack Developer
        </h2>
        <h1 className="text-7xl md:text-9xl font-semibold">
          Let’s turn your <span className="text-rose-600">idea</span> into{" "}
          <span className="text-blue-600">reality</span>
        </h1>
        <h2 className="text-3xl md:text-5xl text-gray-600 dark:text-gray-400 mt-10 font-thin">
          DESIGN &
          <br />
          DEVELOPMENT
        </h2>
        <div className="flex gap-4 mt-10">
          <Link
            href="https://www.linkedin.com/in/dilipchandima/"
            target={"_blank"}
          >
            <div className="text-3xl text-gray-600 dark:text-gray-400 hover:text-gray-800 hover:dark:text-gray-300">
              <BsLinkedin />
            </div>
          </Link>
          <Link href="https://github.com/dilipchandima" target={"_blank"}>
            <div className="text-3xl text-gray-600 dark:text-gray-400 hover:text-gray-800 hover:dark:text-gray-300">
              <BsGithub />
            </div>
          </Link>
          <Link href="https://dribbble.com/dilipchandima" target={"_blank"}>
            <div className="text-3xl text-gray-600 dark:text-gray-400 hover:text-gray-800 hover:dark:text-gray-300">
              <BsDribbble />
            </div>
          </Link>
        </div>
        <div className="mt-14 md:mt-24 flex gap-3">
          <Link
            className="bg-emerald-600 px-7 py-4 rounded-3xl text-gray-900 font-medium hover:dark:bg-amber-200 duration-300 flex gap-3 items-center text-gray-50"
            href="/about"
          >
            <FiUser />
            ABOUT ME
          </Link>

          <Link
            className="bg-amber-500 px-7 py-4 rounded-3xl text-gray-900 font-medium hover:dark:bg-amber-200 duration-300 flex gap-3 items-center"
            href="/projects"
          >
            <FiList />
            VIEW MY PROJECTS
          </Link>
        </div>
      </div>
    </main>
  );
}
