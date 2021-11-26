import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const list = props.expenses.map((exp) => (
    <ExpenseItem
      title={exp.title}
      amount={exp.amount}
      date={exp.date}
    />
  ));
  return <Card className="expenses"> {list} </Card>;
}

export default Expenses;