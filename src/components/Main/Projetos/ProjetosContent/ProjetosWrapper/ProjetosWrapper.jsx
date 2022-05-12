import React from 'react';
import ProjetosCard from './ProjetosCard/ProjetosCard';
import "./style.css"
import { projetos } from '../../../../../services/projetos';

const ProjetosWrapper = () => {
    return ( 
        <div className='ProjetosWrapper'>
            {projetos.map((projeto)=>{
                return <ProjetosCard name={projeto.nome} tech={projeto.tecnologias} path={projeto.imgPath}/>
            })}
        </div>
     );
}

export default ProjetosWrapper;