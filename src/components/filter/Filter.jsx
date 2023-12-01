import './filter.scss'
import icon2 from '../../assets/Vector.png'
import icon1 from '../../assets/solar_filter-bold-duotone.png'
import { Link, Route, Routes } from 'react-router-dom';
import FindDoctor from './FindDoctor';
import FindService from './FindService';

const Filter = () => {
    return ( 
    <div className='filter'>
    
    <div className="find-service">
               <Link to='/filter'><h1>Find service</h1></Link>
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
            <div className="tools">
                
            <Link className="btn" to='/filter/find-doctor'>Find Service</Link>
            <Link className="btn" to='/filter/find-service'>Find Doctor</Link>
            </div>

            </div>
           <Routes>
            <Route path='/' element={
                 <div className="map">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1621656.8163728567!2d-89.9839139909185!3d37.45367425033414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1701444917101!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                 </div>
            } />
            <Route path='/find-doctor' element={<FindDoctor/>}/>
            <Route path='/find-service' element={<FindService/>}/>
           </Routes>
    </div> );
}
 
export default Filter;