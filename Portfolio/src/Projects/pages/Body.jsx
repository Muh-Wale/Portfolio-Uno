import React from 'react'
import { FaArrowDownLong } from "react-icons/fa6"
import Typewriter from 'typewriter-effect'
import { motion, AnimatePresence } from "framer-motion";
import webflow from '/src/assets/Webflow.png'
import thumbnail from '/src/assets/Thumbnail.png'

const containerVariants = {
    hidden: { 
        opacity: 0, 
        x: '100vw' 
    },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { type: 'spring', delay: 0.5 }
    },
    exit: {
        x: "-100vh",
        transition: { ease: 'easeInOut' }
    }
};
const loaderVariants = {
    animation: {
        y: [0, -40],
        x: 0,
        transition: {
            y: {
            yoyo: Infinity,
            duration: 0.25,
            ease: 'easeOut'
            }
        }
    }
};

const Body = () => {
    return (
        <div className=' max-w-[1300px] mt-10 bg-inherit mx-auto py-5 px-5 md:px-14 lg:px-24 font-anb'>
            <div className=' mb-10'>
                <div className=' mt-5 md:mt-0 w-full max-w-none md:max-w-[600px]'>
                    <h1 className=' font-semibold text-2xl lg:text-4xl text-[#181717] font-anb'>
                        Hello, I’m <br /> <span className=' tracking-[8px] md:tracking-[0px] text-3xl lg:text-5xl'>Muhammad</span> <br /><span className=' tracking-[8px] md:tracking-[0px] text-3xl lg:text-5xl'>Abdulazeez.</span>
                    </h1>
                </div>
                {/* <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className='text-[#606060] font-medium text-base md:text-lg lg:text-2xl flex justify-end mt-2 md:mt-0 mr-0 md:mr-[50px] static md:relative bottom-7'>
                    <p className='font-ans'>
                        A senior-year design student who trying <br /> to specialize in 3D modeling & texturing.
                    </p>
                </motion.div> */}
                <div className='flex justify-end'>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className='text-[#606060] font-medium text-base md:text-lg lg:text-2xl flex justify-end mt-2 md:mt-0 mr-0 md:mr-[50px] static md:relative bottom-7 font-ans w-[400px] lg:w-[450px]'
                    >
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 20,
                                pauseFor: 999999999,
                                strings: [
                                    " I am a team player and enjoy collaborating with others to achieve project goals."
                                ]
                            }}
                        />
                    </motion.div>
                </div>
            </div>
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 0.75 }}
                className='w-fit'
            >
                <FaArrowDownLong size={25} className='cursor-pointer'/>
            </motion.div>
            <div className=' mt-8'>
                <div className='block md:grid grid-cols-5 gap-5 max-h-fit md:max-h-[500px] py-8 md:py-16 border-b-2 border-black'>
                    <div className=' col-span-2 h-full'>
                        <div className='block md:hidden'>
                            <img src={webflow} alt="" />
                        </div>
                        <div className=' mt-3 md:mt-0 h-fit md:h-1/2'>
                            <div className=' font-semibold'>
                                <p>01 / Webflow</p>
                            </div>
                            <div className=' md:text-[15px] sm:text-base lg:text-base font-semibold pt-3 md:pt-7 font-anc'>
                                A comprehensive construction materials website, Showcasing a diverse catalog of high-quality building supplies, ensuring easy access for costumers. Enhances user experience through intuitive navigation and detailed product descriptions. Demonstrated commitment to delivering exceptional service and facilitating successful construction projects.
                            </div>
                            <div className=' text-[#606060] text-sm py-3 md:py-4 lg:py-7'>
                                Built with React JS and Tailwind CSS
                            </div>
                        </div>
                        <div className=' h-fit md:h-1/2 block md:flex items-end'>
                            <div className=''>
                                <a href="https://webflow-lake.vercel.app/" 
                                    className='my-c my-c::after my-c:hover:after'
                                >
                                    More shots from this project ↗
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='hidden col-span-3 md:flex justify-end w-full max-h-fit md:max-h-[420px]'>
                        <img src={webflow} alt="" />
                    </div>
                </div>
                <div className='block md:grid grid-cols-5 gap-5 max-h-fit md:max-h-[450px] py-8 md:py-16 border-b-2 border-black'>
                    <div className=' col-span-2 h-full'>
                        <div className='block md:hidden'>
                            <img src={thumbnail} alt="" />
                        </div>
                        <div className=' mt-3 md:mt-0 h-fit md:h-1/2'>
                            <div className=' font-semibold'>
                                <p>02 / PROJECT NAME</p>
                            </div>
                            <div className=' md:text-[15px] sm:text-base lg:text-base font-semibold pt-3 md:pt-7 font-anc'>
                                Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.
                            </div>
                            <div className=' text-[#606060] text-sm py-3 md:py-4 lg:py-7'>
                                Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.
                            </div>
                        </div>
                        <div className=' h-fit md:h-1/2 block md:flex items-end'>
                            <div className=''>
                                <a href="" 
                                    className='my-c my-c::after my-c:hover:after'
                                >
                                    More shots from this project ↗
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='hidden col-span-3 md:flex justify-end w-full max-h-fit md:max-h-[420px]'>
                        <img src={thumbnail} alt="" />
                    </div>
                </div>
                <div className='block md:grid grid-cols-5 gap-5 max-h-fit md:max-h-[450px] py-8 md:py-16 border-b-2 border-black'>
                    <div className=' col-span-2 h-full'>
                        <div className='block md:hidden'>
                            <img src={thumbnail} alt="" />
                        </div>
                        <div className=' mt-3 md:mt-0 h-fit md:h-1/2'>
                            <div className=' font-semibold'>
                                <p>03 / PROJECT NAME</p>
                            </div>
                            <div className=' md:text-[15px] sm:text-base lg:text-base font-semibold pt-3 md:pt-7 font-anc'>
                                Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.
                            </div>
                            <div className=' text-[#606060] text-sm py-3 md:py-4 lg:py-7'>
                                Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.
                            </div>
                        </div>
                        <div className=' h-fit md:h-1/2 block md:flex items-end'>
                            <div className=''>
                                <a href="" 
                                    className='my-c my-c::after my-c:hover:after'
                                >
                                    More shots from this project ↗
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='hidden col-span-3 md:flex justify-end w-full max-h-fit md:max-h-[420px]'>
                        <img src={thumbnail} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className=' mt-12 md:mt-24 py-5'>
                    <div className='block md:flex justify-between font-anb'>
                        <div>
                            Waledxpert   -2020
                        </div>
                        <div className='mt-2 md:mt-0 flex gap-5 md:gap-10'>
                            <a href="" className=' hover:font-semibold duration-100 ease-linear'>Artisan</a>
                            <a href="" className=' hover:font-semibold duration-100 ease-linear'>Linkedln</a>
                            <a href="" className=' hover:font-semibold duration-100 ease-linear'>Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body