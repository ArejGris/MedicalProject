import Main from "./main/Main";
import Clients from "./client/Clients";
import Doctors from "./doctors/Doctors";
import './home.scss'
import Services from "./services/Services";
import Questions from "./question/Questions";
import { Route, Routes } from "react-router-dom";
import OneCard from "../Account/cart/OneCard";
import ProductDetails from "./services/ProductDetails";
const HomePage = () => {
    return (
      <div className="home container-fluid">
        <Routes>
         <Route path="/" element={   <div className="row">
            <div className="col-12">
                  
                  <Main/>
              
                     </div>
                     <div className="col-12">
                        
                  <Doctors/>
                     </div>
                     <div className="col-12" id="services">
                        
                  <Services/>
                     </div>
                     <div className="col-12">
                        
                  <Clients/>
                     </div> 
               <div className="col-12">
                  
            <Questions bg="true"/>
               </div>
               
            </div>} />
            
    <Route path='/one-doctor' element={<OneCard/>}/>
    <Route path='/one-product' element={<ProductDetails/>}/>
            
        </Routes>
        
        </div> );
}
 
export default HomePage;