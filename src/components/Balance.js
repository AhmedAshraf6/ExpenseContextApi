import React, { useContext } from 'react';
import { appProvider } from '../contexts/AppProviderContext';
const Balance = () => {
  const { balance, amountIncome } = useContext(appProvider);

  return (
    <div className='info card my-2 mx-auto'>
      <div className='card-body  d-flex justify-content-around align-items-center'>
        <h5 className='card-title '>Your Balance</h5>
        <p className={balance >= 0 ? 'card-text green' : 'card-text danger'}>
          {balance < 0 ? -balance : balance}$
        </p>
      </div>
    </div>
  );
};

export default Balance;
