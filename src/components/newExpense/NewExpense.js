import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const newExpenseHandler = (newExpense) => {
        props.onNewExpense(newExpense);
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpense={newExpenseHandler}/>
    </div>
};

export default NewExpense;