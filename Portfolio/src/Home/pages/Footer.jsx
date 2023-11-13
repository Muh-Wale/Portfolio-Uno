import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6"

const Footer = () => {
    return (
        <div className='max-w-[1300px] bg-inherit mx-auto '>
            <div className='py-5 md:py-10 px-5 md:px-14 lg:px-24 block md:flex justify-between'>
                <div className='flex gap-2'>
                    <div>
                        <p className='text-[#181717] font-medium text-base md:text-lg lg:text-2xl'>I am thrilled to answer to <br /> your next project</p>
                    </div>
                    <div className='flex items-end relative right-14 md:right-16 lg:right-20'>
                        <FaArrowRightLong size={25} className=''/>
                    </div>
                </div>
                <div className=' md:block md:mt-0 mt-3 flex flex-col items-end justify-end'>
                    <div>
                        <a href='' className='text-[#181717] font-medium text-base md:text-lg lg:text-2xl'>makifkarasu@outlook.com</a>
                    </div>
                    <div className=''>
                        <p className='text-[#606060] text-sm'>View Resume</p>
                    </div>
                </div>
            </div>
            <div className=' mt-12 md:mt-24 py-5 px-5 md:px-14 lg:px-24'>
                <div className='block md:flex justify-between'>
                    <div>
                        Muhammad Akif   -2020
                    </div>
                    <div className='mt-2 md:mt-0 flex justify-between gap-3 md:gap-10'>
                        <a href="">Artisan</a>
                        <a href="">Linkedln</a>
                        <a href="">Twitter</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer