import './Account.scss'
import user from '../../assets/icons/user.png'
import Edit from './Edit';
import { Link, Route, Routes} from 'react-router-dom';
import Payment from './Payment/Payment';
import Cart from './cart/Cart';
import { useState } from 'react'; 
const Account = () => {
  const [open,setOpen]=useState(true)
  const toggle=()=>{
    const win=window.innerWidth
    if(win<500){
    setOpen(prev=>!prev)}
  }
    return ( 
    <div className='account' >
    <div className="container">
        <div className="row">
            <div className="col-5" onClick={toggle}>
                {open?<div className="left" >
                    <div className="user">
                        <img src={user} alt="" />
                    
                       </div>
                       <ul>
                       <li><Link to="/user">Edit Account</Link></li>
                       <li><Link to="/user/pay">Payment</Link></li>
                       <li><Link to="/user/cart">cart</Link></li>
                       <li>Logout</li>
                       </ul>


                </div>:<div className='left1'></div>}
            </div>
            <div className="col-7">
                <Routes>
        <Route path='/' element={<Edit/>}/>,
        <Route path='/pay' element={<Payment/>}/>
        <Route  path='/cart' element={<Cart/>}/>
                </Routes>
            </div>
        </div>
    </div>
    </div> );
}
 
export default Account;