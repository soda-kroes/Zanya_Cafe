
import React from 'react'
import LOGO from '../../assets/product/logoCAFE.png' 
import { DiCoffeescript } from "react-icons/di";

function Navbar() {

const Menus = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "Service",
        link: "/#services"
    },
    {
        id: 3,
        name: "About",
        link: "/#about"
    }
]

  return (
    <div className='bg-gradient-to-r from-secondary to-secondary/90 text-white'>
        <div className='container py-2'>
        <div className='flex justify-between items-center gap-4'>
            {/* logo section */}
            <div data-aos="fade-down" data-aos-once="true">
                <a href='#' className='font-bold text-2xl sm:text-3xl flex justify-center items-center gap2 tracking-wider font-cursive'>
                    <img src={LOGO} alt='logo' width={50} height={50} className='W-14 mb-3'/>
                    ZANYA CAFE
                </a>
            </div>
            {/* link section */}
            <div 
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className='flex justify-between items-center gap-4'>
                <ul className='hidden sm:flex items-center gap-4'>
                    {Menus.map((item,index)=>{
                       return(
                        <a  key={index} href={item.link} className='inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200'>
                            <li>{item.name}</li>
                        </a>
                       )
                    })}
                </ul>
                <button className='bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex gap-2 items-center'>Order <DiCoffeescript className='text-xl' /> </button>
            </div>

        </div>
      
    </div>
    </div>
  )
}

export default Navbar
