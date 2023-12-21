"use client"

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTop3 } from '../features/productSlice';

export default function Hero() {
  const disp = useDispatch();
  const { top3 } = useSelector(state => state.products);
  useEffect(() => {
    disp(getTop3());
    console.log(top3);
  }, [])

  return (
    <div className='h-screen flex gap-5 justify-center items-center'>
      <div className='flex-1 flex flex-col justify-center items-end'>
        <h1 className='text-6xl mb-2 font-black tracking-tighter text-right'>Experience Elegance, Embrace Luxury</h1>
        <p className='text-sm tracking-tighter font-light'>Where Every Purchase is a Statement of Style</p>
      </div>
      <div className='flex-1 grid grid-cols-2 h-[70vh]'>
        <div className='h-full w-full'>

        </div>
      </div>
    </div>
  )
}
