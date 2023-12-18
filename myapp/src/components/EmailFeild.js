import React from 'react'
import './Emailfeild.css';

function EmailFeild () {
    return (
        <div className='email-feild' >
            <input placeholder='Email Address' minlength="5" maxlength="50" type="email"  />
            <button>Get Started {'>'} </button>
        </div>
    )
}

export default EmailFeild;