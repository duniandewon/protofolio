import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { uiContext } from '../../context/UI/UiState';

const MainNav = () => {
  const { toggleUI } = useContext(uiContext);

  return (
    <nav className='navbar'>
      <ul className='nav'>
        <li className='nav__item'>
          <Link to='/' className='nav__brand'>
            BARAGBAH
          </Link>
        </li>
      </ul>
      <button className='nav__toggler' onClick={() => toggleUI('mobile-nav')}>
        <i className='fas fa-bars' />
      </button>
      <ul className='nav hide-on-mobile'>
        <li className='nav__item'>
          <NavLink to='/' className='nav__link'>
            home
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink to='/projects' className='nav__link'>
            projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
