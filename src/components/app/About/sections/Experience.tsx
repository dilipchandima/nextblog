const experience = [
  {
    name: "Mad Paws, Australia, Sydney",
    designation: "Full-stack Software Engineer (Remote)",
    dates: "May 2022 - NOW",
    work: [
      "Working as a Frontend developer Next.JS and development of common profile view, resulting in reduce development time in the future initiatives for Sitter and Owner Profiles",
      "Contributing to the design system by implementing reusable components and standardizing design patterns, resulting in increased consistency across the product",
      "Maintained and improved the legacy booking request form to enhance the user experience by adding new features",
    ],
  },
  {
    name: "Singlife - Rhino Partners Pte Ltd",
    designation: "Senior Software Engineer / Associate Technical Lead",
    dates: "June 2019 - April 2022",
    work: [
      "Initiated and Architected the ReactNative project worked as the development owner of the Singlife Account and VISA card transactions to make better user experience",
      "Integrated AppCenter CI/CD to streamline release processes and did successful app launches on app stores",
      "Integrated SingPASS SSO to auto fill the user data and it increases the user registration",
      "Conducted interviews with ReactNative developers to assess their technical skills and suitability for company projects",
    ],
  },
  {
    name: "RocketPhone (VoiceIQ)",
    designation: "Software Engineer",
    dates: "May 2018 - May 2019",
    work: [
      "Worked as a mobile and web developer and integrated on CodePush CI/CD pipeline for ReactNative to streamline release processes",
      "Contributed to the design system for ReactNative and React to increased consistency across the product",
    ],
  },
  {
    name: "General Electric (Transportation)",
    designation: "Software Engineer",
    dates: "November 2016 - May 2018",
    work: [
      "Worked as a Ionic mobile and angularJS web developer and release the mCrew application before deadline and recognise as a fast contributed member",
      "Development owner of the windows application, converted Ionic app to a windows application using electron to work in legacy device and reduce cost for new devices",
    ],
  },
  {
    name: "General Electric (Transportation)",
    designation: "Software Engineer",
    dates: "November 2016 - May 2018",
    work: [
      "Worked on a in-house web application to track development time and we reduce cost for paid application by using our own tool in company",
    ],
  },
];

export const Experience = () => {
  return (
    <section>
      <div className="container w-full md:max-w-3xl px-4 md:px-0  mx-auto py-40">
        <h3>Experience</h3>
        {experience.map(({ name, designation, work, dates }) => (
          <div key={name}>
            <h4>{name}</h4>
            <h5>{designation}</h5>
            <ul className="list-disc ml-6">
              {work.map((item, index) => (
                <li key={`${index}_${name}`}>{item}</li>
              ))}
            </ul>
            <div className="text-sm mt-10 font-normal text-gray-300">
              {dates}
            </div>
            <hr className="my-16" />
          </div>
        ))}
      </div>
    </section>
  );
};
