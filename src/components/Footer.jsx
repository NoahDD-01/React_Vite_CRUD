import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='border border-solid bg-gray-600 items-center mt-20 h-35 justify-center text-center flex gap-50'>
            <div className='text-left'>
                <ul className='font-bold gap-3 justify-center items-center'>
                    <li><Link to="https://www.facebook.com/">FaceBook</Link></li>
                    <li><Link to="https://telegram.org/">Telegram</Link></li>
                    <li><Link to="https://mail.google.com/ ">Gmail</Link></li>
                </ul>
            </div>
            <div className='text-left'>
                <ul>
                    <li>© All rights reserved</li>
                    <li>PrivacyTerms</li>
                </ul>
            </div>



        </div>
    )
}

export default Footer