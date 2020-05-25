import React, { useEffect, useState } from 'react';
import './History.scss';
import { HistoryTable } from './HistoryTable';
import { fibApi } from '../../api/api';
import { Spinner } from '../../components/Spinner/Spinner';

const History = () => {
  const [history, sethistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getHist = async () => {
    setIsLoading(true);
    const hist = await fibApi.getHistory();
    setIsLoading(false);

    sethistory(hist);
  };

  useEffect(() => {
    getHist();
  }, []);

  return (
    <div className="history">
      <div className="history__container">
        {isLoading ? <Spinner /> : <HistoryTable history={history} />}
      </div>
    </div>
  );
};

export { History };
