import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ProductCreate = () => {

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const navigate = useNavigate()

  const submit = (e) => {

    e.preventDefault()
    if (!name || !price) {
      toast.error("All Fields are requirds")
      return
    }
    const storeDate = JSON.parse(localStorage.getItem("products")) || []
    const newProducts = {
      id: Date.now(),
      name,
      price,
    }
    storeDate.push(newProducts)
    localStorage.setItem("products", JSON.stringify(storeDate))

    setName("")
    setPrice("")
    navigate('/')
    toast.success("Product Create Successfully")
    return

  }


  return (
    <div className='py-1 mx-1'>
      <h1 className='text-center text-4xl mb-10 font-bold'>Product Create Form</h1>
      <form className='grid grid-cols-1 gap-4 max-w-xl mx-auto' onSubmit={submit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter product name'
          className='border border-solid border-black px-6 py-4 rounded-md text-base'
          type="text"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder='Enter product price'
          className='border border-solid border-black px-6 py-4 rounded-md text-base'
          type='number'
        />
        <button className='bg-red-600 px-6 py-4 rounded-md text-white hover:bg-red-700 cursor-pointer text-lg' type='submit'>Create</button>
      </form>
    </div>
  )
}

export default ProductCreate