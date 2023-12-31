import React from 'react'
import Navbar from '../components/Navbar'
import Body from './pages/Body'
import Footer from './pages/Footer'

const Home = () => {
    return (
        <div className=' max-w-[1640px] mx-auto bg-[#f4f4f4]'>
            <Navbar/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default Home