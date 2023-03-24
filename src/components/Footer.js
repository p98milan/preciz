import React from 'react';
import {FaFacebookSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="socialIcons">
            <Link to="https://www.facebook.com/precizkftkecskemet/?locale=hu_HU"><FaFacebookSquare/></Link>
        </div>
        <p>2023 &copy; | Preciz Élelmezés | Minden jog fenntartva</p>
    </div>
  )
}

export default Footer;