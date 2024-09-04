"use client"

import { Button } from '@/components/ui/button'
import { LayoutGrid, Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import GlobalApi from '../_utils/GlobalApi'

function Header() {

    const [catergoryList, setCategoryList] = useState([])

    useEffect(() => {
     getCategoryList()
    }, [])

    const getCategoryList = () => {
        GlobalApi.getCategory().then(resp=>{
            console.log("CategoryList Resp:" ,resp.data.data);
            setCategoryList(resp.data.data)
        })
    }

    return (
        <div className='p-5 shadow-sm flex justify-between'>
            <div className='flex items-center gap-8'>
                <Image src='/logo.png' alt='logo' width={150} height={100} />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <h2 className='hidden md:flex gap-2 items-center border rounded-full p-2 px-10 
                bg-slate-200 cursor-pointer'>
                    <LayoutGrid className='h-5 w-5' /> Category</h2>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {catergoryList.map((category, index) => (
                         <DropdownMenuItem className="flex gap-3 items-center cursor-pointer">
                            <Image src={
                                process.env.NEXT_PUBLIC_BACKEND_BASE_URL+
                                category?.attributes?.icon?.data?.attributes?.url} alt='icon'
                                unoptimized={true}
                            width={30} height={30} />
                            <h2 className='text-md'>{category?.attributes?.name}</h2>
                         </DropdownMenuItem>
                        ))}

                    </DropdownMenuContent>
                </DropdownMenu>

                <div className='md:flex gap-3 items-center border rounded-full p-2 px-5 hidden'>
                    <Search />
                    <input placeholder='Search' type='text' className='outline-none' />
                </div>
            </div>

            <div className='flex gap-5 items-center'>
                <h2 className='flex gap-2 items-center text-lg'><ShoppingBag /> 0</h2>
                <Button>Login</Button>
            </div>
        </div>

    )
}

export default Header