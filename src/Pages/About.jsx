import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        {/* Section 1: Hero-like Header */}
        <section className="bg-slate-900 text-white py-20 px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Our Story</h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            We are more than just an e-commerce platform. We are a community 
            dedicated to providing the finest products with uncompromised quality.
          </p>
        </section>

        {/* Section 2: Content & Image */}
        <section className="py-16 px-10 md:px-20 container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-800">Why Choose Us?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2026, our shop has grown from a small local boutique to a 
                global destination for fashion and lifestyle products. We believe in 
                sustainability, innovation, and customer satisfaction above all else.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every product in our collection is handpicked by experts to ensure it 
                meets our high standards of durability and style.
              </p>
            </div>
            
            {/* Placeholder for an image */}
            <div className="bg-gray-100 h-80 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
               <span className="text-gray-400 font-bold uppercase tracking-widest">Our Workshop Image</span>
            </div>
          </div>
        </section>

        {/* Section 3: Statistics (Numbers) */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-10 md:px-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-black text-blue-600">10k+</h3>
              <p className="text-gray-500 font-medium">Customers</p>
            </div>
            <div>
              <h3 className="text-4xl font-black text-blue-600">150+</h3>
              <p className="text-gray-500 font-medium">Brands</p>
            </div>
            <div>
              <h3 className="text-4xl font-black text-blue-600">24/7</h3>
              <p className="text-gray-500 font-medium">Support</p>
            </div>
            <div>
              <h3 className="text-4xl font-black text-blue-600">5+</h3>
              <p className="text-gray-500 font-medium">Countries</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default About