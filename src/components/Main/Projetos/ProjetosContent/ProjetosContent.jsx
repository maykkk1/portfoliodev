import React from 'react';
import "./style.css"
import { faCircle, faRectangleList, faAngleDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';

const ProjetosContent = () => {
    const [selectedItem, SetSelectedItem] = useState("Principais")
    const [isDropdownVisible, SetDropdownVisible] = useState(true)
    const [dropdownHeigth, setDropdownHeight] = useState({height:"0", bottom:"0"})

    const handleDropdown = () => {
        if(isDropdownVisible) {
            SetDropdownVisible(false)
            setDropdownHeight({height:"0", bottom:"0"})
        } else {
            SetDropdownVisible(true)
            setDropdownHeight({height:"120px", bottom:"-120px"})
        }
    }

    return ( 
        <div className='ProjetosContent'>
            <div className='top'>
                <div className='balls'>
                    <FontAwesomeIcon icon={faCircle} className='ball'/>
                    <FontAwesomeIcon icon={faCircle} className='ball'/>
                    <FontAwesomeIcon icon={faCircle} className='ball'/>
                </div>
                <h2>maycon@maycon:~/Desktop/Projetos</h2>
                <div className='projetosIconWrapper'>
                <FontAwesomeIcon icon={faRectangleList} className='projetosIcon'/>
                </div>
            </div>
            <div className='topDropdown'>
                <div className='dropdown' onClick={handleDropdown}>
                    {selectedItem}
                    <FontAwesomeIcon icon={faAngleDown}/>
                    <div className='ProjetosContent__categorias' style={dropdownHeigth}>
                        <span className='ProjetosContent__categoriasItem'>Todos</span>
                        <span className='ProjetosContent__categoriasItem'>Principais</span>
                        <span className='ProjetosContent__categoriasItem'>React</span>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default ProjetosContent;