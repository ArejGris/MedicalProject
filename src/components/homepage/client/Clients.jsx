import Client from "./Client";
import line from '../../../assets/line.png'
import avatar1 from '../../../assets/Ellipse 3.png'
import avatar2 from '../../../assets/Ellipse 3 (1).png'
import avatar3 from '../../../assets/Ellipse 3 (2).png'
import {Swiper ,SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const Clients = () => {
   const list=[{
    id:1,
    name:'Thomas daniel',
    description:'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.',
   img:avatar1 },
   {
    id:2,
    name:'Alena Alex',
    description:'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.',
    img:avatar2
   },
   {
    id:3,
    name:'Thomas Edison',
    description:'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.',
    img:avatar3
   }
]
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
        }
   }
return ( 
        <div className="clients">
            <div className="header">
            <h1>Our <span>Happy Clients</span></h1>
            <img src={line} alt="" />

            </div>
            <p>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
            
             <Swiper className="swiper"
             
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      breakpoints={breakpoints}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>{
        list.map(el=>(<SwiperSlide className="swiperslide" key={el.id}>
            <Client name={el.name} description={el.description} img={el.img}/>
            
            </SwiperSlide>))}
            </Swiper> 

        </div>
    
   );
}
 
export default Clients;