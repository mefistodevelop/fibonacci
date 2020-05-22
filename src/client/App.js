import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';

const App = () => (
  <div className="app">
    <Header />
    <main className="content">
      <Route exact path="/" render={() => <Home />} />
      <Route path="/history" render={() => <h1>history</h1>} />
    </main>
  </div>
);

export { App };
