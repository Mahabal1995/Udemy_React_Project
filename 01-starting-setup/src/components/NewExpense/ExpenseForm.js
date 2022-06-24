import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredCost, setEnteredCost] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    };

    const costChangeHandler = (event) => {
        setEnteredCost(event.target.value);
    };

    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredCost,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredCost('');
        setEnteredDate('');
        props.onCancel();
    };

    const closeFormHandler = (event) => {
        props.onCancel();
    }
    return (
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input 
                            type='text' 
                            onChange={titleChangeHandler}
                            value={enteredTitle}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Cost</label>
                        <input 
                            type='number' 
                            min="0.01" 
                            step="0.01"
                            value={enteredCost} 
                            onChange={costChangeHandler }
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input 
                            type='date' 
                            min="2020-01-01" 
                            max="2023-12-31"
                            value={enteredDate} 
                            onChange={dateChangeHandler}
                        />
                    </div>
                </div> 
                <div className="new-expense__actions">
                    <button type="button" onClick={closeFormHandler}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div> 
            </form>
    );
}

export default ExpenseForm;