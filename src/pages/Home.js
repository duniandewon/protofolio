import React, { Fragment, useContext, useEffect } from 'react';

import { projectsContext } from '../context/projects/ProjectState';

import Header from '../layouts/Header';

import FeaturedProjects from '../components/sections/FeaturedProjects';
import ProjectDetails from '../components/projects/ProjectDetails';
import ContactSectoin from '../components/sections/ContactSection';

const Home = () => {
  const { getProjects } = useContext(projectsContext);

  useEffect(() => {
    getProjects();

    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Header />
      <ProjectDetails />
      <div className='main'>
        <FeaturedProjects />
        <ContactSectoin />
      </div>
    </Fragment>
  );
};

export default Home;
