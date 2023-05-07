import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  function onSaveHandler(enteredExpense) {
    const newExpense = {
      ...enteredExpense,
      id: Math.random().toString()
    }
    props.newExpenseData(newExpense);

  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpense={onSaveHandler} />
    </div>
  );
};

export default NewExpense;