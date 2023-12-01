import m1 from '../../../assets/image 7.png'
import m2 from '../../../assets/image 8.png'
import m3 from '../../../assets/image 9.png'
import arrowl from '../../../assets/arrow-left.png'
import arrowr from '../../../assets/arrow-right.png'
import {Swiper ,SwiperSlide} from "swiper/react";
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import './doctors.scss'
import { Link } from 'react-router-dom'
const Doctors = () => {
    const breakpoints={
        320:{
        spaceBetween:10,
        slidesPerView:1,
            },
        480:{
            spaceBetween:10,
            slidesPerView:2,
            },
        768:{
            spaceBetween:10,
            slidesPerView:3,
            },
        1024:{
                spaceBetween:10,
                slidesPerView:4,
            }
       }
    return ( <div className="doctors">
        <h1>Meet our specialists</h1>
        <p>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
    <Swiper className="members"
    
    modules={[Navigation,Scrollbar, A11y]}
    breakpoints={breakpoints}
    navigation
    scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    
    >
        <SwiperSlide className='slide'>
            <img src={m1} alt="" />
           <Link to="/one-doctor"><div className="graph">
                <h1>Wade Warren</h1>
            <p>Endodontist.</p>

                </div></Link> 
        </SwiperSlide>
        <SwiperSlide className='slide'>
            <img src={m2} alt="" />
            <Link to="/one-doctor">
            <div className="graph graph2">
                <h1>Jenny Wilson</h1>
                <p>Periodontist.</p>
            </div></Link>
           
        </SwiperSlide>
        <SwiperSlide className='slide'>
            <img src={m3} alt="" />
            <Link to="/one-doctor">
            <div className="graph">
                <h1>Jacob Jones</h1>
                <p>Pediatric Dentist.</p>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide className='slide'>
            <img src={m3} alt="" />
           <Link to="/one-doctor">
           <div className="graph">
                <h1>Jacob Jones</h1>
                <p>Jacob Jones</p>
            </div>
            </Link>
        </SwiperSlide>
        <img src={arrowl} className="swiper-button-prev swiper-button-disabled" tabindex="-1" role="button" aria-controls="swiper-wrapper-67910d185f102be872" aria-disabled="true" alt="" />
        <img src={arrowr} className="swiper-button-next swiper-button-disabled" tabindex="-1" role="button" aria-controls="swiper-wrapper-67910d185f102be872" aria-disabled="true" alt="" />
           
    </Swiper>
    </div> );
}
 
export default Doctors;