
import React from 'react'
import Img1 from '../../assets/product/c4.jpg'
import Img2 from '../../assets/product/c2.jpg'
import Img3 from '../../assets/product/c3.jpg'



const Service = () =>{

    const ServiceData = [
        {
            id:1,
            img: Img1,
            name: "Milk Tea",
            description: "a drink made from cold tea mixed with milk, flavourings, etc., which also contains small sweet balls that look like bubbles and are made from tapioca..",
            aosDelay: "100",
        },
        {
            id:2,
            img: Img2,
            name: "Butterfly Tea",
            description: "butterfly pea flower tea is made from the leaves and flower petals of the clitoria ternatea plant.",
            aosDelay: "100",

        },
        {
            id:3,
            img: Img3,
            name: "Green Tea",
            description: "Green tea is a type of tea that is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process which is used to make oolong teas and black teas.",
            aosDelay: "100",

        }
    ]
    return(
        <>
        <span id='services'></span>
        <div className='py-10'>
            <div className='container'>
                {/* header title */}
                <div className='text-center mb-20'>
                    <h1 className='text-4xl font-bold font-cursive text-gray-800'>Best Drink For You</h1>
                </div>

                {/* service card section */}
                <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                        {
                            ServiceData.map((item,index)=>{
                                return(
                                    <div data-aos="fade-up" data-aos-delay={item.aosDelay} key={index} className='rounded-2xl bg-white hover:bg-primary
                                     hover:text-white shadow-xl duration-200 max-w-[300px] group relative'>
                                        {/* img section */}
                                        <div className='h-[122px]'>
                                            <img src={item.img} alt='' width={140} height={150} className='rounded-lg max-w-[200px] block mx-auto 
                                            transform -translate-y-14 
                                            group-hover:scale-110
                                            group-hover:rotate-6 duration-300' />
                                           
                                        </div>
                                        {/* Text Content */}
                                        <div className='p-4 text-center'>
                                            <h1 className='text-xl font-bold'>{item.name}</h1>
                                            <pa className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2' >{item.description}</pa>
                                        </div>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </div>
        </>
    )
}

export default Service
