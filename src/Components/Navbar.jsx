import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ className }) => {
  return (
    <div className={`flex flex-col lg:flex-row items-center text-white gap-6 lg:gap-16 text-lg lg:text-2xl ${className}`}>
      
      <Link to='/' className='w-full lg:w-auto'>
        <div className='text-center lg:text-left cursor-pointer font-bold hover:bg-sky-700 p-3 rounded-lg'>
          Home
        </div>
      </Link>

      <Link to='/products' className='w-full lg:w-auto'>
        <div className='text-center lg:text-left cursor-pointer font-bold hover:bg-sky-700 p-3 rounded-lg'>
          Products
        </div>
      </Link>

      <Link to='/about' className='w-full lg:w-auto'>
        <div className='text-center lg:text-left cursor-pointer font-bold hover:bg-sky-700 p-3 rounded-lg'>
          About
        </div>
      </Link>

    </div>
  )
}

export default Navbar