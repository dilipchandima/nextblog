import Link from "next/link";

export const FrontEnd = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-32 bg-gray-900"
      id="section-0"
    >
      <div className="container w-fullmd:max-w-3xl px-4 md:px-0  mx-auto text-center text-white">
        <h2 className="font-semibold">WHY MOST OF THE TIME FRONTEND</h2>
        <p className="text-xl font-mono text-white font-light mb-16">
          From childhood I love painting and designing things. So I love to see
          my designs and UI implementation online.
        </p>
        <Link
          href={"https://dribbble.com/dilipchandima"}
          target="_blank"
          className="btn-light text-gray-900"
        >
          See my dribbble
        </Link>
      </div>
    </section>
  );
};
