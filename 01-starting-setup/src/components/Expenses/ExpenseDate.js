import './ExpenseDate.css';

function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    // const day = props.date.getDay();
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    // const month = props.date.getMonth();
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    );
}

export default ExpenseDate;