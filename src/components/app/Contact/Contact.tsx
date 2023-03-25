import Link from "next/link";

export const Contact = () => {
  return (
    <main>
      <section
        className="flex flex-col items-center justify-center h-screen bg-white"
        id="section-0"
      >
        <h1>Say Hi!</h1>
        <div className="container w-full md:max-w-3xl  mx-auto text-center">
          <h2 className="font-thin">LET’S MAKE YOUR IDEA A REALITY</h2>
          <Link
            target={"_blank"}
            href={"mailto:dilipchandima@gmail.com"}
            className="block text-2xl mx-auto text-black font-mono font-light mb-16"
          >
            dilipchandima@gmail.com
          </Link>
          <div>linked</div>
        </div>
      </section>
    </main>
  );
};
