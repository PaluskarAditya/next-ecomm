import React from 'react'

export default function ProductPageSkeletion() {
  return (
    <div className='h-full w-full grid grid-cols-2'>
      <div className='h-screen p-10'>
        <div className='bg-gray-300 h-full w-full animate-pulse'></div>
      </div>
      <div className='flex flex-col gap-5 justify-between items-center p-10 pl-0'>
        <div className='bg-gray-300 h-full w-full animate-pulse'></div>
        <div className='bg-gray-300 h-full w-full animate-pulse'></div>
        <div className='bg-gray-300 h-full w-full animate-pulse'></div>
        <div className='flex justify-between h-20 w-full items-center gap-5'>
          <button className='bg-gray-300 h-full w-full animate-pulse'></button>
          <button className='bg-gray-300 h-full w-full animate-pulse'></button>
        </div>
      </div>
    </div>
  )
}
