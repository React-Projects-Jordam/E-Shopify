import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ className }) => {
  return (
    <div className={`flex text-white justify-center gap-40 text-2xl ${className}`}>
      
      <Link to='/'>
        <div className='cursor-pointer font-bold font-sans hover:bg-sky-700 p-5 rounded-lg'>
          Home
        </div>
      </Link>

      <Link to='/products'>
        <div className='cursor-pointer font-bold font-sans hover:bg-sky-700 p-5 rounded-lg'>
          Products
        </div>
      </Link>

      <Link to='/about'>
        <div className='cursor-pointer font-bold font-sans hover:bg-sky-700 p-5 rounded-lg'>
          About
        </div>
      </Link>

    </div>
  )
}

export default Navbar