import React, { useState} from 'react';

import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
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
        <li>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />                
                <ExpensesList items={filteredExpenses}/>
            </Card>    
        </li>
    );
};

export default Expenses;