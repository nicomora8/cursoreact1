import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {

    const [showForm, setShowForm] = useState(false);

    const showFormHandler = () => {
        setShowForm(true);
    };

    const hideFormHandler = () => {
        setShowForm(false);
    };

    const newExpenseHandler = (newExpense) => {
        const expenseData = {
            ...newExpense,
            id: Math.random().toString(),
          };
        props.onNewExpense(expenseData);
        setShowForm(false);
    }

    return <div className="new-expense">
        {!showForm && <button onClick={showFormHandler}> Add new Expense </button>}  
        {showForm && <ExpenseForm onCancelForm={hideFormHandler} onSaveExpense={newExpenseHandler}/>} 
    </div>
};

export default NewExpense;