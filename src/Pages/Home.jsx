import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ListProducts from '../Components/Home/ListProducts'
import Hero from '../Components/Home/Hero'

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        {/* <ListProducts /> */}
        <Footer />
    </div>
  )
}

export default Home
