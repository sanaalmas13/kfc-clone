import "./HeroSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import kfc1 from "../assets/images/kfc1.jpg";
import kfc2 from  "../assets/images/2.jpg";
import kfc3 from "../assets/images/3.jpg";
import kfc4 from "../assets/images/4.jpg";

function HeroSlider(){
    const banners = [kfc1, kfc2, kfc3, kfc4];

    return(
        <div className="hero-slider">
        <Swiper
         modules={[Navigation, Autoplay]}
         navigation
         autoplay={{delay:3000}}
         loop={true}
        >
        {banners.map((banner, index) => (
         <SwiperSlide key={index}>
         <img src={banner} alt={`Banner ${index+1}`}/>
         </SwiperSlide>
        
     ) )}
        </Swiper>
        </div>
    )
}

export default HeroSlider;