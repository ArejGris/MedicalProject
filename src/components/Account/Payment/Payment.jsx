
import m2 from '../../../assets/image 7.png'
import medical from '../../../assets/medical.png'
import './payment.scss'
const Payment = () => {
    return ( 
    <div className='payment'>
        <div className="a">
        <div className='card'>
        <img src={medical} alt="" />
        <button>Review</button>
        <div className="myrow"><h4>medicin</h4> <h4>Type</h4>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <h1>100$</h1>
    </div>
         <h2>Delevired</h2>
        </div>
       
   <div className="b">
   <div className='card slide'>
            <img src={m2} alt="" />
            <div className="graph graph2">
                <h1>Jenny Wilson</h1>
                <p>Periodontist.</p>
            </div>
        </div>
        <h2>Canceled</h2>
   </div>
    </div> );
}
 
export default Payment;