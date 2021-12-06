import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterListHandler = year => {
    setFilteredYear(year);
  };

  const list = props.expenses.map((exp) => (
    <ExpenseItem
      title={exp.title}
      amount={exp.amount}
      date={exp.date}
    />
  ));
  return <Card className="expenses"> 
            <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterListHandler}/>
            {list} 
         </Card>;
}

export default Expenses;