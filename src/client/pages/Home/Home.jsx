import React, { useState } from 'react';
import './Home.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Home = () => {
  const [number, setNumber] = useState('');

  const onFieldChange = (e) => {
    setNumber(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (number && number.trim()) {
      console.log(number);
      setNumber('');
    }
  };

  return (
    <div className="home">
      <div className="home__container">
        <form className="form" onSubmit={(e) => onFormSubmit(e)}>
          <TextField
            type="number"
            label="Enter number"
            onChange={(e) => onFieldChange(e)}
            value={number}
          />
          <Button variant="outlined" color="primary" type="submit">
            Get Fibonacci number
          </Button>
        </form>
        <section className="responses" />
      </div>
    </div>
  );
};

export { Home };
