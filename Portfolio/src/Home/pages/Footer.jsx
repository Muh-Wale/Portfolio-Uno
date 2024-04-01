import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6"

const Footer = () => {
    return (
        <div className='max-w-[1300px] bg-inherit mx-auto font-anb'>
            <div className='py-5 md:py-10 px-5 md:px-14 lg:px-24 block md:flex justify-between'>
                <div className='flex gap-2'>
                    <div>
                        <p className='text-[#181717] font-medium text-base md:text-lg lg:text-2xl'>I am thrilled to answer to <br /> your next project</p>
                    </div>
                    <div className='flex items-end relative right-14 md:right-16 lg:right-20'>
                        <FaArrowRightLong size={25} className='cursor-pointer'/>
                    </div>
                </div>
                <div className=' md:block md:mt-0 mt-3 flex flex-col items-end justify-end'>
                    <div>
                        <a href='' className='text-[#181717] font-medium text-base md:text-lg lg:text-2xl cursor-pointer'>muhammadolawale27@gmail.com</a>
                    </div>
                    <div className=''>
                        <a className='text-[#606060] text-sm cursor-pointer'>View Resume</a>
                    </div>
                </div>
            </div>
            <div className=' mt-12 md:mt-24 py-5 px-5 md:px-14 lg:px-24'>
                <div className='block md:flex justify-between'>
                    <div>
                        Waledxpert   -2023
                    </div>
                    <div className='mt-2 md:mt-0 flex gap-5 md:gap-10'>
                        <a href="" className=' hover:font-semibold duration-100 ease-linear'>Artisan</a>
                        <a href="" className=' hover:font-semibold duration-100 ease-linear'>Linkedln</a>
                        <a href="" className=' hover:font-semibold duration-100 ease-linear'>Twitter</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer