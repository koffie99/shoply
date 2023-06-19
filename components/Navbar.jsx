"use client"
import React from 'react'
import Image from 'next/image'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <div className='h-[10vh] bg-white flex items-center justify-between md:px-24 sm:px-10 fixed top-0 w-full nav'>
        <div><h1 className='font-semibold mb-8 text-lg text-[mediumseagreen]'>Shoply</h1></div>
        <div>
            <ShoppingCartIcon />
        </div>
    </div>
  )
}

export default Navbar