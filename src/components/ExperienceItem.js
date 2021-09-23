import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExperienceItem = ({ experience }) => {
  return (
    <div className="font-body py-6 group hover:bg-primary dark:hover:bg-alternate dark:hover:text-primary hover:text-alternate rounded-lg transition hover:shadow px-2">
      <div>
        <span className="font-bold">{experience.jobTitle}</span> -
        {experience.company}
      </div>
      <div>{`${experience.from} - ${experience.to}`}</div>
      <p>{experience.responsibilities}</p>
      <p className="mt-2">
        <FontAwesomeIcon className="mr-2" icon={faMapMarkerAlt} />
        {experience.location}
      </p>
      {experience.technologies && (
        <div className="pt-4">
          {experience.technologies.map((tech, index) => (
            <span
              className="mr-2 rounded-lg group-hover:bg-alternate dark:group-hover:bg-primary dark:bg-alternate py-1 bg-primary px-2"
              style={{ color: tech.color }}
            >
              {tech.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceItem;
