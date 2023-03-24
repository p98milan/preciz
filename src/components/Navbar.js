import React, { useState } from 'react';
import Logo from '../assets/preciz-logo.svg';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {

    const [click,setClick]=useState(false);
    const [color,setColor]=useState(false);

    const menuClick = ()=> setClick(!click);

    const changeColor = ()=>{
        if(window.scrollY >=60){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }
    
    window.addEventListener("scroll", changeColor)
    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <img src={Logo} alt="logo" />
            <ul className={click ? 'nav-menu nav-active' : 'nav-menu'}>
                <li><Link to="/">Kezdőoldal</Link></li>
                <li><Link to="/menu">Étlap</Link></li>
                <li><Link to="/ceremony">Rendezvények</Link></li>
                <li><Link to="/about">Rólunk</Link></li>
                <li><Link to="/contact">Kapcsolat</Link></li>
            </ul>

            <div className="nav-icons" onClick={menuClick}>
                {click ? (<FaTimes size={20} style={{color: '#fff'}}/>)
                : (<FaBars size={20} style={{color: '#fff'}}/>)}
            </div>
        </div>
    )
}

export default Navbar