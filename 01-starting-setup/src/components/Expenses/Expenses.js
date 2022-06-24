import { useState } from "react";

// import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import './Expenses.css';
import Card from '../UI/Card';


function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filterdExpenses = props.item.filter(expense =>{ 
    return expense.date.getFullYear().toString() === filteredYear; 
  });
  
    return (
      <li>
        <div>
          <Card className="expenses">
            <ExpensesFilter 
              selected={filteredYear} 
              onChangeFilter={filterChangeHandler}
            />
          <ExpensesList item={filterdExpenses}/>
          </Card>
        </div>
      </li>
    );
}

export default Expenses;


// {/* {filterdExpenses.length === 0 ? 
//           <p>No Expenses Found</p> :
//           filterdExpenses.map(expenses => 
//           <ExpenseItem
//           key={expenses.id} 
//           title={expenses.title}
//           amount={expenses.amount}
//           date={expenses.date}
//           />)} */}

// {filterdExpenses.length === 0 && <h2>No Expenses Found</h2>}
//           {filterdExpenses.length > 0 && filterdExpenses.map(expenses => 
//           <ExpenseItem
//           key={expenses.id} 
//           title={expenses.title}
//           amount={expenses.amount}
//           date={expenses.date}
//           />)}

// console.log(filterdExpenses);
  // const addYearHandler = (year) => {

  //   const newYear = {
  //     newyear: year,
  //   }
  //   console.log('in expenses');
  //   console.log(newYear);
  // }