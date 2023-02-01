import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";

import BlogTiles from "~/components/BlogTiles";
import { BlogTile } from "~/components/NavBar/components/BlogTile";
import { getAllMarkdownDocMeta } from "~/util";

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const paths = await (await getData()).slice(0, 4);

  return (
    <>
      <div className="border-b-2 p-4 border-gray-700">
        <Link
          className="flex w-40 h-10 items-center gap-2 text-gray-700 dark:text-gray-300"
          href="/blog"
        >
          <FiChevronLeft /> Back to blogs
        </Link>
      </div>

      {children}
      <div className="bg-gray-100 dark:bg-gray-800 mt-20 mb-20 py-14 px-10 rounded-2xl">
        <h3 className="text-center text-2xl mb-10">Latest Articles</h3>

        <BlogTiles blogs={paths} />
      </div>
    </>
  );
}

async function getData() {
  const paths = await getAllMarkdownDocMeta("blog");

  return paths;
}
