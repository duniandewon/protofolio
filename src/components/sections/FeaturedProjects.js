import React, { useContext } from 'react';

import { projectsContext } from '../../context/projects/ProjectState';
import { uiContext } from '../../context/UI/UiState';

import ProjectItem from '../projects/ProjectItem';

const FeaturedProjects = () => {
  const { projects, setCurrent } = useContext(projectsContext);
  const { toggleUI } = useContext(uiContext);

  const featured = projects && projects.filter((project) => project.featured);

  return (
    <section className='section'>
      <h2>My favorite projects</h2>
      <div className='projects-list'>
        {projects &&
          featured.map((project, index) => (
            <ProjectItem
              project={project}
              setCurrent={setCurrent}
              toggleUI={toggleUI}
              index={index}
              key={project.id}
            />
          ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
