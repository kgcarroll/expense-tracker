import React from 'react';

import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      title: 'Mortgage',
      amount: 2000,
      date: new Date(2022, 6, 1),
    },
    {
      title: 'Car Payment',
      amount: 300,
      date: new Date(2022, 6, 6),
    },
    {
      title: 'Cell Phone',
      amount: 100,
      date: new Date(2022, 6, 10),
    },
    {
      title: 'Student Loan',
      amount: 2500,
      date: new Date(2022, 6, 11),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
