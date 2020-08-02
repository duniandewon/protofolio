import React, { useContext } from 'react';

import { projectsContext } from '../../context/projects/ProjectState';
import { uiContext } from '../../context/UI/UiState';

import Modal from '../../layouts/Modal';

const ProjectDetails = () => {
  const { project } = useContext(projectsContext);
  const { toggleUI } = useContext(uiContext);

  return (
    project && (
      <Modal>
        <div className='project-details'>
          <div
            className='project-details__close'
            onClick={() => toggleUI('modal')}
          >
            <i className='fas fa-times' />
          </div>
          <div className='project-details__image'>
            <img src={project.image} alt={project.name} />
          </div>
          <div className='project-details__body'>
            <h3 className='project-details__title--sub'>Project</h3>
            <h2 className='project-details__title'>{project.name}</h2>
            <ul className='project-details__techs'>
              {project.tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
            <h3 className='project-details__title--sub'>About</h3>
            <p className='project-details__desc'>{project.desc}</p>
            <div className='project-details__action'>
              <a
                href={project.git}
                target='__blank'
                className='btn primary icon'
              >
                code <i className='fas fa-code' />
              </a>
              <a
                href={project.demo}
                target='__blank'
                className='btn primary icon'
              >
                demo <i className='fas fa-eye' />
              </a>
            </div>
          </div>
        </div>
      </Modal>
    )
  );
};

export default ProjectDetails;
