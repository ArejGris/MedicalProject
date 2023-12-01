import './ProductDetails.scss'
import m2 from '../../../assets/medical.png'

const ProductDetails = () => {
    return (
        <div className='page'>
        <div className="card2">
         <div className="details">
             <h1>Service Details</h1>
           <ul>
             <li>Doctor Name</li>
             <li>Doctor Name</li>
             <li>Doctor Location</li>
             <li>Doctor Location</li>
             <li>Date</li>
             <li>17/5    20:30</li>
             <li>cost</li>
             <li>200$</li>
           </ul>
           <div className='btn'>Delivered</div>
     
         </div>
         <div className="img">
             <img src={m2} alt="" className='first'/>
             <img src={m2} alt="" />
                 
     
         </div>
     </div> 
        </div> );
}
 
export default ProductDetails;