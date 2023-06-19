"use client"
import React from 'react'
import Image from 'next/image'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <div className='h-[10vh] bg-white flex items-center justify-between px-24 fixed w-full'>
        <div><h1 className='font-semibold text-lg text-[mediumseagreen]'>Shoply</h1></div>
        <div>
            <ShoppingCartIcon />
        </div>
    </div>
  )
}

export default Navbar