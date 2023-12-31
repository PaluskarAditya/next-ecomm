"use client"

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductByCategory } from '../features/productSlice';
import Product from './Product';

export default function CategoryProducts({ cat }) {
  const disp = useDispatch();
  const { all } = useSelector(state => state.products);
  useEffect(() => {
    disp(getProductByCategory(cat));
  }, [])

  return (
    <div className='flex justify-center items-center h-full w-full'>
      <div className='grid min-[391px]:grid-cols-4 grid-cols-1 gap-3 p-5 h-full w-full max-h-[200px]'>
        {
          all.length !== 0 ? all.map(el => <Product key={el._id} id={el._id} name={el.name} price={el.price} img={el.image} />) : ""
        }
      </div>
    </div>
  )
}
