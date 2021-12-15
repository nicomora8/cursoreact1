import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const newExpenseHandler = (newExpense) => {
        const expenseData = {
            ...newExpense,
            id: Math.random().toString(),
          };
        props.onNewExpense(expenseData);
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpense={newExpenseHandler}/>
    </div>
};

export default NewExpense;