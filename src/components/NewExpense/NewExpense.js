import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [visible, setVisible] = useState(false)

  function onSaveHandler(enteredExpense) {
    const newExpense = {
      ...enteredExpense,
      id: Math.random().toString()
    }
    props.newExpenseData(newExpense);

  }

  function formOpenHandler() {
    setVisible(true);
  }
  function formCloseHandler(){
    setVisible(false);
  }

  return (
    <div className='new-expense'>
      {!visible ? <button onClick={formOpenHandler}>Add New Expense</button> : 
      <ExpenseForm onSaveExpense={onSaveHandler} onCancel={formCloseHandler} /> }
    </div>
  );
};

export default NewExpense;