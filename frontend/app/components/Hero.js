"use client"

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTop3 } from '../features/productSlice';
import Product from './Product';
import ProductSkeletion from './ProductSkeletion';

export default function Hero() {
  const disp = useDispatch();
  const { top3, loading } = useSelector(state => state.products);
  useEffect(() => {
    disp(getTop3());
  }, [])

  return (
    <div className='min-[391px]:h-screen max-[430px]:flex-col flex gap-10 justify-center items-center p-5 max-[430px]:pt-[100px]'>
      <div className='flex-1 flex flex-col justify-center items-end'>
        <h1 className='text-6xl mb-2 font-black tracking-tighter text-right'>Experience Elegance, Embrace Luxury</h1>
        <p className='text-sm tracking-tighter font-light'>Where Every Purchase is a Statement of Style</p>
      </div>
      <div className='flex-1 grid grid-cols-2 gap-3 justify-center items-center p-5'>
        <div className='w-full h-[70vh] max-h-[70vh]'>
          {
            loading ? <ProductSkeletion /> : <Product id={top3[0]?._id} key={top3[0]?._id} img={top3[0]?.image} name={top3[0]?.name} price={top3[0]?.price} />
          }
        </div>
        <div className='grid grid-rows-2 gap-3 h-[70vh] max-h-[70vh]'>
          {
            loading ? <ProductSkeletion /> : [1, 2].map(el => <Product id={top3[el]?._id} key={top3[el]?._id} img={top3[el]?.image} name={top3[el]?.name} price={top3[el]?.price} />)
          }
        </div>
      </div>
    </div>
  )
}
