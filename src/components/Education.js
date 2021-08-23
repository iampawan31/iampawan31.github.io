import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { education } from "../data/education";

const Education = () => {
  return (
    <div className="container mx-auto">
      <div className="font-heading font-bold text-6xl text-primary pb-8">
        education
      </div>
      {education &&
        education.map((ed, index) => {
          return (
            <div key={index} className="grid grid-cols-3 gap-2 py-6">
              <div>
                <h1 className="font-heading text-primary text-md font-bold mb-2">
                  {ed.institutionName}
                </h1>
                <p className="font-heading text-primary">{`${ed.attendedFrom} - ${ed.attendedTo}`}</p>
              </div>
              <div className="col-span-2">
                <h1 className="font-heading text-primary font-bold mb-2">
                  {ed.degree}
                </h1>
                <p className="font-heading text-primary">
                  Completing projects for clients based out of India and US.
                </p>
                <p className="text-primary mt-2">
                  <FontAwesomeIcon
                    className="text-primary mr-2"
                    icon={faMapMarkerAlt}
                  />
                  {ed.location}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Education;
