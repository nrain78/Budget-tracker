
import { useState } from "react";
import { useExpenses } from "./context/ExpenseContext";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import "./App.css";

function App() {
  const { expenses, deleteExpense } = useExpenses();

  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredExpenses =
    selectedCategory === "All Categories"
      ? expenses
      : expenses.filter(
          (expense) => expense.category === selectedCategory
        );

  return (
    <main className="app-container">
      <header className="app-header">
        <div>
          <p className="eyebrow">PERSONAL FINANCE</p>
          <h1>Expense Tracker</h1>
          <p className="subtitle">
            Keep track of where your money goes.
          </p>
        </div>

        <div className="header-icon">Rs.</div>
      </header>

      <ExpenseSummary expenses={expenses} />

      <ExpenseForm />

      <section className="panel filter-panel">
        <div>
          <h2>Filter Expenses</h2>
          <p className="muted-text">
            View records by category.
          </p>
        </div>

        <select
          aria-label="Filter by category"
          value={selectedCategory}
          onChange={(event) =>
            setSelectedCategory(event.target.value)
          }
        >
          <option value="All Categories">All Categories</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Other">Other</option>
        </select>
      </section>

      <ExpenseList
        expenses={filteredExpenses}
        onDelete={deleteExpense}
      />

      <footer className="app-footer">
        Expense Tracker · Built with React JS
      </footer>
    </main>
  );
}

export default App;
