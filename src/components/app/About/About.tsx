import { Awards } from "./sections/Awards";
import { Experience } from "./sections/Experience";
import { FrontEnd } from "./sections/FrontEnd";
import { Hi } from "./sections/Hi";
import { Trainings } from "./sections/Trainings";

export const About = () => {
  return (
    <main>
      <Hi />
      <FrontEnd />
      <Experience />
      <Awards />
      <Trainings />
    </main>
  );
};
