import ExpenseItem from "./ExpenseItem";

const History = ({ expense, deleteExpense, setItemToEdit }) => {
    return (
        <div className="history">
            <div className="history-header">
                <h3>History</h3>
            </div>
            {expense.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    id={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    deleteExpense={deleteExpense}
                    setItemToEdit={setItemToEdit}
                />
            ))}
        </div>
    );
}

export default History;