import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionsHistory: [],
    title: '',
    amount: '',
    type: '',
    balance: 0,
    income: 0,
    expenses: 0,
  }

  onChangeTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onChangeAmount = event => {
    this.setState({
      amount: event.target.value,
    })
  }

  onChangeOption = event => {
    this.setState({
      type: event.target.value,
    })
  }

  onClickAdd = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTitle = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    if (type === 'INCOME') {
      this.setState(prevState => ({
        balance: prevState.balance + parseInt(amount),
        income: prevState.income + parseInt(amount),
      }))
    } else {
      this.setState(prevState => ({
        balance: prevState.balance - parseInt(amount),
        expenses: prevState.expenses + parseInt(amount),
      }))
    }

    this.setState(prevState => ({
      transactionsHistory: [...prevState.transactionsHistory, newTitle],
      title: '',
      amount: '',
    }))
  }

  onClickDelete = id => {
    const {transactionsHistory} = this.state
    const filteredList = transactionsHistory.filter(
      eachItem => eachItem.id !== id,
    )

    transactionsHistory.filter(eachItem => {
      if (id === eachItem.id) {
        if (eachItem.type === 'INCOME') {
          return this.setState(prevState => ({
            balance: prevState.balance - parseInt(eachItem.amount),
            income: prevState.income - parseInt(eachItem.amount),
          }))
        }
        return this.setState(prevState => ({
          balance: prevState.balance + parseInt(eachItem.amount),
          expenses: prevState.expenses - parseInt(eachItem.amount),
        }))
      }
      return eachItem.amount
    })

    this.setState({
      transactionsHistory: filteredList,
    })
  }

  render() {
    const {
      title,
      transactionsHistory,
      amount,
      income,
      balance,
      expenses,
    } = this.state

    return (
      <div className="main-page">
        <div className="name-container">
          <h1 className="name-heading">Hi,Richard</h1>
          <p className="name-para">
            Welcome back to your{' '}
            <span className="span-style">Money Manager</span>
          </p>
        </div>

        <div className="balance-container">
          <MoneyDetails balance={balance} income={income} expenses={expenses} />
        </div>

        <div className="add-history-container">
          <form className="form-container" onSubmit={this.onClickAdd}>
            <h1 className="trans-heading">Add Transaction</h1>
            <label className="label-style" htmlFor="title">
              TITLE
            </label>
            <input
              id="title"
              value={title}
              className="input-style"
              onChange={this.onChangeTitle}
              placeholder="TITLE"
            />
            <label className="label-style" htmlFor="amount">
              AMOUNT
            </label>
            <input
              id="amount"
              value={amount}
              className="input-style"
              onChange={this.onChangeAmount}
              placeholder="AMOUNT"
            />
            <label className="label-style" htmlFor="type">
              TYPE
            </label>
            <select
              className="select-box"
              id="type"
              onClick={this.onChangeOption}
            >
              {transactionTypeOptions.map(eachItem => (
                <option value={eachItem.optionId}>
                  {eachItem.displayText}
                </option>
              ))}
            </select>
            <button className="button" type="submit">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="trans-heading">HISTORY</h1>
            <ul className="list-history">
              <li className="list-series">
                <p className="title">Title</p>
                <p className="amount">Amount</p>
                <p className="type">Type</p>
              </li>
              {transactionsHistory.map(eachItem => (
                <TransactionItem
                  key={eachItem.id}
                  eachItem={eachItem}
                  onClickDelete={this.onClickDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
