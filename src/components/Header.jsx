import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <img className='logo' src={logo} alt="logo" />
        <p>my travel journal</p>
      </header>
    </React.Fragment>
  )
}

export default Header