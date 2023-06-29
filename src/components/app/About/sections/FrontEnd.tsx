"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimationOnScroll } from "react-animation-on-scroll";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
export const FrontEnd = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      document.querySelector(".images"),
      {
        translateX: 0,
      },
      {
        translateX: -2000,
        scrollTrigger: {
          trigger: document.querySelector(".section-0"),
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center py-32 bg-gray-900  overflow-hidden"
      id="section-0"
    >
      <div className="container w-full md:max-w-3xl px-4 md:px-0  mx-auto text-center text-white">
        <h2 className="font-semibold">WHY MOST OF THE TIME FRONTEND</h2>
        <p className="text-xl font-mono text-white font-light mb-10">
          From childhood I love painting and designing things. So I love to see
          my designs and UI implementation online.
        </p>
        <div className="relative flex mb-20 images">
          <Image
            src="https://cdn.dribbble.com/userupload/5343798/file/original-9c788906ffc1224d994a5cc579857c0f.png?compress=1&resize=3810x2540"
            alt="dileepa"
            width={600}
            height={500}
            className="mx-auto mt-24 me"
          />
          <Image
            src="https://cdn.dribbble.com/users/2800664/screenshots/18429522/media/8f403914f7818ae1eba8c1d02499b67c.png"
            alt="dileepa"
            width={600}
            height={500}
            className="mx-auto mt-24 me"
          />
          <Image
            src="https://cdn.dribbble.com/users/2800664/screenshots/15780723/media/c42ae38f93778541ecaaf0a468b7db2b.png"
            alt="dileepa"
            width={600}
            height={500}
            className="mx-auto mt-24 me"
          />
          <Image
            src="https://cdn.dribbble.com/users/2800664/screenshots/18429534/media/d6b44ce884c15e957a1e506b25517273.png"
            alt="dileepa"
            width={600}
            height={500}
            className="mx-auto mt-24 me"
          />
          <Image
            src="https://cdn.dribbble.com/userupload/8178037/file/original-043fadb596cb55d789c7288c7dc482bc.png?compress=1&resize=1728x1117"
            alt="dileepa"
            width={600}
            height={500}
            className="mx-auto mt-24 me"
          />
          {/* </div> */}
        </div>
        <AnimationOnScroll animateIn="animate__bounceIn" delay={100}>
          <Link
            href={"https://dribbble.com/dilipchandima"}
            target="_blank"
            className="btn-light text-gray-900"
          >
            See my dribbble
          </Link>
        </AnimationOnScroll>
      </div>
    </section>
  );
};
