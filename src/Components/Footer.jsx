import React from 'react'
import { Link } from 'react-router-dom'
// استورد اللوغو الخاص بك
import logo from '../assets/Logo.png'; 

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-white w-full mt-auto'>
      <div className='container mx-auto px-10 md:px-20 py-12'>
        
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12'>
          
          {/* العمود الأول: اللوغو والتعريف */}
          <div className='col-span-1 md:col-span-1'>
            <img src={logo} alt="logo" className='h-20 w-auto mb-4 brightness-200' />
            <p className='text-gray-400 text-sm leading-relaxed'>
              The best destination for high-quality fashion and products. We deliver style and comfort to your doorstep.
            </p>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div>
            <h4 className='text-lg font-bold mb-6 border-b border-gray-700 pb-2 w-fit'>Quick Links</h4>
            <ul className='space-y-3 text-gray-400 text-sm'>
              <li><Link to="/" className='hover:text-white transition'>Home</Link></li>
              <li><Link to="/about" className='hover:text-white transition'>About Us</Link></li>
              <li><Link to="/contact" className='hover:text-white transition'>Contact</Link></li>
              <li><Link to="/shop" className='hover:text-white transition'>Our Products</Link></li>
            </ul>
          </div>

          {/* العمود الثالث: سياسات الموقع */}
          <div>
            <h4 className='text-lg font-bold mb-6 border-b border-gray-700 pb-2 w-fit'>Policies</h4>
            <ul className='space-y-3 text-gray-400 text-sm'>
              <li className='hover:text-white cursor-pointer transition'>Privacy Policy</li>
              <li className='hover:text-white cursor-pointer transition'>Shipping Policy</li>
              <li className='hover:text-white cursor-pointer transition'>Terms & Conditions</li>
              <li className='hover:text-white cursor-pointer transition'>Returns & Refunds</li>
            </ul>
          </div>

          {/* العمود الرابع: النشرة البريدية (Newsletter) */}
          <div>
            <h4 className='text-lg font-bold mb-6 border-b border-gray-700 pb-2 w-fit'>Stay Updated</h4>
            <p className='text-gray-400 text-sm mb-4'>Subscribe to get special offers.</p>
            <div className='flex'>
              <input 
                type="email" 
                placeholder="Your Email" 
                className='bg-slate-800 border-none p-2 rounded-l-md w-full focus:ring-1 focus:ring-blue-500 outline-none text-sm'
              />
              <button className='bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition font-bold text-sm'>
                Join
              </button>
            </div>
          </div>

        </div>

        {/* الجزء السفلي: حقوق النشر */}
        <div className='border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs'>
          <p>© 2026 ASOSS Store. All rights reserved.</p>
          <div className='flex gap-6 mt-4 md:mt-0 uppercase tracking-widest'>
            <span className='hover:text-white cursor-pointer transition'>Facebook</span>
            <span className='hover:text-white cursor-pointer transition'>Instagram</span>
            <span className='hover:text-white cursor-pointer transition'>Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer