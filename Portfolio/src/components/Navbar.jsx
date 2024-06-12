import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { CSSTransition } from 'react-transition-group'
import { Link as ScrollLink } from 'react-scroll' // Import react-scroll

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className='max-w-[1300px] bg-inherit mx-auto py-5 px-5 md:px-14 xsxl:px-24'>
            <nav className='flex justify-between items-center'>
                <div className='flex gap-5 '>
                    <motion.a
                        href='/'
                        className='font-semibold text-3xl font-and'
                        whileHover={{ scale: [1, 0.95, 1] }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 2, repeat: 1 }}
                    >
                        waledxpert
                    </motion.a>
                </div>
                <div
                    className={`nav-links md:static absolute bg-[#f4f4f4] md:min-h-fit min-h-[35vh] left-0 ${
                        showMenu ? 'top-[10%]' : 'top-[-45%]'
                    } md:w-auto w-full flex justify-center items-center px-5 duration-300 ease-linear`}
                >
                    <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 font-bold text-[#181717] font-ana text-lg'>
                        <li>
                            <Link to='/projects' className='hover:text-gray-700 duration-150'>
                                Work
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='hover:text-gray-700 duration-150'>
                                About
                            </Link>
                        </li>
                        <li>
                            <ScrollLink
                                to='footer'
                                smooth={true}
                                duration={500}
                                className='hover:text-gray-700 duration-150 cursor-pointer'
                            >
                                Contact
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
                <div className='block md:hidden'>
                    <CSSTransition
                        in={showMenu}
                        timeout={3}
                        classNames='menu'
                        unmountOnExit
                    >
                        <AiOutlineClose size={30} onClick={toggleMenu} name='close' />
                    </CSSTransition>
                    {!showMenu && (
                        <AiOutlineMenu size={30} onClick={toggleMenu} name='menu' />
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
