import React, { useContext } from 'react';
import { appProvider } from '../contexts/AppProviderContext';
const Info = () => {
  const { amountIncome, amountExpense } = useContext(appProvider);
  return (
    <div className='info card my-2 mx-auto'>
      <div className='card-body  d-flex justify-content-around align-items-center'>
        <div>
          <h5 className='card-title '>Income</h5>
          <p className='card-text green'>{amountIncome}$</p>
        </div>
        <div>
          <h5 className='card-title '>Expense</h5>
          <p className='card-text danger'>{amountExpense}$</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
