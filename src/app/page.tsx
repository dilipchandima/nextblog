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
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="overflow-y-hidden h-screen">
      <div className="absolute h-20 w-full flex items-center px-20 gap-10">
        <button onClick={() => handleClickScroll("section-0")}>next0</button>
        <button onClick={() => handleClickScroll("section-1")}>next1</button>
        <button onClick={() => handleClickScroll("section-2")}>next2</button>
        <button onClick={() => handleClickScroll("section-3")}>next3</button>
        <button onClick={() => handleClickScroll("section-4")}>next4</button>
        <button onClick={() => handleClickScroll("section-5")}>next5</button>
        <button onClick={() => handleClickScroll("section-6")}>next6</button>
      </div>
      <section
        className="pt-20  text-[150px] leading-tight font-bold  w-full h-full  overflow-x-auto bg-red-700"
        id="section-0"
      >
        I’m Dileepa Chandima. I build things for web and mobile
      </section>
      <section
        className="pt-20 w-full h-full overflow-x-auto scroll bg-purple-700"
        id="section-1"
      >
        I’m Dileepa Chandima. I build things for web and mobile
      </section>

      <section
        className="pt-20 w-full h-full overflow-x-auto bg-green-700"
        id="section-2"
      >
        I’m Dileepa Chandima. I build things for web and mobile
      </section>

      <section
        className="pt-20 w-full h-full overflow-x-auto bg-sky-600"
        id="section-3"
      >
        I’m Dileepa Chandima. I build things for web and mobile
      </section>

      <section
        className="pt-20 w-full h-full overflow-x-auto bg-orange-600"
        id="section-4"
      >
        I’m Dileepa Chandima. I build things for web and mobile
      </section>

      <section
        className="pt-20 w-full h-full overflow-x-auto bg-yellow-600"
        id="section-5"
      >
        I’m Dileepa Chandima. I build things for web and mobile
      </section>

      <section
        className="pt-20 w-full h-full overflow-x-auto bg-cyan-600"
        id="section-6"
      >
        I’m Dileepa Chandima. I build things for web and mobile
      </section>
    </main>
  );
}
