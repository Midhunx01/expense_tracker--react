import { useState } from 'react';


import ExpensesFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

export default function Expenses(props) {

    const [selectedYear, setSelectedYear] = useState('2023')

    const filteredExpenses = props.items.filter((expense) => {
        return (
            expense.date.getFullYear().toString() === selectedYear
        )
    })

         
           
        


function onFilterChangeHandler(selectedYear) {
    setSelectedYear(selectedYear);
}

return (
    <div className='expenses'>
        <ExpensesFilter selectedYear={selectedYear} onFilterChange={onFilterChangeHandler} />
        {filteredExpenses.map(expense => <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />)}
    </div>
)
}