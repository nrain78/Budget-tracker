
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDelete }) {
  return (
    <section className="panel">
      <h2>Expense Records</h2>

      {expenses.length === 0 ? (
        <p className="empty-message">
          No expenses found. Add your first expense!
        </p>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Expense Title</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {expenses.map((expense) => (
                <ExpenseItem
                  key={expense.id}
                  expense={expense}
                  onDelete={onDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default ExpenseList;