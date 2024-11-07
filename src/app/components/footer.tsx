import React from 'react'
import Image from "next/image"

const Footer = () => {
  return (
    <div className='bg-[#043873] w-[1920px] h-[461px] top[5195px] left[1px] py-[140px] px-[220px] text-[#F7F7EE]'>
       <div  className='w-[1480px] h-[289px] gap[100px] flex flex-col justify-between'>
        <ul className='Info w-[1480] h-[169px] flex justify-around'>
            <div className='w-[295px] h-[169px] gap-[15px] flex flex-col'>
         <Image
            src="/assests/Logo.png"
            alt='l0go'
            width={211}
            height={69.81}
            className='w-[191px] h-[36px]'/>

         <p className='w-[240px] h-[120px] font-normal text-[18px] leading-[30px] tracking-[-0.02em] '>whitespace was created for the new ways we live and work.We make a better workspace around the world</p>
           </div>
            <ul className='w-[295px] h-[127px] gap-[15px]'>
                <li  className='font-bold text-[18px] leading-[21.78px] tracking-[-0.02em]'>Products</li>
                <li>Overview</li>
                <li>Pricing</li>
                <li>Customer stories</li>
            </ul>
            <ul className='w-[295px] h-[30px] gap-[15px]'>
            <li  className='font-bold text-[18px] leading-[21.78px] tracking-[-0.02em]'>Resources</li>
            <li>Blog</li>
            <li>Guides & Tutorials</li>
            <li>Help Center</li>
            </ul>
            <ul className='w-[295px] h-[127px] gap-[15px]'>
                <li className='font-bold text-[18px] leading-[21.78px] tracking-[-0.02em]'>Companies</li>
                <li>About us</li>
                <li>Carrers</li>
                <li>Media Kit</li>
            </ul>
            
        </ul>
        <div className='w-[1480px] h-[20px] '>
            <span className='w-[169px] h-5 gap-[60px] items-center ml-[600px]'>@2021 Whitespace LLC</span>
        </div>
       </div>
    </div>
  )
}

export default Footer
