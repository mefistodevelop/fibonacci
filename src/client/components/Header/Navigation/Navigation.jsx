import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => (
  <nav className="navigation">
    <ul className="navigation__list">
      <li className="navigation__item">
        <NavLink className="navigation__link" exact to="/">
          Home
        </NavLink>
      </li>
      <li className="navigation__item">
        <NavLink className="navigation__link" to="/history">
          History
        </NavLink>
      </li>
    </ul>
  </nav>
);

export { Navigation };
