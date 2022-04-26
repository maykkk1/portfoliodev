import React from 'react';
import NavItem from './NavItem/NavItem';
import { faHouse, faUser, faBarsProgress, faRectangleList, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./style.css"
import { useState, useEffect } from 'react';

const Nav = () => {
    const [navPosition, SetNavPosition] = useState({right: "-70px"})

    useEffect(()=>{
        setTimeout(() => {
            SetNavPosition({right: "0"})
        }, 2000);
    })

    return ( 
        <nav className='Nav' style={navPosition}>
            <ul className='Nav__items'>
                <NavItem icon={faHouse} name={"Home"}/>
                <NavItem icon={faUser} name={"Sobre"}/>
                <NavItem icon={faBarsProgress} name={"Habilidades"}/>
                <NavItem icon={faRectangleList} name={"Projetos"}/>
                <NavItem icon={faEnvelope} name={"Contato"}/>
            </ul>
            <ul className='Nav__socialLinks'>
                <li><img src={require("./../../../assets/icons/linkedin.png")} alt="" /></li>
                <li><img src={require("./../../../assets/icons/github.png")} alt="" /></li>
                <li><img src={require("./../../../assets/icons/whatsapp.png")} alt="" /></li>
            </ul>
        </nav>
     );
}

export default Nav;