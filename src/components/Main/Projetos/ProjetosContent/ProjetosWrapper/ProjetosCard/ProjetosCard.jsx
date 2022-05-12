import React from 'react';
import ProjetosTech from './ProjetosTech/ProjetosTech';
import "./style.css"

const ProjetosCard = (props) => {
    return ( 
        <div className='ProjetosCard'>
            <img src={require(`../../../../../../assets/images/projetos/${props.path}`)} alt="" />
            <h3 className='ProjetosCard__title'>{props.name}</h3>
            <div className='ProjetosCard__tecnologias'>
                {props.tech.map((tech)=>{
                    return <ProjetosTech name={tech}/>
                })}
            </div>
        </div>
     );
}

export default ProjetosCard;