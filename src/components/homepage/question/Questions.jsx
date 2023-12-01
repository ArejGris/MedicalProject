import { useEffect, useState } from 'react';
import './question.scss'
const Questions = ({bg}) => {
   const [color,setColor]=useState("bg")
     useEffect(()=>{
      if(bg=="true"){
         setColor("bg")
         }else{
            setColor("bg1")
         }
     },[])
     const classN=[color,"questions"]
     const classNames=classN.join(' ')
    return (
         <div className={classNames}>
            <h1>Frequently Ask Question</h1>
            <p>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
             <div className="card">
                <div className="card-head">
                Can I see who reads my email campaigns?<i class="mdi mdi-minus-circle-outline"></i>

                </div>
                <div className="divider"></div>
                <div className="card-body">
                Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.

                </div>

             </div>
             <ul>
                <li>Do you offer non-profit discounts?</li>
                <li>Can I see who reads my email campaigns?</li>
                <li>Can I see who reads my email campaigns?</li>
             </ul>
   
   
    </div> );
}
 
export default Questions;