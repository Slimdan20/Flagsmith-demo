import React from 'react'
import Link from 'next/link'

const Order = () => {
  return (
<div id='order' className='scroll-mt-16 sm:scroll-mt-20 bg-deepPurple'>
      <div className='mx-5 pt-14 grid sm:mx-12 lg:mx-24 sm:pt-24 sm:flex sm:justify-between'>
    <div className='text-white sm:basis-3/5 '>
      <h1 className='py-2 sm:py-4 text-3xl font-semibold'>Place an Order</h1>
      <p className='text-lg w-11/12 font-thin py-4 leading-7 sm:w-5/6 sm:leading-8 text-justify'>At sparkleen, we understand how demanding your schedule can be. That's why we are committed to making laundry effortless, fast and affordable. Whether for homes or businesses, we offer pickup, professional cleaning, and doorstep delivery all handled with care.</p>
    </div>
    <div className='text-white sm:basis-2/5'>
      <h1 className=' hidden sm:md:block text-3xl font-semibold py-10'>How it works</h1>
       <div className='bg-lavender rounded-md text-black w-60 sm:w-80 p-5 italic text-xl'>
        <p className='mb-1'>1. Place your order.</p>
        <p className='mb-1'>2. We pick up your laundry. </p>
        <p>3. Clean & deliver to your doorstep.</p>
        </div>
    </div>
    </div>
    <Link href="/form">
    <button className='ml-5 mt-1 mb-7 sm:mb-28 sm:ml-24 cursor-pointer bg-lavender text-black font-semibold px-4 py-2 rounded-xl'>Order Now</button>
    </Link>
    </div>
  )
}

export default Order
