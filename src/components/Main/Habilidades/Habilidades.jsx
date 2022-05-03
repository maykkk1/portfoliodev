import React from 'react';
import HabilidadesWrapper from '../Habilidades/HabilidadesWrapper/HabilidadesWrapper';
import "./style.css"

const Habilidades = () => {
    return ( 
        <section className='Habilidades'>
            <HabilidadesWrapper imgPath={"css_logo.png"}/>
            <HabilidadesWrapper imgPath={"git_logo.png"}/>
            <HabilidadesWrapper imgPath={"html_logo.png"}/>
            <HabilidadesWrapper imgPath={"react_logo.png"}/>
            <HabilidadesWrapper imgPath={"java_logo.png"}/>
            <HabilidadesWrapper imgPath={"python_logo.png"}/>
        </section>
     );
}

export default Habilidades;