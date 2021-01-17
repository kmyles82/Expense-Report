import React, { useReducer, createContext } from 'react'

import contextReducer from './contextReducer'

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":50,"category":"Business","type":"Income","date":"2021-01-17","id":"f5ba7617-2b62-4a74-b094-e7c0a72d4a15"},{"amount":100,"category":"Clothes","type":"Expense","date":"2021-01-17","id":"2b4101ab-73e9-44e3-95b7-c2085b3a3cd7"}]

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState)

  const deleteTransaction = (id) =>
    dispatch({ type: 'DELETE_TRANSACTION', payload: id })

  const addTransaction = (transaction) =>
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction })


  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  )
}
