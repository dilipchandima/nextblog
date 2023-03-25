import Image from "next/image";

export const Hero = () => {
  return (
    <section
      className="pt-20 h-[120vh] flex flex-col items-center justify-center"
      id="section-0"
    >
      <div className="container mx-auto text-center">
        <p className="font-mono text-lg mb-3">Hi, My name is</p>
        <h1>
          Dileepa
          <br />
          Chandima
        </h1>
        <p className="font-mono text-xl mt-5 w-full md:max-w-3xl  mx-auto">
          Software developer based in Sri Lanka, I’m passionate about Mobile and
          Web development & love to design things
        </p>
        <Image
          src="/me.png"
          alt="dileepa"
          width={400}
          height={500}
          className="mx-auto mt-24"
        />
      </div>
    </section>
  );
};
