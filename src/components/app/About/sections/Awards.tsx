const experience = [
  {
    name: "Imagine Cup 2016",
    designation: "Game category 1st Runners Up, Sri Lanka (April2016)",
    dates: "Microsoft, Sri Lanka",
  },
  {
    name: "Google I/O 2016 - Virtual Hackathon 2016",
    designation: "2nd Runner up",
    dates: "Google I/O extended Sri Lanka - Dialog, Sri Lanka",
  },
];

export const Awards = () => {
  return (
    <section className="bg-gray-100">
      <div className="container w-full md:max-w-3xl  mx-auto py-40">
        <h3>Honers & Awards</h3>
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
