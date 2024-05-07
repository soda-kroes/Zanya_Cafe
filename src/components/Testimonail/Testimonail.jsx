import Slider from "react-slick";
import CAFE1 from '../../assets/product/c1.jpg'
import Img1 from '../../assets/product/c4.jpg'
import Img2 from '../../assets/product/c2.jpg'
import Img3 from '../../assets/product/c3.jpg'


const Testimonail = () =>{

    //block function
    const TestimonailData = [
        {
            id:1,
            name: "Buuterfly Tea",
            text: "a drink made from cold tea mixed with milk, flavourings, etc., which also contains small sweet balls that look like bubbles and are made from tapioca.",
            img: CAFE1,
        },
        {
            id:2,
            name: "Milk Tea",
            text: "a drink made from cold tea mixed with milk, flavourings, etc., which also contains small sweet balls that look like bubbles and are made from tapioca.",
            img: Img1,
        },
        {
            id:3,
            name: "Black Tea",
            text: "a drink made from cold tea mixed with milk, flavourings, etc., which also contains small sweet balls that look like bubbles and are made from tapioca.",
            img: Img2,
        },
        {
            id:4,
            name: "Green Tea",
            text: "a drink made from cold tea mixed with milk, flavourings, etc., which also contains small sweet balls that look like bubbles and are made from tapioca.",
            img: Img3,
        }
    ]

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        SlidesToScoll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,

        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScoll: 1,
                    infinite: true
                },

            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScoll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScoll: 1,
                },

            },
        ]
    };
    return(
        <div className="py-14 mb-10">
            <div className="container">
                {/* header section */}
                <div data-aos="fade-up" className='text-center mb-10'>
                    <h1 className='text-4xl font-bold font-cursive text-gray-800'>New Drink In 2024</h1>
                </div>

                {/* card section  */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {
                            TestimonailData.map((item,index)=>{
                                return(
                                    <div className="my-6" key={index}>
                                        <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                                            <div className="mb-0">
                                                {/* image section */}
                                                <div>
                                                    <img src={item.img} alt="" className="rounded-full w-20 h-20" />
                                                </div>
                                                {/* content section */}
                                                <div className="flex flex-col items-center gap-4">
                                                    <div className="space-y-3">
                                                        <p className="text-xs mt-2 text-gray-500">{item.text}</p>
                                                        <h1 className="text-xl font-bold text-black/80 font-cursive">{item.name}</h1>
                                                    </div>
                                                </div>
                                                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>

            </div>
        </div>
    )
}

export default Testimonail;