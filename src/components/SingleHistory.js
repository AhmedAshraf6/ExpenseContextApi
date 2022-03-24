import React, { useContext } from 'react';
import { appProvider } from '../contexts/AppProviderContext';

const SingleHistory = ({ his }) => {
  const { closeSingleHistory } = useContext(appProvider);
  const { nameExpense, price, id } = his;
  return (
    <div className={price > 0 ? 'card mx-auto  mt-4' : 'card mx-auto  mt-4'}>
      <div>
        <span className='close' onClick={() => closeSingleHistory(id)}>
          X
        </span>
        <div
          className={
            price > 0
              ? 'card-body green d-flex justify-content-between align-items-center'
              : 'card-body danger d-flex justify-content-between align-items-center'
          }
        >
          <span>{nameExpense}</span>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleHistory;
