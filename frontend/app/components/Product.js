import React from 'react'

export default function Product({ img, name, price, id }) {
  return (
    <div className='h-full w-full relative'>
      <img src={img} alt='product' className='h-full w-full object-cover object-center hover:scale-105 transition' />
      <div className='absolute bottom-0 left-0 right-0 p-3 text-white flex flex-col justify-end items-start'>
        <h3 className='tracking-tighter text-sm font-medium'>{name}</h3>
        <p className='text-xs tracking-tighter font-light'>&#x20B9;{price}</p>
      </div>
    </div>
  )
}
