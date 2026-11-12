
function ExpenseSummary({ expenses }) {
  const totalAmount = expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );

  const highestExpense =
    expenses.length > 0
      ? Math.max(...expenses.map((expense) => Number(expense.amount)))
      : 0;

  return (
    <section className="summary-section">
      <h2>Expense Summary</h2>

      <div className="summary-grid">
        <div className="summary-card">
          <p>Total Expenses</p>
          <h3>{expenses.length}</h3>
        </div>

        <div className="summary-card">
          <p>Total Amount Spent</p>
          <h3>Rs. {totalAmount.toLocaleString("en-PK")}</h3>
        </div>

        <div className="summary-card">
          <p>Highest Expense</p>
          <h3>Rs. {highestExpense.toLocaleString("en-PK")}</h3>
        </div>
      </div>
    </section>
  );
}

export default ExpenseSummary;