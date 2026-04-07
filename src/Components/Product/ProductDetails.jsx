import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ElementContext, PostContext } from '../../Context/ProductContext'

const ProductDetails = () => {

  const { id } = useParams()
  const [post, setPost] = useState(null)

  const { product } = useContext(PostContext)

  useEffect(() => {
    const data = product.find((item) => Number(id) === item.id)
    if (data) setPost(data)
  }, [id, product])

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5 md:px-20">

      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://placehold.co/500x400"
            alt="product"
            className="rounded-xl shadow-md hover:scale-105 transition duration-300"
          />
        </div>

        {/* Content */}
        <div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {post?.title}
          </h1>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {post?.body}
          </p>

          <div className="text-2xl font-bold text-green-600 mb-6">
            $99.99
          </div>

          <div className="flex gap-4">

            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Add to Cart 🛒
            </button>

            <button className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition">
              Buy Now
            </button>

          </div>

        </div>
      </div>

    </div>
  )
}

export default ProductDetails