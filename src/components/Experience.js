import { experience } from "../data/experience";
import ExperienceItem from "./ExperienceItem";
import Header from "./Header";

const Experience = () => {
  return (
    <div className="container mx-auto">
      <Header title="EXPERIENCE" />
      {experience &&
        experience.map((ex, index) => (
          <ExperienceItem className="pb-10" experience={ex} key={index} />
        ))}
    </div>
  );
};

export default Experience;
