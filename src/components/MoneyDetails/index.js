// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <div className="account-details">
      <div className="balance1-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="icon"
        />
        <div>
          <p className="para1">Your Balance</p>
          <p className="para2">Rs {balance}</p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="icon"
        />
        <div>
          <p className="para1">Your Income</p>
          <p className="para2">Rs {income}</p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="icon"
        />
        <div>
          <p className="para1">Your Expenses</p>
          <p className="para2">Rs {expenses}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
