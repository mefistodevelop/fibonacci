import React from 'react';
import './Header.scss';
import { Navigation } from './Navigation/Navigation';

const Header = () => (
  <header className="header">
    <div className="header__container">
      <div className="header__logo">Fibonacci</div>
      <Navigation />
    </div>
  </header>
);

export { Header };
