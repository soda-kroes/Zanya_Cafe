
import playStoreImg from '../../assets/product/imgPlaystore.png'
import appStoreImg from '../../assets/product/imgAppstore.png'
import bgImg from '../../assets/product/bg1.png'

const backgroundStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%"
}

const AppStore = () =>{
    return(
        <>
            <div style={backgroundStyle} className='py-10'>
                <div className='container'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4'>
                       
                            <div 
                            data-aos="fade-up"
                            data-aos-duration="300"
                            className='space-y-6 max-w-xl mx-auto'>
                                {/* text-content */}
                            <h1 className='text-2xl  text-center sm:text-left
                             sm:text-4xl font-semibold text-white/90 pl-3'>
                                Zanya Cafe is available for Android and IOS
                            </h1>
                            {/* logo-section */}
                            <div className='flex flex-wrap justify-center sm:justify-start items-center'>
                                <a href='#'>
                                    <img src={appStoreImg} alt='' className='max-w-[150px] sm:max-w-[120px]
                                    md:max-w-[200px]'/>
                                </a>
                                <a href='#'>
                                    <img src={playStoreImg} alt='' className='max-w-[150px] sm:max-w-[120px]
                                    md:max-w-[200px]'/>
                                </a>
                            </div>
                            </div>
                        </div>
                        <div>

                        </div>

                    </div>
            
            </div>
         
        </>
    )
}

export default AppStore;