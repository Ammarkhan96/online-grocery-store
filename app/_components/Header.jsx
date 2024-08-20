import { LayoutGrid, Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
        <div className='flex items-center gap-8'>
        <Image src='/logo.png' alt='logo' width={150} height={100}/>
            <h2 className='flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200'> 
            <LayoutGrid className='h-5 w-5' /> Category</h2>

            <div className='flex gap-3 items-center border rounded-full p-2'>
                <Search  />
                <input placeholder='Search' type='text' />
            </div>
        </div>
    </div>
    
  )
}

export default Header