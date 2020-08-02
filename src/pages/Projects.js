import React from 'react';
import { Link } from 'react-router-dom';

import underconstruction from '../images/underconstruction.png';

const Projects = () => {
  return (
    <div className='main'>
      <div className='under-construction'>
        <img src={underconstruction} alt='under construction' />
        <h2>This page is under construction!</h2>
        <Link to='/' className='btn outline'>
          Let's go back home
        </Link>
      </div>
    </div>
  );
};

export default Projects;
