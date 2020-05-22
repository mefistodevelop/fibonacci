import React from 'react';
import './Home.scss';
import { Form } from './Form/Form';

const Home = () => (
  <div className="home">
    <div className="home__container">
      <div className="home__form">
        <Form />
      </div>
      <section className="answer" />
    </div>
  </div>
);

export { Home };
