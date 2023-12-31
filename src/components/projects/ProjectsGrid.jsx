import { useContext } from "react";
import ProjectSingle from "./ProjectSingle";
import { ProjectsContext } from "../../context/ProjectsContext";

const ProjectsGrid = () => {
  const { projects, searchProject, searchProjectsByTitle, selectProject, selectProjectsByCategory } = useContext(ProjectsContext);

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10 " id="projects">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">Projects portfolio</p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 sm:gap-10">
        {selectProject
          ? selectProjectsByCategory.map((project) => (
              <ProjectSingle
                title={project.title}
                image={project.img}
                desc={project.desc}
                techStack={project.techStack}
                key={project.id}
                url={project.url}
              />
            ))
          : searchProject
          ? searchProjectsByTitle.map((project) => (
              <ProjectSingle
                title={project.title}
                image={project.img}
                desc={project.desc}
                techStack={project.techStack}
                key={project.id}
                url={project.url}
              />
            ))
          : projects.map((project) => (
              <ProjectSingle
                title={project.title}
                image={project.img}
                desc={project.desc}
                techStack={project.techStack}
                key={project.id}
                url={project.url}
              />
            ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
