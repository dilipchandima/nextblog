import Image from "next/image";

export const Hero = () => {
  return (
    <section className="py-60" id="section-0">
      <div className="container mx-auto text-center">
        <p className="font-mono text-lg mb-3">Hi, My name is</p>
        <h1>
          Dileepa
          <br />
          Chandima
        </h1>
        <p className="font-mono text-xl mt-5 w-full md:max-w-3xl px-4 md:px-0  mx-auto">
          Software developer based in Sri Lanka, passionate about Mobile and Web
          development & love to design things
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
