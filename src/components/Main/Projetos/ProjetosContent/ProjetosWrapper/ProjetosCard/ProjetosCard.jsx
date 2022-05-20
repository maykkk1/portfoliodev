import React from 'react';
import ProjetosTech from './ProjetosTech/ProjetosTech';
import { faGithub} from "@fortawesome/free-brands-svg-icons"
import { faEarth } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css"
import { useState } from 'react';

const ProjetosCard = (props) => {
    const [insideContent, SetInsideContent] = useState({opacity:"0", transform: "translateY(25px)"});
    const [isInsideContentVisible, SetIsInsideContentVisible] = useState(false)


    const handleInsideContent = () => {
        if (isInsideContentVisible) {
            SetInsideContent({opacity:"0", transform: "translateY(25px)"})
            return SetIsInsideContentVisible(false)
        }
        SetInsideContent({opacity:"1", transform: "translateY(0)"})
        return SetIsInsideContentVisible(true)
    }


    return ( 
        <div className='ProjetosCard'>
            <img onMouseEnter={handleInsideContent} onMouseLeave={handleInsideContent} src={require(`../../../../../../assets/images/projetos/${props.path}`)} alt="" />
            <h3 className='ProjetosCard__title' style={insideContent}>{props.name}</h3>
            <div className='ProjetosCard__tecnologias' style={insideContent}>
                {props.tech.map((tech, index)=>{
                    return <ProjetosTech name={tech} key={index}/>
                })}
            </div>
            <div className='ProjetosCard__navLinks'>
                <a href={props.github} target="_blank"><FontAwesomeIcon className='ProjetosCard__navLinks__link' icon={faGithub}  /></a>
                <a href={props.deploy} target="_blank"><FontAwesomeIcon className='ProjetosCard__navLinks__link' icon={faEarth}  /></a>
            </div>
        </div>
     );
}

export default ProjetosCard;