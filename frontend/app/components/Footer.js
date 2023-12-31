import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black mt-10 text-white p-6">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
          <h2 className="text-2xl font-normal mb-4 tracking-tighter">LuxeCart</h2>
          <p className='text-sm font-thin tracking-tighter w-1/2'>A premium destination for luxury shopping.</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
          <h2 className="text-xl font-normal tracking-tighter mb-4">Quick Links</h2>
          <ul>
            <li><Link href="/" className='text-sm font-thin tracking-tighter'>Home</Link></li>
            <li><Link href="/shop" className='text-sm font-thin tracking-tighter'>Shop</Link></li>
            <li><Link href="/about" className='text-sm font-thin tracking-tighter'>About Us</Link></li>
            <li><Link href="/contact" className='text-sm font-thin tracking-tighter'>Contact</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
          <h2 className="text-xl font-normal tracking-tighter mb-4">Categories</h2>
          <ul>
            <li><Link href="/categories/clothing" className='text-sm font-thin tracking-tighter'>Clothing</Link></li>
            <li><Link href="/categories/accessories" className='text-sm font-thin tracking-tighter'>Accessories</Link></li>
            <li><Link href="/categories/footwear" className='text-sm font-thin tracking-tighter'>Footwear</Link></li>
            <li><Link href="/categories/electronics" className='text-sm font-thin tracking-tighter'>Electronics</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <h2 className="text-xl font-normal tracking-tighter mb-4">Contact Us</h2>
          <p className='text-sm font-thin tracking-tighter'>123 Luxe Street, Cityville</p>
          <p className='flex items-center justify-start gap-1 text-sm font-thin tracking-tighter'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
          </svg> info@luxecart.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
