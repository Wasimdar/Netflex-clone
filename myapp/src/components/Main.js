import React from 'react';
import './Main.css';
import Header from './Header';
import EmailFeild from './EmailFeild';
import Mainsection from './Mainsection';
import BottomSection from './BottomSection/BottomSection';

function Main() {
  return (
   

        <div className="overlay">
            <Header />
          <div className='main-content'>
            <div className='content'>
               <h1 className='Head-text'>Unlimited movies, TV shows and more </h1>
               <h2>Watch anywhere. Cancel Anytime.</h2>
               <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
               <EmailFeild />
            </div>
            
          </div>
          
         
        </div>

     
  )
}

export default Main