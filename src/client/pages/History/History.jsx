import React from 'react';
import './History.scss';
import { HistoryTable } from './Table';

const History = () => (
  <div className="history">
    <div className="history__container">
      <HistoryTable />
    </div>
  </div>
);

export { History };
