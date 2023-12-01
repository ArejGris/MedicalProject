import fa from '../../assets/facebook.png'
import you from '../../assets/youtube.png'
import ins from '../../assets/instagram.png'
import ln from '../../assets/linkedin.png'
import tw from '../../assets/twitter.png'
import './footer.scss'
const Footer = () => {
    return ( <div className="footer">
        <p>All rights reserved ® uifry.com  | Terms and conditions apply!</p>
         <ul class="icons">
            <li><img src={fa} alt="" className='icon'/></li>
            <li><img src={you} alt="" className='icon'/></li>
            <li><img src={ins} alt="" className='icon'/></li>
            <li><img src={ln} alt="" className='icon'/></li>
            <li><img src={tw} alt="" className='icon'/></li>
        </ul>

    </div> );
}
 
export default Footer;