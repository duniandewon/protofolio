import React from 'react';

const SocialLists = ({ socialLinks }) => {
  return (
    <ul className='socials-list'>
      {socialLinks.map((socialLink, index) => (
        <li key={index} className='socials-list__item'>
          <a href={socialLink.href} target='__blank' title={socialLink.name}>
            {socialLink.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLists;
