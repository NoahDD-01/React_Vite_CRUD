import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'



const ProductList = () => {
    const [products, setProduct] = useState(JSON.parse(localStorage.getItem("products") || []))

    const storeDate = JSON.parse(localStorage.getItem("products")) || []

    useEffect(() => {
        products

    }, [])

    const handleDelete = (id) => {
        const afterDelete = products.filter((product) => product.id != id)
        setProduct(afterDelete)
        localStorage.setItem("products", JSON.stringify(afterDelete))
        toast.success("Product Delete successfully")


    }


    return (
        <div className='pt-5'>
            <h1 className='text-2xl text-center font-bold'>Prduct List</h1>
            <table className='p-4 text-xl border border-solid border-black mt-5 mx-auto'>
                <thead>
                    <tr className='p-4 border border-solid border-black'>
                        <th className='p-4 border border-solid border-black'>No</th>
                        <th className='p-4 border border-solid border-black'>Name</th>
                        <th className='p-4 border border-solid border-black'>Price</th>
                        <th className='p-4 border border-solid border-black'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        return (
                            <tr className='p-4 border border-solid border-black' key={index}>

                                <td className='p-4 border border-solid border-black'>{index + 1}</td>
                                <td className='p-4 border border-solid border-black'>{product.name}</td>
                                <td className='p-4 border border-solid border-black'>{product.price}</td>
                                <td className='p-4 border border-solid border-black'>
                                    <Link to={`/product/update/${product.id}`} className='py-4 px-6 inline-block text-white cursor-pointer rounded-lg mr-4 bg-yellow-500'>Update</Link>
                                    <button onClick={() => handleDelete(product.id)} className='py-4 px-6 inline-block text-white cursor-pointer rounded-lg bg-red-500'>Delete</button>
                                </td>
                            </tr>
                        )

                    })}

                </tbody>


            </table>
        </div>
    )
}

export default ProductList