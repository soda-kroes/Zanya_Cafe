
import React  from "react";
import BgTexture from '../../assets/product/bgBanner.jpg'
import BannerImg from '../../assets/product/cafeLogo1.png'
import { GrSecure } from "react-icons/gr";
import { GiCoffeeCup } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";
const bgImage = {
    backgroundImage: `url(${BgTexture})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%"
}

const Banner = () =>{
    return(
        <>
        <span id="about"></span>
            <div style={bgImage}>
                <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Image Section */}
                        <div data-aos="zoom-in">
                            <img src={BannerImg} alt="" className="max-w-[430px] w-full mx-auto spin drop-shadow-xl"/>
                        </div>

                        {/* Text Conten Section */}
                        <div className="flex flex-col justify-center gap-6 sm:pt-0">
                            <h1 
                            data-aos="fade-up"
                            className="text-3xl sm:text-4xl font-bold font-cursive">Premium Blen Coffee</h1>
                            <p 
                            data-aos="fade-up"
                            className="text-sm text-gray-500 tracking-wide leading-5">
                            Coffee is a beverage brewed from roasted coffee beans. 
                            Darkly colored, bitter, and slightly acidic, 
                            coffee has a stimulating effect on humans, primarily due to its caffeine content. It has the highest sales in the world market for hot drinks.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-5">
                                    <div 
                                    data-aos="fade-up"
                                    className="flex items-center gap-3">
                                        <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3
                                         rounded-full bg-red-100"/>
                                         <span>Premium Coffee</span>
                                    </div>

                                    <div 
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    className="flex items-center gap-3">
                                        <GiCoffeeCup className="text-2xl h-12 w-12 shadow-sm p-3
                                         rounded-full bg-red-100"/>
                                         <span>Hot Coffee</span>
                                    </div>

                                    <div 
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                    data-aos-offset="0"
                                    className="flex items-center gap-3">
                                        <SiBuymeacoffee className="text-2xl h-12 w-12 shadow-sm p-3
                                         rounded-full bg-red-100"/>
                                         <span>Cold Coffee</span>
                                    </div>

                                </div>

                                <div 
                                data-aos="slide-left"
                                className="border-l-4 border-primary/50 pl-6 space-y-3">
                                    <h1 className="text-2xl font-semibold font-cursive">Tea Love</h1>
                                    <p className="text-gray-500 text-sm">
                                        {""}
                                        The Zanya is one of the most famous milk teas in the country;
                                         it is famous because of the taste of the milk and the bubbles.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Banner;