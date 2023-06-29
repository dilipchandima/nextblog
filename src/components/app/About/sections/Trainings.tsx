const experience = [
  {
    name: "Agile Scrum",
    designation:
      "Completed a two-day training course on the fundamentals of Agile and Scrum",
    dates: "GoodAgile India Pvt Ltd",
  },
  {
    name: "Graph Developer - Associate",
    designation: "Foundational knowledge of GraphQL and the Apollo tool suite",
    dates: "Apollo Graphql",
  },
];

export const Trainings = () => {
  return (
    <section>
      <div className="container w-full md:max-w-3xl px-4 md:px-0  mx-auto py-40">
        <h3>Trainings</h3>
        {experience.map(({ name, designation, dates }) => (
          <div key={name}>
            <h4>{name}</h4>
            <h5>{designation}</h5>
            <div className="text-sm mt-5 font-normal text-gray-300">
              {dates}
            </div>
            <hr className="my-16" />
          </div>
        ))}
      </div>
    </section>
  );
};
