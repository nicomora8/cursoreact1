import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filteredList = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  const filterListHandler = year => {
    setFilteredYear(year);
  };

  
  return <Card className="expenses"> 
            <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterListHandler}/>
            <ExpensesList expenses={filteredList}/> 
         </Card>;
}

export default Expenses;