import React from 'react'

const Body = () => {
    return (
        <div className=' max-w-[1300px] mt-10 bg-inherit mx-auto py-5 px-5 md:px-14 lg:px-24 border-b-2 border-black'>
            <div className='block md:grid grid-cols-5 gap-5 md:gap-7 lg:gap-10'>
                <div className=' md:hidden flex justify-center'>
                    <img src="/src/assets/ProfilePhoto.png" alt="" className='max-h-[550px] rounded-md'/>
                </div>
                <div className=' flex flex-col justify-center mt-5 md:mt-0 col-span-3 w-full max-w-none md:max-w-[500px]'>
                    <div>
                        <h1 className=' font-semibold text-2xl lg:text-5xl text-[#181717]'>
                            Hi I’m Mehmet <br />Akif Karasu,<br /> A Web Developer.
                        </h1>
                    </div>
                    <div className='text-[#606060] font-medium text-base md:text-lg lg:text-2xl py-3 md:py-6 lg:py-11'>
                        <p>
                            My work is mainly focused on third-dimension modeling, texturing and rendering. I like exploring the creatures with a touch of dark surrealism for characters and production.
                        </p>
                        <span className='hidden md:block'><br /></span>
                        <p>
                            Now I’m an interactive media design student in Istanbul ⏤ currently freelancing and seeking internship opportunities.
                        </p>
                    </div>
                </div>
                <div className=' hidden col-span-2 md:flex justify-end'>
                    <img src="/src/assets/ProfilePhoto.png" alt="" className='max-h-[550px]'/>
                </div>
            </div>
            <div className='my-10'>
                <div>
                    <div className='block md:flex max-w-none lg:max-w-[700px] justify-between'>
                        <div className=''>
                            <h1 className=''>Main Software</h1>
                        </div>
                        <div className=' max-w-none w-full md:w-9/12 mt-3 md:mt-0'>
                            <p>Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold Renderer, Blender, Forger</p>
                        </div>
                    </div>
                    <div className='block md:flex max-w-none lg:max-w-[700px] justify-between'>
                        <div className='mt-5 md:mt-0'>
                            <h1 className=''>Main Software</h1>
                        </div>
                        <div className=' max-w-none w-full md:w-9/12 mt-3 md:mt-0'>
                            <p>Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold Renderer, Blender, Forger</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body