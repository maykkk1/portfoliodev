import React from 'react';
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavDropdown = () => {
    const [isDropdownVisivle, SetIsDropdownVisible] = useState(false)
    const [dropdownStyle, SetDropdownStyle] = useState({height:"0px", bottom: "-3px"})
    const [dropdownIconRotate, SetDropdownIconRotate] = useState(0)

    const handleDropdown = () => {
        if (isDropdownVisivle) {
            SetIsDropdownVisible(false)
            SetDropdownIconRotate(0)
            return SetDropdownStyle({height:"0px", bottom: "-3px"})
        }
        SetIsDropdownVisible(true)
        SetDropdownIconRotate(90)
        return SetDropdownStyle({height:"100px", bottom: "-103px"})

    }

    return ( 
        <li className="NavDropdown" onClick={handleDropdown}>
            <span><p>Sobre</p> <FontAwesomeIcon icon={faChevronRight} rotation={dropdownIconRotate} /></span>
            <ul className="NavDropdown_items" style={dropdownStyle}>
                <li><a href="">Perfil</a></li>
                <li><a href="">Habilidades</a></li>
            </ul>
        </li>
     );
}

export default NavDropdown;