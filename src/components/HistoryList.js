import React, { useContext } from 'react';
import { appProvider } from '../contexts/AppProviderContext';
import SingleHistory from './SingleHistory';

const History = () => {
  const { history } = useContext(appProvider);
  return (
    <section className='historylist mx-auto my-4'>
      <h3 className='border-bottom pb-2 mb-3'>History</h3>
      {history.length > 0 &&
        history.map((his) => {
          return <SingleHistory his={his} key={his.id} />;
        })}
    </section>
  );
};

export default History;
