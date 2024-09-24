import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=''>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-base'>
          <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                We provide the best quality products for you. We have a wide range of products for you.
            </p>
          </div>
          <div>
            <p className='text-xl font-medium mb-5 '>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91- 987654321</li>
                <li>contact@gmail.com</li>
            </ul>
          </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ SamCart - All Rights Reserved. </p>
        </div>
    </div>
  )
}

export default Footer