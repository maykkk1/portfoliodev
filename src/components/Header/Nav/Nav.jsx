import React from 'react';
import NavItem from './NavItem/NavItem';
import { faGithub, faLinkedin, faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import { faHouse, faUser, faBarsProgress, faRectangleList, faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css"
import { useState, useEffect } from 'react';

const Nav = () => {
    const [navPosition, SetNavPosition] = useState({right: "-70px"})
    const [isNavVisible, SetIsNavVisible] = useState(false)

    useEffect(()=>{
        if (window.innerWidth > 930 ) setTimeout(() => {
            SetNavPosition({right: "0"})
            SetIsNavVisible(true)
        }, 2000)
    }, [])


    const handleMenuHamburguer = () => {
        if (isNavVisible) {
            SetNavPosition({right: "-70px"})
            SetIsNavVisible(false)
        } else {
            SetNavPosition({right: "0"})
            SetIsNavVisible(true)
        }
    }

    const showNavWhenScreenResize = () => {
        if(window.innerWidth > 930 && !isNavVisible) {
            SetNavPosition({right: "0"})
            SetIsNavVisible(true)
        }
    }
    window.addEventListener("resize", showNavWhenScreenResize)




    return ( 
        <nav className='Nav' style={navPosition}>
            <div className='menu' onClick={handleMenuHamburguer}><FontAwesomeIcon icon={faBars} /></div>
            <ul className='Nav__items'>
                <NavItem icon={faHouse} name={"Home"}/>
                <NavItem icon={faUser} name={"Sobre"}/>
                <NavItem icon={faBarsProgress} name={"Habilidades"}/>
                <NavItem icon={faRectangleList} name={"Projetos"}/>
                <NavItem icon={faEnvelope} name={"Contato"}/>
            </ul>
            <ul className='Nav__socialLinks'>
                <li><a target="_blank" href="https://github.com/maykkk1"><FontAwesomeIcon icon={faGithub} className='Nav__socialLinks__item'/></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/maycondouglasdev/"><FontAwesomeIcon icon={faLinkedin} className='Nav__socialLinks__item'/></a></li>
                <li><a target="_blank" href="https://api.whatsapp.com/send?phone=5561994442277"><FontAwesomeIcon icon={faWhatsapp} className='Nav__socialLinks__item'/></a></li>
            </ul>
        </nav>
     );
}

export default Nav;