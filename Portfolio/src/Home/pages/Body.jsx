import React from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'
import Typewriter from 'typewriter-effect'
import { motion, AnimatePresence } from "framer-motion";
import DP from '/src/assets/ProfilePhoto.png'



const Body = () => {

    return (
        <div className=' max-w-[1300px] mt-10 bg-inherit mx-auto py-5 px-5 md:px-14 lg:px-24 border-b-2 border-black font-anb'>
            <div className='block md:grid grid-cols-6 gap-5 md:gap-7 lg:gap-10'>
                <div className=' md:hidden flex justify-center'>
                    <img src={DP} alt="" className='max-h-[550px] rounded-md'/>
                </div>
                <div className=' flex flex-col justify-center mt-5 md:mt-0 col-span-3 w-full max-w-none md:max-w-[500px]'>
                    <div>
                        <h1 className=' font-semibold text-2xl md:text-3xl lg:text-5xl text-[#181717]'>
                            Hi I’m Muhammad <br />Abdulazeez,<br /> A Web Developer.
                        </h1>
                    </div>
                    <div className='text-[#606060] font-medium text-base md:text-lg lg:text-xl py-3 md:py-4 lg:py-11'>
                        <div className=' w-full'>
                            <RiDoubleQuotesL size={30}/>
                        </div>
                        <div className=' mx-3 font-ans'>
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: -0.0001,
                                    pauseFor: 999999999,
                                    strings: [
                                        "I am a passionate web developer withexperience in designing and developing responsive websites. I specialize in front-end development and have a strong understanding of HTML, CSS, and JavaScript. I am also proficient in using React and CSS frameworks.\n I am a creative problem solver and enjoy working on challenging projects."
                                    ]
                                }}
                            />
                        </div>
                        <div className=' w-full flex justify-end'>
                            <RiDoubleQuotesR size={30}/>
                        </div>
                    </div>
                </div>
                <div className=' hidden col-span-3 md:flex justify-end'>
                    <img src="/src/assets/ProfilePhoto.png" alt="" className=' max-h-[550px]'/>
                </div>
            </div>
            <div className='my-10'>
                <div className=' text-sm'>
                    <div className='block md:flex max-w-none lg:max-w-[700px] justify-between'>
                        <div className=''>
                            <h1 className=' font-semibold md:font-normal'>Main Languages</h1>
                        </div>
                        <div className=' max-w-none w-full md:w-9/12 mt-3 md:mt-0'>
                            <p>Html, CSS, SCSS, Bootstrap, Tailwind, Javascript, Typescript, React JS</p>
                        </div>
                    </div>
                    {/* <div className='block md:flex max-w-none lg:max-w-[700px] justify-between'>
                        <div className='mt-5 md:mt-0'>
                            <h1 className=''>Frameworks</h1>
                        </div>
                        <div className=' max-w-none w-full md:w-9/12 mt-3 md:mt-0'>
                            <p>Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold Renderer, Blender, Forger</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Body