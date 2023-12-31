"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { register } from '../features/userSlice';

export default function Page() {
  const [ cred, setCred ] = useState({ uname: "", pass: "", email: "" });
  const changeHandler = (e) => {
    setCred({...cred, [e.target.name]: e.target.value});
  }
  const disp = useDispatch();

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-semibold tracking-tighter text-2xl'>Register</h1>
        <div>
          <img alt='product' src='/signup.jpg' className='h-64 w-64 object-contain' />
        </div>
        <div className='flex flex-col w-full gap-2 justify-center items-center'>
          <div className='w-3/4 flex'>
            <input placeholder='Email' name='email' onChange={e => changeHandler(e)} className='w-full p-3 tracking-tighter text-black text-sm bg-gray-100 outline-none' />
          </div>
          <div className='w-3/4 flex'>
            <input placeholder='Username' name='uname' onChange={e => changeHandler(e)} className='w-full p-3 tracking-tighter text-black text-sm bg-gray-100 outline-none' />
          </div>
          <div className='w-3/4 flex'>
            <input placeholder='Password' name='pass' onChange={e => changeHandler(e)} className='w-full p-3 tracking-tighter text-black text-sm bg-gray-100 outline-none' />
          </div>
          <div className='w-3/4 flex'>
            <button className='bg-black text-white text-sm tracking-tighter font-normal p-3 w-full' onClick={() => disp(register(cred))}>Signup</button>
          </div>
          <p className='mt-2 text-sm tracking-tighter text-gray-500'>have an account? <Link className='text-black' href={'/login'}>Login</Link></p>
        </div>
      </div>
    </div>
  )
}