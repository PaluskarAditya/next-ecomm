"use client"

import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/userSlice';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { isLogin } = useSelector(state => state.user);
  const router  = useRouter();
  const disp = useDispatch();
  const handleLogout = () => {
    disp(logout());
    localStorage.clear();
    toast.success('Logged out', { dismissible: true });
    router.push('/login');
  }

  return (
    <nav className='fixed z-40 top-0 left-0 right-0 p-5 flex justify-between items-center bg-white/90 backdrop-blur-sm'>
      <ul>
        <li className='flex justify-center items-center gap-2'>
          <img src='../favicon.ico' className='h-[40px] w-[40px]' />
          <Link href={'/'} className='tracking-tighter text-xl font-thin'>LuxeCart</Link>
        </li>
      </ul>
      <ul className='flex justify-center items-center gap-3'>
        {
          isLogin ? <li>
            <button className='bg-black text-white p-2 py-1 text-xs font-light tracking-tighter' onClick={handleLogout}>logout</button>
          </li> : ""
        }
        <li>
          <Link href={'/cart'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
