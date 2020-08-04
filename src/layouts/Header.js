import React from 'react';
import { Link } from 'react-router-dom';

import SocialLists from '../components/SocialsList';

const Header = () => {
  const socialLinks = [
    {
      icon: <i className='fab fa-github' />,
      href: 'https://www.github.com/duniandewon',
      name: 'github',
    },
    {
      icon: <i className='fab fa-linkedin' />,
      href: 'https://www.linkedin.com/in/mohammad-baragbah-ba9b79145/',
      name: 'linkedin',
    },
    {
      icon: <i className='fas fa-envelope' />,
      href: 'mailto:duniandewon@gmail.com',
      name: 'send email',
    },
    {
      icon: <i className='fas fa-cloud-download-alt' />,
      href:
        'https://drive.google.com/file/d/1XPLAqbyUAbyuGvwB-sohRGZseEGOxcFW/view?usp=sharing',
      name: 'download resume',
    },
  ];

  return (
    <header className='header'>
      <h2>HI, I'M MOHAMMAD BARAGBAH</h2>
      <h5>
        I'M A FULL-STACK WEB DEVELOPER WITH PRIMARY FOCUS ON NODE AND REACT
      </h5>
      <SocialLists socialLinks={socialLinks} />
      <Link to='/projects' className='btn outline'>
        view projects
      </Link>
    </header>
  );
};

export default Header;
