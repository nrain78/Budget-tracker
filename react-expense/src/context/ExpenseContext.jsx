
import { createContext, useContext, useEffect, useState } from "react";

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState(() => {
    try {
      const savedExpenses = localStorage.getItem("expenses");
      return savedExpenses ? JSON.parse(savedExpenses) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  function addExpense(expense) {
    setExpenses((previousExpenses) => [
      ...previousExpenses,
      { ...expense, id: Date.now() + Math.random() },
    ]);
  }

  function deleteExpense(id) {
    setExpenses((previousExpenses) =>
      previousExpenses.filter((expense) => expense.id !== id)
    );
  }

  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpense, deleteExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export function useExpenses() {
  return useContext(ExpenseContext);
}