import './onecard.scss'
import m2 from '../../../assets/image 7.png'
const OneCard = () => {
    return ( 
     <div className='page'>
     <div className="card1">
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
          <img src={m2} alt="" />
              <div className="graph">
                  <h1>Wade Warren</h1>
              <p>Endodontist.</p>
  
                  </div>
  
      </div>
  </div> 
     </div>
      );
}
 
export default OneCard;