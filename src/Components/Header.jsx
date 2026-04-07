import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'
import Navbar from './Navbar'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => setIsOpen(false)

  return (
    <div className="bg-slate-800 shadow-md flex px-4 md:px-10 py-2 items-center justify-between relative z-50">

      <Link to="/" onClick={handleClose}>
        <img
          src={logo}
          alt="logo"
          className="h-16 sm:h-20 md:h-28 w-auto object-contain"
        />
      </Link>

      <div className="hidden lg:block flex-1 mx-10">
        <Navbar />
      </div>

      <div className="flex items-center gap-4 md:gap-8">

        <div className="hidden sm:flex gap-4 md:gap-6 text-white font-medium">
          <Link to="/login" className="hover:text-blue-400 text-lg md:text-xl">
            Login
          </Link>
          <Link to="/register" className="hover:text-blue-400 text-lg md:text-xl">
            Register
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white text-3xl"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      <div
        className={`absolute top-full left-0 w-full bg-slate-800 border-t border-slate-700 p-5 flex flex-col gap-4 lg:hidden shadow-xl transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <Navbar />

        <div className="flex flex-col gap-4 sm:hidden border-t border-slate-700 pt-4">
          <Link to="/login" onClick={handleClose} className="text-white text-lg hover:text-blue-400">
            Login
          </Link>
          <Link to="/register" onClick={handleClose} className="text-white text-lg hover:text-blue-400">
            Register
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Header