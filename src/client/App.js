import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.scss';

const App = () => (
  <div className="app">
    <header className="app__header">
      <div className="app__header-container">
        <div className="app__logo">Fibonacci</div>
        <nav className="app__navigation">
          <ul className="app__navigation-list">
            <li className="app__navigation-item">
              <NavLink className="app__navigation-link" to="/">Home</NavLink>
            </li>
            <li className="app__navigation-item">
              <NavLink className="app__navigation-link" to="/history">History</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main className="content">
      <Route exact path="/" render={() => <h1>homa</h1>} />
      <Route path="/history" render={() => <h1>history</h1>} />
    </main>
  </div>
);

export { App };
