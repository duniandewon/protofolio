import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { uiContext } from '../../context/UI/UiState';

const MobileNav = () => {
  const { mobileNav, toggleUI } = useContext(uiContext);
  return (
    <div className={`mobile-nav ${mobileNav ? 'show' : ''}`}>
      <NavLink
        className='nav__link'
        to='/'
        onClick={() => toggleUI('mobile-nav')}
      >
        Home
      </NavLink>
      <NavLink
        className='nav__link'
        to='/projects'
        onClick={() => toggleUI('mobile-nav')}
      >
        projects
      </NavLink>
    </div>
  );
};

export default MobileNav;
