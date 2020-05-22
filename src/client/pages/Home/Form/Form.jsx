import React, { useState } from 'react';
import './Form.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

const Form = () => {
  const [number, setNumber] = useState('');
  const [modal, setModal] = useState(false);

  const onFieldChange = (e) => {
    setNumber(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (number && number.trim()) {
      setModal(true);
    }
  };

  const closeModal = () => {
    setModal(false);
    setNumber('');
  };

  return (
    <form className="form" onSubmit={(e) => onFormSubmit(e)}>
      <TextField
        type="number"
        label="Enter number"
        onChange={(e) => onFieldChange(e)}
        value={number}
      />
      <div className="form__button">
        <Button variant="outlined" color="primary" type="submit">
          Get Fibonacci number
        </Button>
      </div>
      <Modal open={modal} onClose={() => closeModal()}>
        <div className="modal">
          <h2 className="modal__title">Fibonacci number is</h2>
          <span className="modal__number">{number}</span>
        </div>
      </Modal>
    </form>
  );
};

export { Form };
