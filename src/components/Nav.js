import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
      <NavLink to='/' exact activeClassName='active'>
        Home
      </NavLink>
      <NavLink to='/new' exact activeClassName='active'>
        New Tweet
      </NavLink>
    </nav>
  );
};
export default Nav;
