  import React from 'react'
  import { BrowserRouter, Route, Routes } from 'react-router'
  import Home from './Pages/Home'
  import Login from './Pages/Login'
  import Register from "./Pages/Register";
  import Products from './Pages/Products'
  import ProductContext, { PostContext } from './Context/ProductContext'
  import About from './Pages/About'
import Details from './Pages/Details'

  const App = () => {
    return (
      <>
      <ProductContext>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/Products' element={<Products />} />
            <Route path='/product/:id' element={<Details />}/>
          </Routes>
        </ProductContext>
      </>
    )
  }

  export default App
