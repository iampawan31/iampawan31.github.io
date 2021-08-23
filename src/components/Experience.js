import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { experience } from "../data/experience";

const Experience = () => {
  return (
    <div className="container mx-auto">
      <div className="font-heading font-bold text-6xl text-primary pb-8">
        experience
      </div>
      {experience &&
        experience.map((ex, index) => {
          return (
            <div key={index} className="grid grid-cols-3 gap-2 py-6">
              <div>
                <h1 className="font-heading text-primary text-md font-bold mb-2">
                  {ex.company}
                </h1>
                <p className="font-heading text-primary">{`${ex.from} - ${ex.to}`}</p>
              </div>
              <div className="col-span-2">
                <h1 className="font-heading text-primary font-bold mb-2">
                  {ex.jobTitle}
                </h1>
                <p className="font-heading text-primary">
                  {ex.responsibilities}
                </p>
                <p className="text-primary mt-2">
                  <FontAwesomeIcon
                    className="text-primary mr-2"
                    icon={faMapMarkerAlt}
                  />
                  {ex.location}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Experience;
