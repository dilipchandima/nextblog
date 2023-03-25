const tech = [
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
];

export const Hi = () => {
  return (
    <section>
      <div className="container w-full md:max-w-3xl px-4 md:px-0  mx-auto py-40">
        <h1>Hello!</h1>
        <p className="font-mono text-lg font-thin mb-10">
          My name is Dileepa Chandima, and I am a professional software
          developer with a passion for creating mobile and web applications. My
          interest in software development started in 2009 when I created a
          school bell ringing system using Visual Studio 6.0 while still in
          school.
        </p>
        <p className="font-mono text-lg font-thin mb-10">
          In 2016, I graduated from the{" "}
          <span className="font-semibold">
            Faculty of Engineering at the University of Peradeniya, Sri Lanka,
            with a BSc in Engineering
          </span>
          . Since then, I have had the privilege of working with various
          companies, including{" "}
          <span className="font-semibold">
            GE Transportation, a UK start-up, Singapore FinTech Company, and
            MadPaws Australia
          </span>
          .
        </p>
        <p className="font-mono text-lg font-thin mb-10">
          My primary focus now is building accessible and inclusive products and
          digital experiences using the latest technologies.
        </p>
        <p className="font-mono text-lg font-thin mb-10">
          I am also currently working on a pet project called{" "}
          <a href="/" className="underline italic font-semibold">
            ScrumTable
          </a>
          , which is an online planning poker tool for agile teams to use with
          their remote team members. With my expertise and experience in
          software development, I am committed to creating high-quality
          applications that meet the needs of users and businesses alike.
        </p>

        <div className="text-xl mt-20 font-normal">
          Here are a few technologies I’ve been working with recently:
        </div>
        <div className="flex flex-wrap gap-2 mt-10">
          {tech.map((item) => (
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
