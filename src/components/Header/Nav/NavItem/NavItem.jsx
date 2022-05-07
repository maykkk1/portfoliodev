import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const NavItem = (props) => {
    const [isNavHoverVisible, SetNavHoverVisible] = useState(false)

    const handleNavHover = () => {
        isNavHoverVisible 
        ? SetNavHoverVisible(false)
        : SetNavHoverVisible(true)
    }
    return ( 
        <li className="NavItem" onMouseEnter={handleNavHover} onMouseLeave={handleNavHover}>
            <a href={`#${props.name}`}>
            <FontAwesomeIcon icon={props.icon} />
            </a>
            {isNavHoverVisible ? <span className="NavItem__hover">{props.name}</span> : null}
        </li>
     );
}

export default NavItem;