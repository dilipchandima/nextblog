import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "HOME", link: "/" },
  { name: "ABOUT ME", link: "/about" },
  { name: "PROJECTS", link: "/projects" },
  { name: "BLOG", link: "/blog" },
];

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center container mx-auto">
      <Image
        alt="logo"
        className="mb-10"
        height={100}
        src="/logo.png"
        width={100}
      />
      <p className="text-xl text-purple-500">Hi! My name is</p>
      <h1 className="text-9xl font-bold purple-shadow">
        Dileepa
        <br />
        Chandima
      </h1>
      <p className="text-4xl text-purple-500 font-extralight mt-5">
        I build things for web and mobile
      </p>
      <div className="flex">
        {navLinks.map((link) => (
          <Link href={`${link.link}`} key={link.name}>
            <div className="pr-5 mr-5 py-5 my-5 hover:text-purple-500">
              {link.name}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
