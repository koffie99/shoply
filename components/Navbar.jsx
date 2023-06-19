"use client"
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='h-[10vh] bg-white flex items-center justify-between px-15 shadow-lg w-full nav'>
        <Link href="/" className='font-semibold pl-10 pr-10 text-lg text-[mediumseagreen]'>Shoply</Link>
        <p className='text-[#242424] pl-10 pr-10'>Welcome, User</p>
    </div>
  )
}

export default Navbar