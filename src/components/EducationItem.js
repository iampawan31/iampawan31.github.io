import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EducationItem = ({ education }) => {
  return (
    <div className="font-body py-6 group hover:bg-primary dark:hover:bg-alternate dark:hover:text-primary hover:text-alternate rounded-lg transition hover:shadow px-2">
      <div>
        <span className="font-bold">{education.institutionName}</span>
      </div>
      <div>{`${education.attendedFrom} - ${education.attendedTo}`}</div>
      <h1 className=" font-bold mb-2">{education.degree}</h1>
      <p className="mt-2">
        <FontAwesomeIcon className="mr-2" icon={faMapMarkerAlt} />
        {education.location}
      </p>
    </div>
  );
};

export default EducationItem;
