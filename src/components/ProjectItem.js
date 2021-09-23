const ProjectItem = ({ project }) => {
  return (
    <div className="font-body py-6 flex rounded-lg transition bg-primary dark:bg-alternate dark:text-primary text-alternate mb-6 shadow px-2">
      <div>
        <div className="font-bold text-2xl">{project.name}</div>
        <div>{project.description}</div>
        <div>
          <a href={project.githubLink}>Github Link</a>
        </div>
        <div>
          <a href={project.demoLink}>Demo</a>
        </div>
        {project.technologies && (
          <div className="pt-4">
            {project.technologies.map((tech, index) => (
              <span
                className="mr-2 rounded-lg py-1 bg-alternate dark:bg-primary px-2"
                style={{ color: tech.color }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="border rounded-lg border-primary">
        <img className="rounded-lg shadow " src={project.imageLink} alt="" />
      </div>
    </div>
  );
};

export default ProjectItem;
