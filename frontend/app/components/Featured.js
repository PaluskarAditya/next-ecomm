"use client"

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductSkeletion from './ProductSkeletion';
import Product from './Product';
import { getFeatured } from '../features/productSlice';
import Link from 'next/link';

export default function Featured() {
  const { featured, loading } = useSelector(state => state.products);
  const disp = useDispatch();
  useEffect(() => {
    disp(getFeatured());
  }, [])

  return (
    <div className='h-[450px] flex justify-center items-center flex-col gap-5 p-5 py-10 pb-10'>
      <h1 className='tracking-tighter font-normal text-xl'>Featured products</h1>
      <div className='grid min-[431px]:grid-cols-4 grid-cols-2 gap-3 h-full w-[75%]'>
        {
          loading ? <ProductSkeletion /> : featured?.map(el => <Product id={el._id} key={el._id} name={el.name} price={el.price} img={el.image} />)
        }
      </div>
      <div>
        <Link href={'/products'} className='text-xs text-gray-500 font-light'>explore all &rarr;</Link>
      </div>
    </div>
  )
}
