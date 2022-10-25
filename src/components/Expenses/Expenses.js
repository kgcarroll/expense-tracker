import React, { useState} from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

import './Expenses.css';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (date) => {
        setFilteredYear(date);
        // console.log('In Expenses.js: ', date);
    };

    const filteredExpenses = props.expenses.filter( expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} /> 
            <ExpensesChart expenses={filteredExpenses} />               
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
};

export default Expenses;