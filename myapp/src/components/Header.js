import React from 'react'
import './Header.css';

function Header() {
  return (
    <header className='header' >
        <h1>NETFLIX</h1>
        <div className='header-link' >
            <select>
                <option lang='en' label='English' >English</option>
                <option lang='li'label='Hindi'  >Hindi</option>
            </select>
            <button>Sign in</button>
        </div>
    </header>
  )
}

export default Header