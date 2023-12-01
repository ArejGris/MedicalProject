
import user1 from '../../assets/icons/user1.png'
const Edit = () => {
    return ( 
   
<div className="right">
                    <form >
                        <img src={user1} alt="" />
                        <p>Edit Photo</p>
                        <div className="form-group">
                           <label >User Name</label>
                           <div className="input">
                           <i className="mdi mdi-pencil lefticon" ></i>
                            <input type="text" placeholder='Sam' />
                           <i className="mdi mdi-account-outline righticon"></i>
                           </div>
                        </div>
                        <div className="form-group">
                           <label >Email :</label>
                           <div className="input">
                           <i className="mdi mdi-pencil lefticon" ></i>
                            <input type="text" placeholder='Sam@gmail.com' />
                           <i className="mdi mdi-email-outline righticon"></i>
                           </div>
                        </div>
                        <div className="form-group">
                           <label >Password :</label>
                           <div className="input">
                           <i className="mdi mdi-pencil lefticon" ></i>
                            <input type="text" placeholder='2325623682' />
                           <i className="mdi mdi-eye righticon"></i>
                           </div>
                        </div>
                        <div className="form-group">
                            <label ></label>
                        <button className='btn '>Edit Account</button>

                        </div>
                    </form>

                </div>
     );
}
 
export default Edit;