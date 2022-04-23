import "./style.css"

const NavItem = (props) => {
    return ( 
        <li className="NavItem">
            <a href={props.link}>{props.name}</a>
        </li>
     );
}

export default NavItem;