"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const scrollContainer = document.querySelector("main");

    scrollContainer?.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    });
  }, []);
  const handleClickScroll = (item) => {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="overflow-y-hidden h-screen">
      <div className="absolute h-20 w-full flex items-center px-20 gap-10 text-white">
        <button onClick={() => handleClickScroll("section-0")}>next0</button>
        <button onClick={() => handleClickScroll("section-1")}>next1</button>
        <button onClick={() => handleClickScroll("section-2")}>next2</button>
        <button onClick={() => handleClickScroll("section-3")}>next3</button>
        <button onClick={() => handleClickScroll("section-4")}>next4</button>
      </div>
      <section
        className="pt-20  text-[150px] leading-tight font-bold  w-full h-full flex items-center justify-center  overflow-x-auto bg-brandBlue"
        id="section-0"
      >
        <h1 className="tracking-in-contract-bck">HERO</h1>
      </section>
      <section
        className="pt-20 w-full h-full overflow-x-auto scroll bg-brandGreen"
        id="section-1"
      >
        ABOUT ME
      </section>

      <section
        className="pt-20 w-full h-full overflow-x-auto bg-brandStone"
        id="section-2"
      >
        WORK
      </section>

      <section
        className="pt-20 w-full h-full overflow-x-auto bg-brandBrown"
        id="section-3"
      >
        PROJECTS
      </section>

      <section
        className="pt-20 w-full h-full overflow-x-auto bg-brandMerun"
        id="section-4"
      >
        CONTACT ME
      </section>
    </main>
  );
}
