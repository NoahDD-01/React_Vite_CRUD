import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const ProductUpdate = () => {
    const { id } = useParams()
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const navigate = useNavigate()

    const storeDate = JSON.parse(localStorage.getItem("products"))
    const oldData = storeDate.find((product) => product.id == id);
    useEffect(() => {
        setName(oldData.name)
        setPrice(oldData.price)
    }, [])

    const submit = (e) => {
        e.preventDefault();
        if (!name || !price) {
            toast.error("All Fields are requirds");
        }
        const updateData = storeDate.map((product) => product.id == id ? { ...product, name, price } : product)//condition ? true : false
        localStorage.setItem("products", JSON.stringify(updateData))
        toast.success("Product Update Successfully")

        // setName("")
        // setPrice("")
        navigate("/")
    }

    return (
        <div className='py-1 mx-1'>
            <h1 className='text-center text-4xl mb-10 font-bold'>Product Update Form</h1>
            <form className='grid grid-cols-1 gap-4 max-w-xl mx-auto' onSubmit={submit}>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter product name' className='border border-solid border-black px-6 py-4 rounded-md text-base' type="text" />
                <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Enter product price' className='border border-solid border-black px-6 py-4 rounded-md text-base' type='number' />
                <button className='bg-red-600 px-6 py-4 rounded-md text-white hover:bg-red-700 cursor-pointer text-lg' type='submit'>Update</button>
            </form>
        </div>
    )
}

export default ProductUpdate