import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import phone from '../imgs/icons/phone-solid.svg';

import logo from '../imgs/logo.png'
// import logo2 from '../imgs/logo_fb.svg'

import '../styles/Navigation.css'

const navList = [
    {navName: 'Start', path: '/', end:true},
    {navName: 'Animacje', path: '/stanowiska-animacyjne'},
    {navName: 'Galeria', path: '/galeria'},
    {navName: 'Cennik', path: '/cennik'},
    {navName: 'Kontakt', path: '/kontakt'},
]

const Navigation = () => {

    const menu = navList.map(el => (
        <li 
        key={el.navName} 
        className={"nav-item"}
        ><NavLink to={el.path} end={el}>{el.navName}</NavLink></li>
    ));
    
    return ( 
        <>
            <div className="nav-content">
                <div className="logo">
                    <img src={logo} alt="logo artinka" />
                    <div className='phone-in-nav'>
                        <a href="tel: +48722794057">
                            <img src={phone} alt="telefon" />
                            <strong>+48 722 795 057</strong>
                        </a>
                    </div>
                </div>
                <ul>
                    {menu}
                </ul>
            </div>
        </>
     );
}
 
export default Navigation;