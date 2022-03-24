import React, { useState, createContext, useEffect } from 'react';

export const appProvider = createContext();

export const AppProviderContext = (props) => {
  const [nameExpense, setNameExpense] = useState('');
  const [price, setPrice] = useState('');
  const [amountIncome, setAmountIncome] = useState(0);
  const [amountExpense, setAmountExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  const [history, setHistory] = useState([]);

  // when amountIncome or amountExpense Change we change balance
  useEffect(() => {
    setBalance(amountIncome - amountExpense);
  }, [amountIncome, amountExpense]);
  // function HandleSubmit
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (nameExpense && price) {
      if (price > 0) {
        setAmountIncome(amountIncome + parseInt(price));
      } else {
        setAmountExpense(amountExpense - parseInt(price));
      }
      setHistory([
        ...history,
        { nameExpense, price, id: new Date().getTime().toString() },
      ]);
    }
    setNameExpense('');
    setPrice('');
  };
  // Finction CLose Single History
  const closeSingleHistory = (id) => {
    const newHistory = history.filter((his) => his.id !== id);
    const findSingleHistory = history.find((history) => history.id === id);
    if (findSingleHistory.price < 0) {
      setAmountExpense(amountExpense + parseInt(findSingleHistory.price));
    } else {
      setAmountIncome(amountIncome - parseInt(findSingleHistory.price));
    }
    setHistory(newHistory);
  };
  const values = {
    setNameExpense,
    nameExpense,
    price,
    setPrice,
    history,
    HandleSubmit,
    amountIncome,
    amountExpense,
    balance,
    closeSingleHistory,
  };
  return (
    <appProvider.Provider value={values}>{props.children}</appProvider.Provider>
  );
};
