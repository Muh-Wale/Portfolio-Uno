// import React from 'react'
import { FaArrowDownLong } from "react-icons/fa6"
import Typewriter from 'typewriter-effect'
import { motion } from "framer-motion";
import webflow from '/src/assets/Webflow.png'
import Portfolio_Uno from '/src/assets/Portfolio_Uno.png'
import solveit from '/src/assets/solveit.png'
import enhance from '/src/assets/enhance.png'
import estate from '/src/assets/ni.jpeg'
import web from '/src/assets/ji.jpeg'

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
// const loaderVariants = {
//     animation: {
//         y: [0, -40],
//         x: 0,
//         transition: {
//             y: {
//             yoyo: Infinity,
//             duration: 0.25,
//             ease: 'easeOut'
//             }
//         }
//     }
// };

const Body = () => {
    return (
        <div className=' max-w-[1300px] mt-10 bg-inherit mx-auto py-5 px-5 md:px-14 xsxl:px-24 font-anb'>
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
                <FaArrowDownLong size={25} className='cursor-pointer' />
            </motion.div>

            <div className=' mt-8'>

                <div className='block lg:grid grid-cols-5 gap-5 max-h-fit md:max-h-[700px] lg:max-h-[500px] h-fit py-8 md:py-16 border-b-2 border-black'>
                    <div className=' col-span-2 h-full'>
                        <div className='block lg:hidden'>
                            <img src={solveit} alt="" />
                        </div>
                        <div className=' mt-3 md:mt-0 h-fit md:h-1/2'>
                            <div className=' font-semibold'>
                                <p>01 / SOLVE_IT</p>
                            </div>
                            <div className=' md:text-[15px] sm:text-base lg:text-base font-semibold pt-3 md:pt-7 font-anc'>
                                SOLVE_IT is a Q&A platform built with React, Firebase, and MongoDB, designed to help users ask questions, share knowledge, and collaborate effectively. It features rich text editing, image uploads, and AI-powered filtering to detect and block foul or abusive language, ensuring a safe and respectful community. The platform aims to simplify knowledge sharing while promoting constructive discussions and user engagement.
                            </div>
                            <div className=' text-[#606060] text-sm py-3 md:py-4 lg:py-7'>
                                Built with MERN Stack, Typescript, Redux, Firebase, Tailwind CSS,
                            </div>
                        </div>
                        <div className=' h-fit md:h-1/2 block md:flex items-end'>
                            <div className=''>
                                <a href="https://solveit-one.vercel.app/"
                                    className='my-c my-c::after my-c:hover:after'
                                >
                                    Further Screens from This Project ↗
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='hidden col-span-3 lg:flex justify-end w-full max-h-fit md:max-h-[420px]'>
                        <img src={solveit} alt="" />
                    </div>
                </div>

                <div className='block lg:grid grid-cols-5 gap-5 max-h-fit md:max-h-[700px] lg:max-h-[500px] h-fit py-8 md:py-16 border-b-2 border-black'>
                    <div className=' col-span-2 h-full'>
                        <div className='block lg:hidden'>
                            <img src={enhance} alt="" />
                        </div>
                        <div className=' mt-3 md:mt-0 h-fit md:h-1/2'>
                            <div className=' font-semibold'>
                                <p>02 / Consultants Landing Page</p>
                            </div>
                            <div className=' md:text-[15px] sm:text-base lg:text-base font-semibold pt-3 md:pt-7 font-anc'>
                                Designed and developed a responsive landing page for financial consultants using React.js. The Website features a modern, professional design with sections for services, about, and contact forms to capture leads. Optimized for performance and SEO to enhance visibility and client engagement.
                            </div>
                            <div className=' text-[#606060] text-sm py-3 md:py-4 lg:py-7'>
                                Built with React, Tailwind CSS
                            </div>
                        </div>
                        <div className=' h-fit md:h-1/2 block md:flex items-end'>
                            <div className=''>
                                <a href="https://enhance-sphere-sandy.vercel.app/"
                                    className='my-c my-c::after my-c:hover:after'
                                >
                                    Further Screens from This Project ↗
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='hidden col-span-3 lg:flex justify-end w-full max-h-fit md:max-h-[420px]'>
                        <img src={enhance} alt="" />
                    </div>
                </div>

                <div className='block lg:grid grid-cols-5 gap-5 max-h-fit md:max-h-[700px] lg:max-h-[500px] h-fit py-8 md:py-16 border-b-2 border-black'>
                    <div className=' col-span-2 h-full'>
                        <div className='block lg:hidden'>
                            <img src={estate} alt="" />
                        </div>
                        <div className=' mt-3 md:mt-0 h-fit md:h-1/2'>
                            <div className=' font-semibold'>
                                <p>03 / Real Estate Listing Website</p>
                            </div>
                            <div className=' md:text-[15px] sm:text-base lg:text-base font-semibold pt-3 md:pt-7 font-anc'>
                                I developed a responsive real estate listing website focused on delivering a seamless property search experience. My work included implementing detailed property views, and an intuitive interface optimized for both mobile and desktop. By enhancing usability and accessibility, I helped elevate the client’s online presence, making it easier for users to find and inquire about properties while aligning with industry standards.
                            </div>
                            <div className=' text-[#606060] text-sm py-3 md:py-4 lg:py-7'>
                                Built with React, Typescript, Redux, Tailwind CSS,
                            </div>
                        </div>
                        <div className=' h-fit md:h-1/2 block md:flex items-end'>
                            <div className=''>
                                <a href="https://mob-project-tawny.vercel.app/"
                                    className='my-c my-c::after my-c:hover:after'
                                >
                                    Further Screens from This Project ↗
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='hidden col-span-3 lg:flex justify-end w-full max-h-fit md:max-h-[420px]'>
                        <img src={estate} alt="" />
                    </div>
                </div>

                <div className='block lg:grid grid-cols-5 gap-5 max-h-fit md:max-h-[700px] lg:max-h-[500px] h-fit py-8 md:py-16 border-b-2 border-black'>
                    <div className=' col-span-2 h-full'>
                        <div className='block lg:hidden'>
                            <img src={web} alt="" />
                        </div>
                        <div className=' mt-3 md:mt-0 h-fit md:h-1/2'>
                            <div className=' font-semibold'>
                                <p>04 / Real Estate Listing Website</p>
                            </div>
                            <div className=' md:text-[15px] sm:text-base lg:text-base font-semibold pt-3 md:pt-7 font-anc'>
                                The objective was to design a captivating and informative landing page for an upcoming cryptocurrency, aimed at building excitement, educating potential investors, and driving sign-ups for early access. The page needed to convey trust, transparency, and the unique value proposition of the coin while aligning with industry trends. The design included key sections such as the coin’s features, tokenomics, roadmap, team bios, and FAQs.
                            </div>
                            <div className=' text-[#606060] text-sm py-3 md:py-4 lg:py-7'>
                                Built with React, Tailwind CSS
                            </div>
                        </div>
                        <div className=' h-fit md:h-1/2 block md:flex items-end'>
                            <div className=''>
                                <a href="https://happyhamster20.com/"
                                    className='my-c my-c::after my-c:hover:after'
                                >
                                    Further Screens from This Project ↗
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='hidden col-span-3 lg:flex justify-end w-full max-h-fit md:max-h-[420px]'>
                        <img src={web} alt="" />
                    </div>
                </div>

                <div className='block lg:grid grid-cols-5 gap-5 max-h-fit md:max-h-[700px] lg:max-h-[500px] h-fit py-8 md:py-16 border-b-2 border-black'>
                    <div className=' col-span-2 h-full'>
                        <div className='block lg:hidden'>
                            <img src={webflow} alt="" />
                        </div>
                        <div className=' mt-3 md:mt-0 h-fit md:h-1/2'>
                            <div className=' font-semibold'>
                                <p>05 / Webflow</p>
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
                                    Further Screens from This Project ↗
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='hidden col-span-3 lg:block  justify-end w-full max-h-fit md:max-h-[420px]'>
                        <img src={webflow} alt="" />
                    </div>
                </div>

                <div className='block lg:grid grid-cols-5 gap-5 max-h-fit md:max-h-[700px] lg:max-h-[500px] h-fit py-8 md:py-16 border-b-2 border-black'>
                    <div className=' col-span-2 h-full'>
                        <div className='block lg:hidden'>
                            <img src={Portfolio_Uno} alt="" />
                        </div>
                        <div className=' mt-3 md:mt-0 h-fit md:h-1/2'>
                            <div className=' font-semibold'>
                                <p>06 / BankDash</p>
                            </div>
                            <div className=' md:text-[15px] sm:text-base lg:text-base font-semibold pt-3 md:pt-7 font-anc'>
                                <p>
                                    This project involved the creation of a comprehensive dashboard model designed to visualize and interpret large, complex data sets effectively. The dashboard model was developed with an emphasis on data clarity and user interaction. The dashboard was designed to assist users in making fast and efficient data-driven decisions.
                                </p>
                                <p>Key features consists of: Customizable layout, Data visualization, and Interactive elements</p>
                            </div>
                            <div className=' text-[#606060] text-sm py-3 md:py-4 lg:py-7'>
                                Built with React JS, Tailwind CSS, Zustand
                            </div>
                        </div>
                        <div className=' h-fit md:h-1/2 block md:flex items-end'>
                            <div className=''>
                                <a href="https://dashboard-uno.vercel.app/"
                                    className='my-c my-c::after my-c:hover:after'
                                >
                                    Further Screens from This Project ↗
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='hidden col-span-3 lg:flex justify-end w-full max-h-fit md:max-h-[420px]'>
                        <img src={Portfolio_Uno} alt="" />
                    </div>
                </div>

            </div>

            <div id='footer'>
                <div className=' mt-12 md:mt-24 py-5'>
                    <div className='block md:flex justify-between font-anb'>
                        <div>
                            @Waledxpert   -2024
                        </div>
                        <div className='mt-2 md:mt-0 flex gap-5 md:gap-10'>
                            <a href="https://github.com/Muh-Wale" className=' hover:font-semibold duration-100 ease-linear'>GitHub</a>
                            <a href="https://www.linkedin.com/in/waledxpert" className=' hover:font-semibold duration-100 ease-linear'>Linkedln</a>
                            <a href="https://x.com/muh_wale" className=' hover:font-semibold duration-100 ease-linear'>Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body