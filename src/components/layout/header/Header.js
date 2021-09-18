import React from 'react'
import logo from 'assets/images/logo.png'
import { Link } from 'wouter'

function Header () {
  return (
    <header>
      <img src={logo} alt='kimbali' />
      <p>BANANA</p>
      <div className='links'>
        <Link to='/'>Landing</Link>
      </div>
    </header>
  )
}

export default Header
