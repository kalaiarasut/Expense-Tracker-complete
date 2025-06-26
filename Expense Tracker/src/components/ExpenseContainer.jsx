import ExpenseForm from "./ExpenseForm";
import History from "./History";
import { useState, useEffect } from "react";
import BalanceContainer from "./BalanceContainer";
import { v4 as uuidv4 } from 'uuid';

const expense = [
    // { id: 1, title: "Intern", amount: 20000 },
    // { id: 2, title: "Superpacc fee", amount: -30 },
    // { id: 3, title: "Scholarship", amount: 40 }
];
const ExpenseContainer = () => {
    const [expenses, setExpenses] = useState(expense);
    const [itemToEdit, setItemToEdit] = useState(null); 

     async function fetchExpenses() {
        const res = await fetch("http://localhost:3000/expense");
        const data = await res.json();
        

        setExpenses(data.map(item => ({
            ...item,
            id: item._id
        })));
    }

    
    useEffect(() => {
        fetchExpenses();
    }, []);

  
    async function addExpense(title, amount) {
        await fetch("http://localhost:3000/expenses", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, amount: Number(amount) })
        });
        fetchExpenses(); // Refresh list after adding
    }
    
    async function delExpense(id) {
        await fetch(`http://localhost:3000/expense/${id}`, {
            method: "DELETE"
        });
        fetchExpenses(); // Refresh list after deleting
    }
    // const addExpense = (title, amount) => {
    //     setExpenses([...expenses, { id: uuidv4(), title, amount }]);
    // };

    // const deleteExpense = (id) => {
    //     setExpenses(expenses.filter(exp => exp.id !== id));
    // };

    // const editExpense = (id, updatedTitle, updatedAmount) => {
    //     setExpenses(expenses.map(exp =>
    //         exp.id === id ? { ...exp, title: updatedTitle, amount: updatedAmount } : exp
    //     ));
    //     setItemToEdit(null);
    // };
 async function updateExpense(id,title,amount){
        await fetch( `http://localhost:3000/expense/${id}`,{
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, amount: Number(amount) })


        });
        fetchExpenses();
        setEdit(null)
       }
    return (
        <div className="expense-container">
            <h2>Expense Tracker</h2>
            <BalanceContainer expenses={expenses} />
            <ExpenseForm
                addExpense={addExpense}
                itemToEdit={itemToEdit}
                editExpense={updateExpense}
            />
            <History
                expense={expenses}
                deleteExpense={delExpense}
                setItemToEdit={setItemToEdit}
            />
            
        </div>
    );
};
export default ExpenseContainer;