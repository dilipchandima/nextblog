export const Hi = () => {
  return (
    <section>
      <div className="container w-full md:max-w-3xl  mx-auto py-40">
        <h1>Hello!</h1>
        <p className="font-mono text-lg font-thin mb-10">
          My name is Dileepa Chandima, I enjoy creating mobile and web
          application. My interesting in software development starts when I was
          in School, I created a school bell ringing system in 2009 using
          VisualStudio 6.0
        </p>
        <p className="font-mono text-lg font-thin mb-10">
          I graduated as <span className="font-semibold">a BSc Engineer</span>{" "}
          from Faculty of Engineering, University of Peradeniya, Sri Lanka in
          2019.
        </p>
        <p className="font-mono text-lg font-thin mb-10">
          Fast-forward to today, and I’ve had the privilege of working at{" "}
          <span className="font-semibold">
            GE Transportation, a UK start up, Singapore FinTech company, and
            MadPaws Australia
          </span>
          . My main focus these days is building accessible, inclusive products
          and digital experiences using latest technologies.
        </p>
        <p className="font-mono text-lg font-thin mb-10">
          I also working on a pet project named{" "}
          <a href="/" className="underline italic font-semibold">
            ScrumTable
          </a>{" "}
          for agile teams to do planning poker online with their remote team
          members.
        </p>

        <div className="text-xl mt-20 font-normal">
          Here are a few technologies I’ve been working with recently:
        </div>
        <div className="flex flex-wrap gap-2 mt-10">
          {[
            "JavaScript",
            "TypeScript",
            "NextJS",
            "ReactNative",
            "React",
            "Firebase",
            "Redux",
            "Tailwind CSS",
            "VS AppCenter",
            "Jest",
            "StoryBook",
            "Git",
            "redux-saga",
          ].map((item) => (
            <div
              key={item}
              className="px-4 py-1 text-sm border-[1px] rounded-xl border-gray-700 font-mono"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
