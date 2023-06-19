import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image';

const Products = async () => {

 const res = await fetch("https://fakestoreapi.com/products");
 const products = await res.json();

 const shortenText = (text, maxNum) => {
    return text.substring(0, maxNum) + "...";
 }

  return (
    <div className='min-h-screen bg-[#f1f1f1]'>
        <Navbar />
        <div className='md:p-24 sm:p-8 mt-5 flex gap-6 justify-center flex-wrap w-full'>
            {
                products.map((product) => (
                    <div className='bg-white rounded-lg p-8 w-[90%] md:w-[350px] flex flex-col items-center gap-3 hover:shadow-2xl cursor-pointer'>
                        <img src={product.image} alt="product image" className='h-[25vh]'/>
                        <div>
                            <h1 className='mt-3 mb-3 font-semibold text-lg text-[#242424]'>{product.title}</h1>
                            <p className='text-[#818181]'>{shortenText(product.description, 70)}</p>
                        </div>
                    </div>
                ))
            };
        </div>
    </div>
  )
}

export default Products