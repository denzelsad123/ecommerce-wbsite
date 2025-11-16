import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb--5' alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer hassle free exchange policy </p>
        </div>
        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb--5' alt="" />
            <p className='font-semibold'>6 Days Return Policy</p>
            <p className='text-gray-400'>This shop offer 6 days return policy for any products cannot exceed the limit or else it will be invalid </p>
        </div>
        <div>
            <img src={assets.support_img} className='w-12 m-auto mb--5' alt="" />
            <p className='font-semibold'>Costumers Support</p>
            <p className='text-gray-400'>We offer a 24/7 costumers support </p>
        </div>
    </div>
  )
}

export default OurPolicy
