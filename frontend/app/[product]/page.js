"use client"

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../features/productSlice';
import ProductPageSkeletion from '../components/ProductPageSkeletion';
import { add } from '../features/cartSlice';
import SizeDropdown from '../components/Sizes';
import { toast } from 'sonner';

export default function Page() {
  const params = useParams();
  const disp = useDispatch();
  const { product, loading } = useSelector(state => state.products);
  useEffect(() => {
    disp(getSingleProduct(params.product));
  }, [])

  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  
  const handleAdd = () => {
    const prod = {
      id: product._id,
      name: product.name,
      image: product.image,
      desc: product.description,
      qty: 1,
      category: product.category,
      price: product.price,
      size: selectedSize
    }
    disp(add(prod));
    toast.success('Item added to the cart');
  }
  
  return (
    <div className='min-[391px]:h-screen flex'>
      {loading ? <ProductPageSkeletion /> : <div className='h-full w-full flex flex-col'>
      <div className='h-screen pt-[78px] p-10 flex-1'>
        <img alt='product' src={product.image} className='h-full w-full object-cover object-center' />
      </div>
      <div className='flex flex-1 pt-[74px] flex-col gap-5 justify-start items-start pl-0 max-[390px]:p-10 p-10'>
        <div className='flex justify-start items-center'>
          <h1 className='text-left tracking-tighter font-semibold text-3xl'>{product.name}</h1>
        </div>
        <div className='flex flex-col'>
          <p className='text-md mb-2 font-light tracking-tighter'>{product.description}</p>
          <p className='text-sm font-light tracking-tighter text-gray-500'>rating: {product.rating}</p>
          {product.sizes ? <SizeDropdown selectedSize={selectedSize} handleSizeChange={handleSizeChange} sizes={product.sizes} /> : ""}
        </div>
        <div className='flex justify-between h-14 w-full items-center gap-5'>
          <button className='bg-black text-white w-full h-full tracking-tighter font-thin' onClick={handleAdd}>add to cart</button>
          <button className='bg-black text-white w-full h-full tracking-tighter font-thin'>buy now</button>
        </div>
      </div>
    </div>}
    </div>
  )
}
