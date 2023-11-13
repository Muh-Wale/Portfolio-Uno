import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className=' max-w-[1300px] bg-inherit mx-auto py-5 px-5 md:px-14 lg:px-24'>
            <nav className='flex justify-between items-center'>
                <div className='flex gap-5 '>
                    <a href="/" className=' font-semibold text-3xl'>
                        waledxpert
                    </a>
                </div>
                <div className='ml-14 hidden md:flex'>
                    <ul className='flex gap-10 font-medium text-[#181717]'>
                        <Link to="/shop" className=' hover:text-gray-700 duration-150'>Work</Link>
                        <Link to="/blog" className=' hover:text-gray-700 duration-150'>About</Link>
                        <Link to="/contact" className=' hover:text-gray-700 duration-150'>Contact</Link>
                    </ul>
                </div>
                <div className='block md:hidden'>
                    <AiOutlineMenu size={30}/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar