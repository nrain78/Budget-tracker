
function ExpenseItem({ expense, onDelete }) {
  return (
    <tr>
      <td>{expense.title}</td>

      <td className="amount-cell">
        Rs. {Number(expense.amount).toLocaleString("en-PK")}
      </td>

      <td>
        <span className="category-badge">
          {expense.category}
        </span>
      </td>

      <td>{expense.date}</td>

      <td>
        <button
          type="button"
          className="delete-btn"
          onClick={() => onDelete(expense.id)}
          aria-label={`Delete ${expense.title}`}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ExpenseItem;