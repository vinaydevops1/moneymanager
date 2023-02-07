// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachItem, onClickDelete} = props
  const {id, title, amount, type} = eachItem
  const deleteTransaction = () => {
    onClickDelete(id)
  }

  return (
    <li className="list-series">
      <p className="title1">{title}</p>
      <p className="amount1">Rs {amount}</p>
      <p className="type1">{type}</p>
      <button
        className="delete-button"
        type="button"
        onClick={deleteTransaction}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="img-delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
