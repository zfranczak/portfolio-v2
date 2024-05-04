import '../styles/Projects.css';
import ProjectCard from './ProjectCard';
import { projectData } from './projectData.js';
import { TbBrandOpenai } from 'react-icons/tb';

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <div className='projects-container'>
        <h1 className='section-title'>PROJECTS</h1>

        <div className='project-container'>
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              liveSite={project.liveSite}
              github={project.github}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
