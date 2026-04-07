import React from 'react'
import { Link } from 'react-router'
import HeroImg from '../../assets/Hero.png'
import Clothing from '../../assets/Clothing.png'
import Shoes from '../../assets/Shoes.png'
import ACCESSORIES from "../../assets/Accessories.png";

const Hero = () => {
  return (
    <div className="relative w-full bg-[#f5f7f9] overflow-hidden">

      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(45deg, #000 1px, transparent 1px), linear-gradient(-45deg, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 items-center min-h-[70vh] pb-20 md:pb-10">

        <div className="z-20 order-2 md:order-1 text-center md:text-left py-8 md:py-0">

          <span className="text-gray-400 uppercase tracking-[0.2em] text-sm sm:text-lg md:text-2xl font-bold block mb-3">
            Discover
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
            New <br className="hidden md:block" /> Collection
          </h1>

          <Link to="/products">
            <button className="relative z-30 bg-blue-600 text-white px-6 sm:px-8 py-3 text-xs sm:text-sm font-black uppercase tracking-widest hover:bg-black transition duration-300 shadow-lg">
              Shop Now
            </button>
          </Link>
        </div>

        <div className="z-10 order-1 md:order-2 flex justify-center md:justify-end">
          <img
            src={HeroImg}
            alt="hero"
            className="w-[80%] sm:w-[70%] md:w-full max-w-[500px] md:max-w-[800px] object-contain drop-shadow-2xl mt-6 md:mt-0"
          />
        </div>
      </div>

      <div className="relative z-30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-4 sm:px-6 bg-white shadow-2xl -mt-4 sm:-mt-8 md:-mt-20 mx-4 md:mx-20 rounded-3xl mb-10">

        {[
          { name: 'Clothing', img: Clothing },
          { name: 'Shoes', img: Shoes },
          { name: 'Accessories', img: ACCESSORIES }
        ].map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center group cursor-pointer bg-gray-50 p-6 rounded-2xl hover:bg-gray-100 transition duration-300"
          >
            <div className="w-full h-40 sm:h-52 md:h-64 flex items-center justify-center overflow-hidden mb-4">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-contain group-hover:scale-110 transition duration-300"
              />
            </div>

            <span className="font-black text-base sm:text-lg md:text-xl uppercase tracking-widest text-gray-800">
              {cat.name}
            </span>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Hero