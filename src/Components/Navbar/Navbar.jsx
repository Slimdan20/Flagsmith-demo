import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-deepPurple sticky top-0 z-50'>
      <nav className='flex justify-between items-center mx-2 py-2 sm:mx-6 lg:mx-20 sm:py-0'>
        <div>
          <img src="/images/logo.png" alt="" className='w-16 h-14 sm:w-28 sm:h-20' />
        </div>
        <div className='hidden sm:flex gap-6 text-lg font-medium text-gray-700'>
          <a href="#home" className='sm:mx-5 text-base font-medium text-white'>Home</a>
          <a href="#services" className='sm:mx-5 text-base font-medium text-white'>Services</a>
          <a href="#order" className='sm:mx-5 text-base font-medium text-white'>Order</a>
          <a href="#about" className='sm:mx-5 text-base font-medium text-white'>About</a>
          <a href="#footer" className='sm:mx-5 text-base font-medium text-white'>Contact</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

