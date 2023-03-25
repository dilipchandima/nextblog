import Link from "next/link";
import { apps } from "../../Contact/Contact";

export const Contact = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-60 bg-white"
      id="section-0"
    >
      <div className="container w-full md:max-w-3xl px-4 md:px-0  mx-auto text-center">
        <h2 className="vibrate-1">LET’S MAKE YOUR IDEA A REALITY</h2>
        <p className="text-2xl mx-auto text-black font-mono font-light mb-16">
          dilipchandima@gmail.com
        </p>
        <div className="flex items-center justify-center gap-6">
          {apps.map(({ link, icon }, index) => (
            <Link href={link} target={"_blank"} key={index}>
              <div className="text-2xl  hover:scale-150 duration-150 text-gray-900 hover:text-gray-500 py-5 flex items-center justify-center">
                {icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
