import Main from "../main/Main";
import Clients from "./client/Clients";
import Doctors from "./doctors/doctors";
import './home.scss'
import Services from "./services/Services";
const HomePage = () => {
    return (
         <div className="home">
            <Main/>
            <Doctors/>
            <Services/>
            <Clients/>
         </div> );
}
 
export default HomePage;