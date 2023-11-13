import React from 'react'
import { FaArrowDownLong } from "react-icons/fa6"

const Body = () => {
    return (
        <div className=' max-w-[1300px] mt-10 bg-inherit mx-auto py-5 px-5 md:px-14 lg:px-24'>
            <div className=' mb-10'>
                <div className=' mt-5 md:mt-0 w-full max-w-none md:max-w-[600px]'>
                    <h1 className=' font-semibold text-2xl lg:text-4xl text-[#181717]'>
                        Hello, I’m <br /> <span className=' tracking-[8px] lg:tracking-[6px] text-3xl lg:text-5xl'>Muhammad</span> <br /><span className=' tracking-[8px] lg:tracking-[6px] text-3xl lg:text-5xl'>Abdulazeez.</span>
                    </h1>
                </div>
                <div className='text-[#606060] font-medium text-base md:text-lg lg:text-2xl flex justify-end mt-2 md:mt-0 mr-0 md:mr-20 static md:relative bottom-7'>
                    <p>
                        A senior-year design student who trying <br /> to specialize in 3D modeling & texturing.
                    </p>
                </div>
            </div>
            <div>
                <FaArrowDownLong size={25}/>
            </div>
            <div className=' mt-8'>
                <div className='block md:grid grid-cols-5 gap-5 max-h-fit md:max-h-[450px] py-8 md:py-16 border-b-2 border-black'>
                    <div className=' col-span-2 h-full'>
                        <div className='block md:hidden'>
                            <img src="/src/assets/Thumbnail.png" alt="" />
                        </div>
                        <div className=' mt-3 md:mt-0 h-fit md:h-1/2'>
                            <div className=' font-medium'>
                                <p>01 / PROJECT NAME</p>
                            </div>
                            <div className='font-semibold pt-3 md:pt-7'>
                                Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.
                            </div>
                            <div className=' text-[#606060] text-sm py-3 md:py-7'>
                                Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.
                            </div>
                        </div>
                        <div className=' h-fit md:h-1/2 block md:flex items-end'>
                            <div className=''>
                                <a href="" className='underline'>More shots from this project ↗</a>
                            </div>
                        </div>
                    </div>
                    <div className='hidden col-span-3 md:flex justify-end'>
                        <img src="/src/assets/Thumbnail.png" alt="" />
                    </div>
                </div>
                <div className='block md:grid grid-cols-5 gap-5 max-h-fit md:max-h-[450px] py-8 md:py-16 border-b-2 border-black'>
                    <div className=' col-span-2 h-full'>
                        <div className='block md:hidden'>
                            <img src="/src/assets/Thumbnail.png" alt="" />
                        </div>
                        <div className=' mt-3 md:mt-0 h-fit md:h-1/2'>
                            <div className=' font-medium'>
                                <p>01 / PROJECT NAME</p>
                            </div>
                            <div className='font-semibold pt-3 md:pt-7'>
                                Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.
                            </div>
                            <div className=' text-[#606060] text-sm py-3 md:py-7'>
                                Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.
                            </div>
                        </div>
                        <div className=' h-fit md:h-1/2 block md:flex items-end'>
                            <div className=''>
                                <a href="" className='underline'>More shots from this project ↗</a>
                            </div>
                        </div>
                    </div>
                    <div className='hidden col-span-3 md:flex justify-end'>
                        <img src="/src/assets/Thumbnail.png" alt="" />
                    </div>
                </div>
                <div className='block md:grid grid-cols-5 gap-5 max-h-fit md:max-h-[450px] py-8 md:py-16 border-b-2 border-black'>
                    <div className=' col-span-2 h-full'>
                        <div className='block md:hidden'>
                            <img src="/src/assets/Thumbnail.png" alt="" />
                        </div>
                        <div className=' mt-3 md:mt-0 h-fit md:h-1/2'>
                            <div className=' font-medium'>
                                <p>01 / PROJECT NAME</p>
                            </div>
                            <div className='font-semibold pt-3 md:pt-7'>
                                Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.
                            </div>
                            <div className=' text-[#606060] text-sm py-3 md:py-7'>
                                Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.
                            </div>
                        </div>
                        <div className=' h-fit md:h-1/2 block md:flex items-end'>
                            <div className=''>
                                <a href="" className='underline'>More shots from this project ↗</a>
                            </div>
                        </div>
                    </div>
                    <div className='hidden col-span-3 md:flex justify-end'>
                        <img src="/src/assets/Thumbnail.png" alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className=' mt-12 md:mt-24 py-5'>
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
        </div>
    )
}

export default Body