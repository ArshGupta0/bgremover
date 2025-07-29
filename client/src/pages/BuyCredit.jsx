import React from 'react'
import { assets } from '../assets/assets'
import { plans } from '../assets/assets'

const BuyCredit = () => {
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      {/* Top Button */}
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>
        Our Plans
      </button>

      {/* Heading */}
      <h1 className='text-center mb-6 sm:mb-10 text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
        Choose the plan that's right for you
      </h1>

      {/* Plans Grid */}
      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, index) => (
          <div
            key={index}
            className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-700 hover:scale-105 transition-all duration-500'
          >
            {/* Logo */}
            <img width={40} src={assets.logo_icon} alt='Logo' />

            {/* Plan ID */}
            <p className='mt-3 font-semibold'>{item.id}</p>

            {/* Description */}
            <p className='text-sm'>{item.desc}</p>

            {/* Price and Credits */}
            <p className='my-6'>
              <span className='text-3xl font-medium'>₹{item.price}</span> / {item.credits} credits
            </p>

            {/* Payment Buttons (Disabled for UI only) */}
            <div className='flex flex-col'>
              <button
                className='w-full flex justify-center gap-2 border border-gray-400 mt-2 text-sm rounded-md py-2.5 min-w-52 hover:bg-blue-50 hover:border-blue-400 cursor-default'
                disabled
              >
                <img className='h-4' src={assets.razorpay_logo} alt="Razorpay" />
                <span>Pay with Razorpay</span>
              </button>

              <button
                className='w-full flex justify-center gap-2 border border-gray-400 mt-2 text-sm rounded-md py-2.5 min-w-52 hover:bg-blue-50 hover:border-blue-400 cursor-default'
                disabled
              >
                <img className='h-4' src={assets.stripe_logo} alt="Stripe" />
                <span>Pay with Stripe</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit
