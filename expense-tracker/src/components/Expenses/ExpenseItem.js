import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import React, { useState } from 'react';

const ExpenseItem = (props) => { 
    const [title] = useState(props.title);

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>  {/* Adds the date props to ExpenseDate Cmpnt*/}
            <div className="expense-item__description">
                <h2>{ title}</h2>
                <div className="expense-item__price">€{props.amount}</div>
            </div>

        </Card>
    )
};

export default ExpenseItem;