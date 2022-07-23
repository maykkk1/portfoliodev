import React from 'react';
import "./style.css"
import { faCircle, faRectangleList, faAngleDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import ProjetosWrapper from './ProjetosWrapper/ProjetosWrapper';
import { projetos } from '../../../../services/projetos';

const ProjetosContent = () => {

    const projetosReact = projetos.filter((projeto)=>{
        return projeto.tecnologias.includes("React")
    })

    const projetosPrincipais = projetos.filter((projeto)=>{
        return projeto.ehPrincipal
    })

    const [selectedProjects, SetSelectedProjects] = useState(projetosPrincipais)
    const [selectedItem, SetSelectedItem] = useState("Principais")
    const [isDropdownVisible, SetDropdownVisible] = useState(true)
    const [dropdownHeigth, setDropdownHeight] = useState({height:"0", display:"none"})


    const handleDropdown = () => {
        if(isDropdownVisible) {
            SetDropdownVisible(false)
            setDropdownHeight({height:"0", bottom:"0", display:"none"})
        } else {
            SetDropdownVisible(true)
            setDropdownHeight({height:"120px", bottom:"-120px"})
        }
    }

    const handleSelectedItem = (item) => {
        SetSelectedItem(item)
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
                        <span className='ProjetosContent__categoriasItem' onClick={()=>{
                            handleSelectedItem("Principais")
                            SetSelectedProjects(projetosPrincipais)
                        }}>Pricipais</span>
                        <span className='ProjetosContent__categoriasItem' onClick={()=>{
                            handleSelectedItem("Todos")
                            SetSelectedProjects(projetos)
                        }}>Todos</span>
                        <span className='ProjetosContent__categoriasItem' onClick={()=>{
                            handleSelectedItem("React")
                            SetSelectedProjects(projetosReact)
                        }}>React</span>
                    </div>
                </div>
            </div>
            <ProjetosWrapper projetos={selectedProjects}/>
        </div>
     );
}

export default ProjetosContent;