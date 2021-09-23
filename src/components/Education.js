import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { education } from "../data/education";

const Education = () => {
  return (
    <div className="container mx-auto">
      <div className="font-primary font-bold text-6xl text-primary dark:text-alternate pb-8">
        EDUCATION
      </div>
      {education &&
        education.map((ed, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-3 gap-2 py-6 font-body hover:bg-primary hover:text-alternate dark:hover:bg-alternate dark:hover:text-primary rounded-lg transition hover:shadow px-2"
            >
              <div>
                <h1 className="text-md font-bold mb-2">{ed.institutionName}</h1>
                <p>{`${ed.attendedFrom} - ${ed.attendedTo}`}</p>
              </div>
              <div className="col-span-2">
                <h1 className=" font-bold mb-2">{ed.degree}</h1>
                <p>
                  Completing projects for clients based out of India and US.
                </p>
                <p className=" mt-2">
                  <FontAwesomeIcon className=" mr-2" icon={faMapMarkerAlt} />
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
