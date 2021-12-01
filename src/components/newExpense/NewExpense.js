import './NewExpense.css';

const NewExpense = () => {
    return <div className="new-expense">
        <form>
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text'></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01"></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date'></input>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    </div>
};

export default NewExpense;