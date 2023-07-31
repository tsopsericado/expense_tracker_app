import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import './App.css';
import IncomeExpenses from './components/IncomeExpenses';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import { TransactionList } from './components/TransactionList';
import Landing from './components/Landing';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <Landing />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
