
import photo from '../../assets/vbn 1.png'
const Main = () => {
    return ( <div className='main'>
        <div className="sec1">
            <div className="content">
                
            <h1 className="title">Lorem Ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore et dolore
 magna aliqua. Ut enim ad minim veniam, quis nostrud 
exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. </p>
<button className="btn">Get started</button>

            </div>
        </div>
        <div className="sec2">
            <img src={photo} alt="" />

        </div>
    </div> );
}
 
export default Main;