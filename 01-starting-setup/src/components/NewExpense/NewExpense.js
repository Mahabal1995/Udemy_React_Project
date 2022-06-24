import React, { useState} from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {
    const [addExpense, setAddExpense] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);
    }
    
    const addNewExpenseHandler = event => {
       setAddExpense(true);
    };

    const closeFormHandler = () => {
        setAddExpense(false);
    };

    return (
        <div>
            <div className="new-expense">
                {!addExpense && <button onClick={addNewExpenseHandler}> Add New Expense </button>}
                {addExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={closeFormHandler}/>}
            </div>
        </div>
    );
}
export default NewExpense;