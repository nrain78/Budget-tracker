
import { useState } from "react";
import { useExpenses } from "../context/ExpenseContext";

function ExpenseForm() {
  const { addExpense } = useExpenses();

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "Food",
    date: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.amount ||
      !formData.category ||
      !formData.date
    ) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (Number(formData.amount) <= 0) {
      setMessage("Amount must be greater than zero.");
      return;
    }

    addExpense({
      ...formData,
      title: formData.title.trim(),
      amount: Number(formData.amount),
    });

    setFormData({
      title: "",
      amount: "",
      category: "Food",
      date: "",
    });

    setMessage("Expense added successfully!");
  }

  return (
    <section className="panel">
      <h2>Add New Expense</h2>

      <form onSubmit={handleSubmit} className="expense-form">
        <div className="form-group">
          <label htmlFor="title">Expense Title</label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="e.g. Grocery shopping"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount (Rs.)</label>
          <input
            id="amount"
            name="amount"
            type="number"
            placeholder="Enter amount"
            min="0.01"
            step="any"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <button className="primary-btn" type="submit">
          + Add Expense
        </button>

        {message && (
          <p
            className={
              message.includes("successfully")
                ? "success-message"
                : "error-message"
            }
            role="status"
          >
            {message}
          </p>
        )}
      </form>
    </section>
  );
}

export default ExpenseForm;