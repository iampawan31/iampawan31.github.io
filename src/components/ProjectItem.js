const ProjectItem = ({ project }) => {
  return (
    <div className="font-body py-6 flex rounded-lg transition dark:text-alternate text-primary mb-6 hover:shadow px-2">
      <div>
        <div className="font-bold text-2xl">{project.name}</div>
        <div className="py-4">{project.description}</div>
        <div>
          <a
            className="px-4 py-2 hover:bg-secondary bg-primary dark:bg-alternate dark:text-primary rounded text-alternate"
            href={project.githubLink}
          >
            Github Link
          </a>
          <a
            className="px-4 ml-2 hover:bg-secondary py-2 bg-primary dark:bg-alternate dark:text-primary rounded text-alternate"
            href={project.demoLink}
          >
            Demo
          </a>
        </div>
        <div></div>
        {project.technologies && (
          <div className="pt-4">
            {project.technologies.map((tech, index) => (
              <span
                className="mr-2 rounded-lg py-1 bg-primary dark:bg-alternate px-2"
                style={{ color: tech.color }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        )}
      </div>
      <div>
        <img className="rounded-lg shadow " src={project.imageLink} alt="" />
      </div>
    </div>
  );
};

export default ProjectItem;
