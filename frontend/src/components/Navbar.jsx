import React from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
    
      <img src={assets.logo} alt='logo' className='w-36' />
      <ul className=' hidden sm:flex gap-5  text-gray-700 '>
        <Link to='/'>Home </Link>
        <Link to='/about'>About </Link>
        <Link to='/contact'>Contact </Link>
        <Link to='/'>Collection</Link>
      </ul>

      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} alt='search' className='w-5 ' />
        <div>
            <Link to='/cart'>
                <img src={assets.profile_icon} alt='cart' className='w-5' />
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar