import './NavBar.scss'
import logo from '../../assets/images 1.png'
import icon2 from '../../assets/Vector.png'
import icon1 from '../../assets/solar_filter-bold-duotone.png'
const NavBar = () => {
    return (
        <div className="mynav">
             <div className='navbar'>
        <ul className="links">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
            <li>Login</li>
        </ul>
        <form >
            <div className="form-group">
            <img src={icon2} alt="" />
                <label >seach</label>
                <img src={icon1} alt="" />
            </div>
        <input type="text" className="search" />
        </form>
        <div className="logo">
            <h1><span>C</span>are</h1>
            <img src={logo} alt="" />
        </div>
    </div>

        </div>
         );
}
 
export default NavBar;