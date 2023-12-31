"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/userSlice';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function page() {
  const [cred, setCred] = useState({ uname: "", pass: "" });
  const { isLogin, error } = useSelector(state => state.user);
  const router = useRouter();
  const changeHandler = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  }
  const disp = useDispatch();
  const handleLogin = async () => {
    disp(login(cred));
  }

  useEffect(() => {
    if (error !== null) {
      toast.error(error)
    }
  }, [error])

  useEffect(() => {
    isLogin ? router.push('/') : "";
  }, [])

  useEffect(() => {
    if (isLogin) {
      // Display success toast
      toast.success('Login successful! Redirecting to home page...');

      // Redirect to home page after a delay (e.g., 2000 milliseconds)
      router.push('/')

      // Clear the timeout to avoid redirecting if the component unmounts
      return () => { };
    }
  }, [isLogin]);

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-semibold tracking-tighter text-2xl'>Login</h1>
        <div>
          <img src='/login.jpg' className='h-64 w-64 object-contain' />
        </div>
        <div className='flex flex-col w-full gap-2 justify-center items-center'>
          <div className='w-3/4 flex'>
            <input placeholder='Username' name='uname' onChange={e => changeHandler(e)} className='w-full p-3 tracking-tighter text-black text-sm bg-gray-100 outline-none' />
          </div>
          <div className='w-3/4 flex'>
            <input placeholder='Password' name='pass' onChange={e => changeHandler(e)} className='w-full p-3 tracking-tighter text-black text-sm bg-gray-100 outline-none' />
          </div>
          <div className='w-3/4 flex'>
            <button className='bg-black text-white text-sm tracking-tighter font-normal p-3 w-full' onClick={handleLogin}>Signin</button>
          </div>
          <p className='mt-2 text-sm tracking-tighter text-gray-500'>new here? <Link className='text-black' href={'/signup'}>Register</Link></p>
        </div>
      </div>
    </div>
  )
}
