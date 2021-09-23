import { projects } from "../data/projects";
import ProjectItem from "./ProjectItem";
import Header from "./Header";

const Projects = () => {
  return (
    <div className="container mx-auto">
      <Header title="PROJECTS" />
      {projects &&
        projects.map((ex, index) => (
          <ProjectItem className="pb-10" project={ex} key={index} />
        ))}
    </div>
  );
};

export default Projects;
