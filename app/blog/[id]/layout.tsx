import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Link
        className="flex w-40 h-10 items-center gap-2 text-gray-500"
        href="/blog"
      >
        <FiChevronLeft /> blogs
      </Link>

      {children}
      <h2>blog footer</h2>
    </>
  );
}
