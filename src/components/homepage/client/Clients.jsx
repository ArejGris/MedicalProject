import Client from "./Client";

const Clients = () => {
   const list=[1,2,3]
    return ( 
        <div className="clients">
            <h1>Our Happy Clients</h1>
            <p>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
            
             <ul>{
        list.map(el=>(<div key={el}>
            <Client/>
            
            </div>))}
            </ul> 

        </div>
    
   );
}
 
export default Clients;