import { Link } from 'react-router-dom';
import medical from '../../../assets/medical.png'
const OneService = () => {
    return (
    <div className='card'>
        <img src={medical} alt="" />
        <Link to="/one-product">Review</Link>
        <div className="myrow"><h4>medicin</h4> <h4>Type</h4>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <h1>100$</h1>
    </div> );
}
 
export default OneService;