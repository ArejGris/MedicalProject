import m2 from '../../../assets/image 7.png'
import medical from '../../../assets/medical.png'
import './onecard.scss'

const Cart = () => {
    return ( 
    <>  
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
        <img src={m2 } alt="" />
            <div className="graph">
                <h1>Wade Warren</h1>
            <p>Endodontist.</p>

                </div>

    </div>
</div> 
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
      <div className='btn btn1'>Cancelled</div>

    </div>
    <div className="img">
        <img src={m2 } alt="" />
        
        <div className="graph">
                <h1>Wade Warren</h1>
            <p>Endodontist.</p>

                </div>

    </div>
</div> 
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
      <div className='btn btn3'>in Progress</div>

    </div>
    <div className="img">
        <img src={medical } alt="" />
        

    </div>
</div>
    </> );
}
 
export default Cart;