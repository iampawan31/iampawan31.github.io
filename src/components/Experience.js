import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { experience } from "../data/experience";

const Experience = () => {
  return (
    <div className="container mx-auto">
      <div className="font-primary font-bold text-6xl pb-8">EXPERIENCE</div>
      {experience &&
        experience.map((ex, index) => {
          return (
            <div
              key={index}
              className="font-body grid grid-cols-3 gap-2 py-6 hover:bg-primary dark:hover:bg-alternate dark:hover:text-primary hover:text-alternate rounded-lg transition hover:shadow px-2"
            >
              <div>
                <h1 className="text-md font-bold mb-2">{ex.company}</h1>
                <p>{`${ex.from} - ${ex.to}`}</p>
              </div>
              <div className="col-span-2">
                <h1 className="font-bold mb-2">{ex.jobTitle}</h1>
                <p>{ex.responsibilities}</p>
                <p className="mt-2">
                  <FontAwesomeIcon className="mr-2" icon={faMapMarkerAlt} />
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
