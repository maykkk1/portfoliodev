import NavDropdown from "../NavDropdown/NavDropdown";
import NavItem from "../NavItem/NavItem";
import "./style.css"

const NavContent = () => {
    return ( 
        <div className="NavContent">
            <ul className="NavContent__Items">
                <NavItem name={"Home"} link={"#"}/>
                <NavDropdown />
                <NavItem name={"Projetos"} link={"#"}/>
                <NavItem name={"Contato"} link={"#"}/>
            </ul>
        </div>
     );
}

export default NavContent;