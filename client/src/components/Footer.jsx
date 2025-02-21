import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20 '>
        <img src={assets.logo} alt="Logo" width={150}/>
        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>&copy;Copyright Shivansh Agrawal | All right reserved.</p>

        <div className='flex gap-2.5'>
            <img src={assets.facebook_icon} alt="Facebook Icons" width={35} className='cursor-pointer hover:scale-110 transition-all duration-300' />
            <img src={assets.twitter_icon} alt="Twitter Icons" width={35} className='cursor-pointer hover:scale-110 transition-all duration-300'/>
            <img src={assets.instagram_icon} alt="Instagram Icons" width={35} className='cursor-pointer hover:scale-110 transition-all duration-300' />
        </div>
    </div>
  )
}

export default Footer