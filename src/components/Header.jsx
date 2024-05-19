"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { signIn, useSession, signOut } from 'next-auth/react'
import Modal from 'react-modal'
import {IoMdAddCircleOutline} from 'react-icons/io'
import { HiCamera } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

export default function Header() {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false)
    console.log(session)
  return (
    <div className='shadow-sm border-b border-slate-500 sticky top-0 bg-slate-700 z-30 p-3'>
        <div className='flex justify-between items-center max-w-6xl mx-auto'>
        {/*logo*/}
        
        <Link href="/" className='hidden lg:inline-flex'>
            <Image
            src='/logo.png'
            width={96} 
            height={96} 
            alt='enduan max'
            />
        </Link>

        <Link href="/" className='lg:hidden inline-flex'>
            <Image
            src='/min-logo.png'
            width={40} 
            height={40} 
            alt='enduan max'
            />
        </Link>
        
        {/*search input*/}

        <input type="text" placeholder="Search" className='bg-slate-700 border-zinc-400 border-2 rounded text-sm w-full py-2 px-4 max-w-[210px] ' />

        {/*menu items*/}

        {session ? (
            <div className='flex gap-2 items-center'>
            <IoMdAddCircleOutline className='text-2xl cursor-pointer transform hover:scale-125 transition duration-300 hover:text-red-600' onClick={()=>setIsOpen(true)}/>
            <img src={session.user.image} 
            alt={session.user.name} 
            className='h-10 w-10 rounded-full cursor-pointer' 
            onClick={signOut} />
            </div>
        ):(
            <button 
            onClick={signIn} 
            className='text-sm font-semibold text-blue-500'>Log In</button>
        )}

        </div>
        {
            isOpen && (
                <Modal isOpen={isOpen} className={"max-w-lg w-[90%] p-6 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-slate-600 border-2 rounded-md shadow-md"} onRequestClose={() =>setIsOpen(false)} ariaHideApp={false}>
                    <div className='flex flex-col justify-center items-center h-[100%]'>
                        <HiCamera className='text-5xl text-gray-400 cursor-pointer'/>
                    </div>
                    <input type="text" maxLength={150} placeholder='Please enter your caption...' className='m-4 border-none text-center w-full focus:ring-0 outline-none' />
                    <button disabled
                    className='w-full bg-red-600 text-white p-2 shadow-md rounded-lg hover:brightness-105 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:hover:brightness-100'>Upload Post</button>
                    <AiOutlineClose className='cursor-pointer absolute top-2 right-2 hover:text-red-600 transition duration-300' onClick={() => setIsOpen(false)} />
                </Modal>
            )
        }
    </div>
  )
}
