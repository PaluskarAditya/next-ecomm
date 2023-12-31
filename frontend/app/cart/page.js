"use client"

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add_qty, remove, sub_qty } from '../features/cartSlice';

export default function Page() {
  const { cart, total } = useSelector(state => state.cart);
  const disp = useDispatch();
  const handleRemove = (el) => {
    disp(remove(el))
  }
  
  const handleCheckout = () => {
    
  }

  return (
    <div className='min-[391px]:h-screen pt-[80px] flex gap-5 justify-center items-start p-10'>
      <div className='w-[75%] flex gap-5 max-[430px]:justify-center items-center max-[430px]:flex-col'>
        <div className='max-h-[470px] flex p-5 w-[60%] max-[430px]:w-full flex-col overflow-scroll gap-3 justify-start items-center'>
          {
            cart.length !== 0 ? cart?.map(el => <div key={el._id} className='flex w-full h-[160px] justify-between bg-gray-100/50 items-center'>
              <div className='flex justify-center h-full gap-4 items-center'>
                <img alt='product' src={el.image} className='w-40 min-w-40 h-40 object-cover object-center' />
                <div className='h-full flex-col flex justify-between items-start p-4 px-0'>
                  <div>
                    <h1 className='tracking-tighter'>{el.name}</h1>
                    <p className='tracking-tighter text-sm font-light text-gray-500'>{el.category}</p>
                    <div className='flex justify-between items-center gap-7'>
                      <p className='tracking-tighter text-sm font-light text-gray-500'>size {el.size}</p>
                      <div className='flex w-full justify-center items-center'>
                      <p className='tracking-tighter text-sm font-light text-gray-500'>quantity</p>
                      <div className='flex gap-1 ml-3 text-gray-500 font-light text-sm bg-gray-200 p-1 rounded-sm'>
                        <button className='px-1' onClick={() => disp(add_qty(el))}>+</button>
                        <span className='bg-white p-1 text-sm px-3'>{el.qty}</span>
                        <button className='px-1' onClick={() => disp(sub_qty(el))}>-</button>
                      </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-between items-center gap-10'>
                    <p className='tracking-tighter text-sm font-light text-gray-500 cursor-pointer' onClick={() => handleRemove(el)}>remove</p>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-start h-full p-5'>
                <p className='tracking-tighter text-sm font-light text-gray-500'>₹{el.price}</p>
              </div>
            </div>) : <h1 className='text-xl font-light tracking-tighter'>No items in cart</h1>
          }
        </div>
        <div className='w-[40%] max-[430px]:w-full  h-full flex flex-col justify-start items-center p-5 pl-0 max-[430px]:p-0'>
          <div className='bg-black w-full p-5 flex flex-col justify-center items-start max-[430px]:items-center gap-4'>
            <h1 className='text-white tracking-tighter text-xl'>Summary</h1>
            <div className='flex flex-col gap-1 w-full'>
              {cart.length !== 0 ? <><div className='flex flex gap-2 justify-between items-center w-full'>
                <p className='text-sm tracking-tighter text-white/80'>subtotal</p>
                <p className='text-sm tracking-tighter text-white/80'>₹{total}</p>
              </div>
                <div className='flex flex gap-2 justify-between items-center w-full'>
                  <p className='text-sm tracking-tighter text-white/80'>delivery charges</p>
                  <p className='text-sm tracking-tighter text-white/80'>₹30</p>
                </div>
                <div className='flex flex gap-2 justify-between items-center w-full'>
                  <p className='text-sm tracking-tighter text-white/80'>taxes</p>
                  <p className='text-sm tracking-tighter text-white/80'>₹20</p>
                </div>
                <div className='flex flex gap-2 justify-between mt-3 items-center w-full'>
                  <p className='text-sm tracking-tighter text-white/80'>Total</p>
                  <p className='text-sm tracking-tighter text-white/80'>₹{total}</p>
                </div></> : ""}
              <div className='flex flex-col gap-1 mt-3 w-full'>
                <button className='w-full p-2 tracking-tighter font-light bg-white' onClick={handleCheckout} >checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
