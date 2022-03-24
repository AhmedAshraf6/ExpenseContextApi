import React, { useContext } from 'react';
import { appProvider } from '../contexts/AppProviderContext';
const Form = () => {
  const { setNameExpense, nameExpense, price, setPrice, HandleSubmit } =
    useContext(appProvider);
  return (
    <section className='form mt-4 mx-auto'>
      <h3 className='border-bottom pb-2 mb-3'>Add new transaction</h3>
      <form onSubmit={HandleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Text</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter text...'
            value={nameExpense}
            onChange={(e) => setNameExpense(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>
            Amount
            <br />
            (negative - expense, postive - Income)
          </label>
          <input
            type='number'
            className='form-control'
            placeholder='Enter amount...'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button className='btn btn-info d-block mx-auto mb-3'>
          Add transaction
        </button>
      </form>
    </section>
  );
};

export default Form;
