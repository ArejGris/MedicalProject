import './book.scss'
import phone from '../../../assets/icons/telephone.png'
import pin from '../../../assets/icons/pin.png'
import time from '../../../assets/icons/time 1.png'
import chat from '../../../assets/icons/chat.png'
import Questions from '../question/Questions'
const Book = () => {
    return ( 
    <div className='book'>
        <div className="container-fluid">
            <div className="row">
                
      <h1>Get in touch</h1>
<p>Book an Appointment to treat your teeth right now.</p>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6">
                    <div className="left">
                        <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.2796928536973!2d-74.25006882459208!3d40.689837371396976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad6c74e7883b%3A0xee210cf03ce8848a!2s1441%20Morris%20Ave%2C%20Union%2C%20NJ%2007083%2C%20USA!5e0!3m2!1sen!2s!4v1701156459938!5m2!1sen!2s"  height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <li className="card card1">
                                    <div className="icon">
                                        <img src={pin} alt="" />

                                    </div>
                                    <div className="graph">
                                        <h1>Office Address</h1>
                                        <p>1441 Morris Ave, Union, NJ 07083</p>
                                    </div>

                                </li>
                        </div>
                         <ul>
                    
                                <li className="card">
                                    <div className="icon">
                                        <img src={time} alt="" />

                                    </div>
                                    <div className="graph">
                                        <h1>Office Timings</h1>
                                        <p>Monday - Saturday (9:00am to 5pm)
                                        Sunday (Closed)</p>
                                    </div>

                                </li>
                                <li className="card">
                                    <div className="icon">
                                        <img src={pin} alt="" />

                                    </div>
                                    <div className="graph">
                                        <h1>Emai Address</h1>
                                        <p>Smile01@gmail.com</p>
                                    </div>

                                </li>
                                <li className="card">
                                    <div className="icon">
                                        <img src={phone} alt="" />

                                    </div>
                                    <div className="graph">
                                        <h1>Phone Number</h1>
                                        <p>0900-78601</p>
                                    </div>

                                </li>
                                <li className="card">
                                    <div className="icon">
                                        <img src={chat} alt="" />

                                    </div>
                                    <div className="graph">
                                        <h1>Live chat</h1>
                                        <p>+1-2064512559</p>
                                    </div>

                                </li>
                           
                         </ul>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                    <div className="right">
                        <form  className="form">
                            <div className="form-group top">
                               <label >First Name</label>
                               <input type="text" placeholder='First Name'/>
                            </div>
                            <div className="form-group top">
                            <label >Last Name</label>
                               <input type="text" placeholder='Last Name'/>
                            
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" placeholder='you@company.com'/>
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <div className="input">
                                <input type="text" placeholder='+1 (555) 000-0000'/>
                                <div class="dropdown show inside">
  <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    USA
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another</a>
    <a class="dropdown-item" href="#">Something</a>
  </div>
</div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Select date</label>
                                <div class="dropdown show">
  <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  December - 02 - 2022
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">December - 02 - 2022</a>
  </div>
</div>
                               </div>
                            <div className="form-group">
                                <label >Message</label>
                                <textarea className='message'></textarea>

                                </div>
                                <div className="form-group">
                                    <button className='btn btn-primary'>book appointment</button>
                                </div>


                        </form>
                    </div>
                </div>
            </div>
            <div className="row">
                <Questions bg="false"/>
            </div>
        </div>
   
    </div> );
}
 
export default Book;