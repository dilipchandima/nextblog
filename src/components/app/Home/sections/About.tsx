import Link from "next/link";

export const About = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-32 bg-gray-900"
      id="section-0"
    >
      <div className="container mx-auto text-center">
        <p className="text-2xl w-full md:max-w-3xl px-4 md:px-0 mx-auto text-white font-light mb-16">
          Currently working at Mad Paws, Australia as a Remote FullStack
          developer from Sri Lanka.
        </p>
        <Link className="btn-light" href={"/about"}>
          More about me
        </Link>
      </div>
    </section>
  );
};
