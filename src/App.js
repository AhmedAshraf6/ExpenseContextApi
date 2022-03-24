import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Form from './components/Form';
import Info from './components/Info';
import HistoryList from './components/HistoryList';
import { AppProviderContext } from './contexts/AppProviderContext';
import Balance from './components/Balance';

function App() {
  return (
    <AppProviderContext>
      <div className='container'>
        <h2 className='text-center mt-3'>Expense Tracker</h2>
        <Form />
        <Info />
        <Balance />
        <HistoryList />
      </div>
    </AppProviderContext>
  );
}

export default App;
