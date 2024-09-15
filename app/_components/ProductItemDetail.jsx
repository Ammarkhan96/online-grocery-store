"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ShoppingBasket } from 'lucide-react'

function ProductItemDetail({product}) {

    const [productTotalPrice, setProductTotalPrice] = useState(
        product.attributes.sellingPrice?
        product.attributes.sellingPrice:
        product.attributes.mrp
    )

    const [quantity, setQuantity] = useState(1)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black'>
      <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+product.attributes.images.data[0].attributes.url}
      alt='image' width={300} height={300}
      className='bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg' />
      <div className='flex flex-col gap-3'>
        <h2 className='text-2xl font-bold'>{product.attributes.name}</h2>
        <h2 className='text-sm text-gray-500'>{product.attributes.description}</h2>
        <div className='gap-3 flex text-3xl'>
        {product.attributes.sellingPrice &&
          <h2 className=' text-lg'>Rs. {product.attributes.sellingPrice}</h2>
        }
        <h2 className={` ${product.attributes.sellingPrice && 'line-through text-gray-500'}`}>
          Rs. {product.attributes.mrp}</h2>
      </div>
      <h2 className='font-medium text-lg'>Qauntity ({product.attributes.itemQuantityType})</h2>
      <div className='flex flex-col items-baseline gap-3'>
        <div></div>
        <div className='p-2 border flex gap-10 items-center px-5'>
            <button>-</button>
            <h2>{quantity}</h2>
            <button>+</button>
        </div>
        <Button className='flex gap-3'>
            <ShoppingBasket />
            Add To Cart
        </Button>
      </div>
      <h2><span className='font-bold'>Category: </span>{product.attributes.categories.data[0].attributes.name}</h2>
      </div>
    </div>
  )
}

export default ProductItemDetail