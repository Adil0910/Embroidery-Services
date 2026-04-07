import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <div><h1>Ehtesham Embroidery Service</h1></div>
        <div><Link to="/">Home</Link></div>
      </div>
    </div>
  )
}

export default Navbar