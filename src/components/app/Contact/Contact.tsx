import Link from "next/link";

import { BsDribbble, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export const apps = [
  { link: "https://www.linkedin.com/in/dilipchandima/", icon: <BsLinkedin /> },
  { link: "https://github.com/dilipchandima", icon: <BsGithub /> },
  { link: "https://dribbble.com/dilipchandima", icon: <BsDribbble /> },
  { link: "https://www.instagram.com/dilipchandima/", icon: <BsInstagram /> },
];

export const Contact = () => {
  return (
    <main>
      <section
        className="flex flex-col items-center justify-center h-screen bg-white"
        id="section-0"
      >
        <h1>Say Hi!</h1>
        <div className="container w-fullmd:max-w-3xl px-4 md:px-0  mx-auto text-center">
          <h2 className="font-thin">LET’S MAKE YOUR IDEA A REALITY</h2>
          <Link
            target={"_blank"}
            href={"mailto:dilipchandima@gmail.com"}
            className="block text-2xl mx-auto text-black font-mono font-light mb-16"
          >
            dilipchandima@gmail.com
          </Link>
          <div className="flex items-center justify-center gap-6">
            {apps.map(({ link, icon }, index) => (
              <Link href={link} target={"_blank"} key={index}>
                <div className="text-2xl text-gray-900 hover:text-gray-500 py-5 flex items-center justify-center">
                  {icon}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
