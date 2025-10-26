import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-5 bg-gray-400'>
            <div>
                <h1 className='text-3xl font-bold'>LOGO</h1>
            </div>
            <ul className='flex items-center  gap-4'>
                <li className='text-2xl bg-black text-white py-4 px-6 rounded-4xl'>
                    <Link to={'/'}>Product List</Link></li>
                <li className='text-2xl bg-black text-white py-4 px-6 rounded-4xl'>
                    <Link to={'/product/create'}>Product Create</Link></li>
            </ul>
        </div>
    )
}

export default Header