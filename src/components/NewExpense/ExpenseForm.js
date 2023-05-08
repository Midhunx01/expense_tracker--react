import React,{ useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value)
    }
    function amountChangeHandler(event){
        setAmount(event.target.value)
    }
    function dateChangeHandler(event){
        setDate(event.target.value)
    }

    function onSubmitHandler(event){
      event.preventDefault();

      const expensesData = {
        title : title,
        amount : +amount,
        date : new Date(date)
      }
      props.onSaveExpense(expensesData);
      setTitle('');
      setAmount('');
      setDate('');
      props.onCancel();

    }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={title} onChange={titleChangeHandler} required />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={amount} min='0.01' step='0.01' onChange={amountChangeHandler} required />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={date} min='2020-01-01' max='2023-12-31' onChange={dateChangeHandler} required/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button  onClick={props.onCancel}> Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;