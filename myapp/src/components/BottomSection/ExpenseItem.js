import React, { useState } from 'react'
import './ExpenseItem.css';

function ExpenseItem(props) {
    const [isToggle, setToggle] = useState(false);

    const toggleHandler = () => {
        setToggle(true);
    }
    return (

        <div className='expense'>

            <div className='expense-item' onClick={toggleHandler} >
                <h2>{props.title}</h2>
            </div>
             <hr className='ref'></hr>
            {isToggle && <div className='expense-item'>
                <p>{props.description}</p>
            </div>}

        </div>


    )
}

export default ExpenseItem