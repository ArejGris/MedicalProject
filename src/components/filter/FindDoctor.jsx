import m3 from '../../assets/image 9.png'
import m2 from '../../assets/image 8.png'
import { Link } from 'react-router-dom';
const FindDoctor = () => {
    const doctors=[
    {
        name:'Jenny Wilson',
        p:'Periodontist',
      img:m2
    },
    {
      name:'Jacob Jones',
      p:'Jacob Jones' ,
      img:m3
    },
    { 
      name:'Jacob Jones',
      p:'Jacob Jones',
      img:m3
    }]
    return ( <div className="find">
        <div className="all-doctors">
       {doctors.map(doctor=>
       (
        <div className='slide'>
        <img src={doctor.img} alt="" />
       <Link to="/one-doctor">
       <div className="graph">
            <h1>{doctor.name}</h1>
            <p>{doctor.p}</p>
        </div>
        </Link>
    </div>
       )
        )}
        </div>
        <div className="all-doctors">
       {doctors.map(doctor=>
       (
        <div className='slide'>
        <img src={doctor.img} alt="" />
       <Link to="/one-doctor">
       <div className="graph">
            <h1>{doctor.name}</h1>
            <p>{doctor.p}</p>
        </div>
        </Link>
    </div>
       )
        )}
        </div>

    </div> );
}
 
export default FindDoctor;