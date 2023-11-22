import OneService from "./OneService";
import arrowl from '../../../assets/arrow-left.png'
import arrowr from '../../../assets/arrow-right.png'
import icon2 from '../../../assets/Vector.png'
import icon1 from '../../../assets/solar_filter-bold-duotone.png'

const Services = () => {
   const services=[1,2,3,4]
    return (
         <div className="services">
            <h1>Services</h1>
            <p>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
            <ul>
               {
               services.map(s=>(
                <li key={s}>
                    <OneService/>

                </li>
               ))}

            </ul>
            <div className="arrows">
                <img src={arrowl} alt="" />
                <img src={arrowr} alt="" />
            </div>
            <div className="find-service">
                <h1>Find service</h1>
                <div className="search">
            <form >
            <div className="form-group">
            <img src={icon2} alt="" />
                <label >seach</label>
                <img src={icon1} alt="" />
            </div>
        <input type="text" className="search" />
        </form>
            </div>

            </div>
           
    </div> );
}
 
export default Services;