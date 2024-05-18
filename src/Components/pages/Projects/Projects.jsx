import { useEffect, useState } from 'react';
import ProjectBox from '../../common/ProjectsBox/ProjectBox';
import '../Projects/Projects.css';
import projectsData from '../../../data/Projects.json'; 

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div>
      <h2 className="projectHeading">
        My <strong>Projects</strong>
      </h2>
      <div className="project">
        {projects.map((project) => (
          <ProjectBox
            key={project.id}
            projectPhoto={project.photo}
            projectName={project.name}
            projectDesc={project.description}
            projectGithub={project.github}
            projectWebsite={project.website}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
