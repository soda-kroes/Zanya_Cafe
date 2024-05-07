
import React, {useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import Banner from './components/Banner/Banner';
import AppStore from './components/AppStore/AppStore';
import Testimonail from './components/Testimonail/Testimonail';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(()=>{
    AOS.init(
      {
        offset: 100,
        duration: 700,
        easing: 'ease-in',
        delay:100
      }
    )

  });
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Home />
      <Service />
      <Banner />
      <AppStore />
      <Testimonail />
      <Footer />
      
    </div>
  )
}

export default App
