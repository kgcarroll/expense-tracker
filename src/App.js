import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    title: 'Mortgage',
    amount: 2000,
    date: new Date(2019, 6, 1),
	id: 'e1'
  },
  {
    title: 'Car Payment',
    amount: 300,
    date: new Date(2020, 6, 6),
	id: 'e2'
  },
  {
    title: 'Cell Phone',
    amount: 100,
    date: new Date(2022, 6, 10),
	id: 'e3'
  },
  {
    title: 'Student Loan',
    amount: 2500,
    date: new Date(2022, 6, 11),
	id: 'e4'
  },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    const addExpenseHandler = (expense) => {
		setExpenses(prevExpenses => {
			return [expense, ...prevExpenses];
		});
		console.log('In App.js: ', expense);
    }

    return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses}></Expenses>
		</div>
    );
};

export default App;
