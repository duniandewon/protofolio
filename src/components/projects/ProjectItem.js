import React from 'react';

const ProjectItem = ({ project, setCurrent, toggleUI }) => {
  const onClick = () => {
    setCurrent(project);
    toggleUI('modal');
  };

  return (
    <div className='project' onClick={onClick}>
      <img
        src={
          project.image
            ? project.image
            : `https://via.placeholder.com/300x200.png/e4e4e4/000?text=${project.name.toUpperCase()}`
        }
        alt={project.name}
      />
      <div className='project__detail'>
        <h2 className='project__title'>{project.name}</h2>
        <ul className='project__techs'>
          {project.tech.slice(0, 3).map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
        <button className='btn outline'>view details</button>
      </div>
    </div>
  );
};

export default ProjectItem;
