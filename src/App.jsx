import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import ProductCreate from './pages/ProductCreate'
import { ToastContainer } from 'react-toastify'
import Header from './components/Header'
import ProductUpdate from './pages/ProductUpdate'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <div className='max-w-4xl mx-auto'>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/product/create' element={<ProductCreate />} />
          <Route path='/product/update/:id' element={<ProductUpdate />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App