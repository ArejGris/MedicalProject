import OneService from "./OneService";
import arrowl from '../../../assets/arrow-left.png'
import arrowr from '../../../assets/arrow-right.png'
import icon2 from '../../../assets/Vector.png'
import icon1 from '../../../assets/solar_filter-bold-duotone.png'
import {Swiper ,SwiperSlide} from "swiper/react";
import { Navigation,  Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import './services.scss'
import { Link } from "react-router-dom";
const Services = () => {
   const services=[1,2,3,4]
   const breakpoints={
    320:{
    spaceBetween:20,
    slidesPerView:1,
        },
    480:{
        spaceBetween:20,
        slidesPerView:2,
        },
    768:{
        spaceBetween:20,
        slidesPerView:3,
        },
    1024:{
            spaceBetween:20,
            slidesPerView:4,
        }
   }
 
    return (
         <div className="services" >
            <h1>Services</h1>
            <p>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
            <Swiper className="swiper"
            
      modules={[Navigation, Scrollbar, A11y]}
      breakpoints={breakpoints}
      navigation
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} >
             {services.map((s)=>(
                 <SwiperSlide key={s} className="swiperSlide">
                 <OneService/>
               </SwiperSlide>

             ))
            }
                <img src={arrowl} className="swiper-button-prev swiper-button-disabled" tabindex="-1" role="button" aria-controls="swiper-wrapper-67910d185f102be872" aria-disabled="true" alt="" />
                <img src={arrowr} className="swiper-button-next swiper-button-disabled" tabindex="-1" role="button" aria-controls="swiper-wrapper-67910d185f102be872" aria-disabled="true" alt="" />
           
            </Swiper>
            
            <div className="find-service">
               <Link to='/filter'> <h1>Find service</h1></Link>
                <div className="search">
            <form >
            <div className="form-group">
            <img src={icon2} alt="" />
                <label >search</label>
                <img src={icon1} alt="" />
            </div>
        <input type="text" className="search" />
        </form>
            </div>

            </div>
           
    </div> );
}
 
export default Services;