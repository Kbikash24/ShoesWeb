import React from 'react'
import './NavBar.css'
const NavBar = (props) => {
  return (
    <div className='nav'>NavBar
    <div className='links'>
    <a href='http://localhost:3000/admin'>AdminPage</a>
    <a href='http://localhost:3000/products'>Product Page</a>
 <button onClick={props.toggleCart}>Cart</button></div></div>
  )
}

export default NavBar