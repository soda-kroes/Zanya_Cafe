import React from 'react'
import HeroImg from '../../assets/product/cafeLogo.png'

function Home() {
  return (
        <div className='min-h-[300px] sm:min-h-[300px] bg-brandDark flex justify-center items-center text-white'>
    <div className='container pb-8 sm:pb-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
            {/* section text */}
            <div className='order-2 sm:order-1 mt-5 sm:mt-0' > 
                <h1 
                data-aos="fade-up"
                data-aos-once="true"
                className='text-5xl  sm:text-6xl lg:text-7xl font-bold font-cursive'>
                    We Serve the richest {" "} <span data-aos="zoom-out" data-aos-delay="300" className='text-primary font-cursive'>Coffee</span> in the cambodia
                </h1>
                <div data-aos="fade-up" data-aos-delay="400">
                    <button className='bg-gradient-to-r from-primary to-secondary mt-3 py-2 px-4 rounded-full text-white hover:scale-105 duration-200 border-primary border-2 font-cursive text-2xl'>Zanya Cafe</button>
                </div>
            </div>
            

            {/* section imgage */}
            <div 
            data-aos="zoom-in"
            data-aos-duration="300"
            className='min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative'>
                <img src={HeroImg} alt=''className='w-[300px] h-[300px] sm:w-[450px] sm:scale-110 mx-auto spin' />
                
            </div>

        </div>
    </div>
        </div>
  )
}

export default Home
