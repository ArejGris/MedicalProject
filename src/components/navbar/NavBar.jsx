import './NavBar.scss'
import logo from '../../assets/images 1.png'
import icon2 from '../../assets/Vector.png'
import icon1 from '../../assets/solar_filter-bold-duotone.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
    const [screen,setScreen]=useState(true)
    const [open,setOpen]=useState(false)
   
   useEffect(()=>{
    const handleSize=()=>{
    const width=window.innerWidth
        if(width>750){
            setScreen(true)
                }else{
                    setScreen(false)
                }
    }
    window.addEventListener('resize',handleSize)
    return()=>{
        window.removeEventListener('resize',handleSize)
    }
   },[])

   const menu=()=>{
setOpen(prev=>!prev)
   }
    return (
        <div className="mynav">
             
             <div className='navbar1'>
             
       {screen?<ul className="links " id="navbar">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
            <li>Login</li>
        </ul>:<button onClick={()=>menu()}><svg width="23" height="23" viewBox="0 0 23 23">
   
    <path d="M2 6H22M" strokeWidth="auto" stroke="black" fill="black" strokeLinecap="round"/>
    <path d="M2 12H22M" strokeWidth="auto" stroke="black" fill="black" strokeLinecap="round"/>
    <path d="M2 18H22" strokeWidth="auto" stroke="black" strokeLinecap="round"/>
</svg></button>}
       
        <form className='form'>
            <div className="form-group">
            <img src={icon2} alt="" />
                <label >seach</label>
                <img src={icon1} alt="" />
            </div>
        <input type="text" className="search" />
        </form>
        <Link className="logo" to="/">
            <h1><span>C</span>are</h1>
            <img src={logo} alt="" />
        </Link>
    </div>
   {open? <div className="menu">
            <ul>
            <li>Home</li>
            <li><a href="#services">Services</a></li>
            <li>About</li>
            <li>Contact</li>
            <li>Login</li>
            </ul>
            </div>:null}
        </div>
        
         );
}
 
export default NavBar;