import React from 'react';
import SocialLists from '../components/SocialsList';

const Footer = () => {
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
      icon: <i className='fab fa-facebook' />,
      href: 'https://web.facebook.com/siralpha',
      name: 'facebook',
    },
    {
      icon: <i className='fab fa-instagram-square' />,
      href: 'https://www.instagram.com/duniandewon',
      name: 'instagram',
    },
  ];

  return (
    <footer className='footer'>
      <SocialLists socialLinks={socialLinks} />
      <div className='foot-note'>
        mohammad baragbah <span>&copy; 2020</span>
      </div>
    </footer>
  );
};

export default Footer;
