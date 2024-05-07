import FooterBG from '../../assets/product/bgFooter.jpg'
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const bgImage = {
    backgroundImage: `url(${FooterBG})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%"
}

const Footer = () =>{

    const FooterLink = [
        {
            title: "Home",
            link: "/#"
        },
        {
            title: "About",
            link: "/#about"
        },
        {
            title: "Contact",
            link: "/#contact"
        },
        {
            title: "Blog",
            link: "/#blog"
        }
    ];

    return(
        <div style={bgImage} className='text-white'>
          <div className="bg-black/40 min-h-[400px]">
            <div className='container grid md:grid-cols-3 pb-20 pt-5'>
                {/* company details */}
                <div className='py-8 px-4'>
                    <a href='#' className='font-semibold tracking-widest text-5xl sm:text-5xl font-cursive'>{" "} Zanya Cafe</a>
                    <p className='pt-4'>
                       {" "} small eating and drinking establishment, historically a coffeehouse, 
                       usually featuring a limited menu; originally these establishments served only in Zanya Coffe
                    </p>
                    <a href='https://www.google.com/maps' target='_blank'
                    className='inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full'>
                        Visit our Location
                    </a>
                     
                </div>

                {/* footer link */}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    {/* first col link */}
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>Footer Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLink.map((item,index)=>{
                                    return(
                                       <li key={index}>
                                        <a href={item.link} className='inline-block hover:scale-105 duration-200'>
                                            <li>{item.title}</li>
                                        </a>
                                       </li>
                                    )

                                })
                            }
                        </ul>
                    </div>

                    {/* Second col link */}
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>Quick Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLink.map((item,index)=>{
                                    return(
                                       <li key={index}>
                                        <a href={item.link} className='inline-block hover:scale-105 duration-200'>
                                            <li>{item.title}</li>
                                        </a>
                                       </li>
                                    )

                                })
                            }
                        </ul>                      
                    </div>
                    {/* Company address section */}
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>Shop Address</h1>
                        <p className='mb-0'>Phnom Penh, Cambodia</p>
                        <p>(855+) 10 987 001</p>
                        <p>Email: sodait25@gmail.com</p>
                        {/* socail medai section */}
                        <div className='space-x-3 mt-6'>
                            <a href='#'>
                                <FaFacebook  className='text-3xl inline-block hover:scale-105 duration-200'/>

                            </a>
                            <a href='#'>
                                <FaTiktok  className='text-3xl inline-block hover:scale-105 duration-200'/>

                            </a>
                            <a href='#'>
                                <FaTelegram  className='text-3xl inline-block hover:scale-105 duration-200'/>

                            </a>
                            <a href='#'>
                                <FaYoutube  className='text-3xl inline-block hover:scale-105 duration-200'/>

                            </a>
                        </div>
                    </div>


                </div>

            </div>

          </div>
        </div>
    )
}
export default Footer