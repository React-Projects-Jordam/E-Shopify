import React, { useContext } from 'react'
import { ElementContext, PostContext } from '../../Context/ProductContext'
import { useNavigate } from 'react-router'

const ListProducts = () => {
  const { product } = useContext(PostContext)
  const {element , setElement} = useContext(ElementContext)

  const navigate = useNavigate()

  const viewDetails = (item) => {
    console.log('id for Product',item);
    setElement(item)
    navigate(`/product/${item.id}`)
  }
  
  return (
    <div className="px-10 md:px-20 py-10">
      <h1 className='text-3xl font-bold mb-10 text-gray-800 border-b pb-4'>
        Our Products
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {product.map((item, index) => (
          <div 
            key={index} 
            className='group border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col bg-white'
          >
            <h5 className='text-xl font-bold mb-3 text-gray-900 truncate'>
              {item.title}
            </h5>

            <div className='text-gray-600 text-sm mb-6 line-clamp-3 flex-grow'>
              {item.body}
            </div>

            <button
            onClick={() => viewDetails(item)}
            className='w-full border-2 border-black p-3 cursor-pointer hover:bg-black hover:text-white font-bold uppercase tracking-widest text-xs transition-colors duration-200'>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListProducts