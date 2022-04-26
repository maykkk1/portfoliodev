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
            <FontAwesomeIcon icon={props.icon} />
            {isNavHoverVisible ? <span className="NavItem__hover">{props.name}</span> : null}
        </li>
     );
}

export default NavItem;