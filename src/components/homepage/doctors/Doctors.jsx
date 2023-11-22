import m1 from '../../../assets/image 7.png'
import m2 from '../../../assets/image 8.png'
import m3 from '../../../assets/image 9.png'
import arrowl from '../../../assets/arrow-left.png'
import arrowr from '../../../assets/arrow-right.png'
const Doctors = () => {
    return ( <div className="doctors">
        <h1>Meet our specialists</h1>
        <p>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
    <ul className="members">
        <li>
            <img src={m1} alt="" />
            <div className="graph">
                <h1>Wade Warren</h1>
            <p>Endodontist.</p>

                </div>
        </li>
        <li>
            <img src={m2} alt="" />
            <div className="graph graph2">
                <h1>Jenny Wilson</h1>
                <p>Periodontist.</p>
            </div>
        </li>
        <li>
            <img src={m3} alt="" />
            <div className="graph">
                <h1>Jacob Jones</h1>
                <p>Pediatric Dentist.</p>
            </div>
        </li>
        <li>
            <img src={m3} alt="" />
            <div className="graph">
                <h1>Jacob Jones</h1>
                <p>Jacob Jones</p>
            </div>
        </li>
    </ul>
    <div className="arrows">
        <img src={arrowl} alt="" />
        <img src={arrowr} alt="" />
    </div>
    </div> );
}
 
export default Doctors;