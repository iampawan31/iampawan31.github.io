import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExpertiseItem = ({ icon }) => {
  return (
    <div className="p-4 inline bg-dark text-primary dark:text-primary hover:bg-primary hover:text-alternate dark:text-alternate dark:hover:bg-alternate dark:hover:text-primary transition-all duration-200 rounded">
      <FontAwesomeIcon size="4x" icon={icon} />
    </div>
  );
};

export default ExpertiseItem;
