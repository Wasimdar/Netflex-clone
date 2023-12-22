import React from 'react'
import './BottomSection.css';
import ExpenseItem from './ExpenseItem';

function BottomSection() {
    const Questions =[
        {id:'1' , title:'What is Netflix ?' , description:'NEt flex is the ' },
        {id:'2' , title:'Wh ?' , description:' Send children on adventures with their favourite characters in a space made just for them—free with your membership.' }
    ]
    return (
        <div>
            <hr></hr>
            <div className='bottom-section'>
            <h1 className='Head-texts'>Frequently Asked Questions</h1>
               {Questions.map((question ,index)=>(
                 <ExpenseItem key={index} 
                 title={question.title} 
                 description={question.description}  />
               ))}
                
            </div>
            <hr className='hr'></hr>
        </div>
    )
}

export default BottomSection