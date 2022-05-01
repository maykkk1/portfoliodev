import React from 'react';
import SobreContainer from './SobreContainer/SobreContainer';
import "./style.css"


const Sobre = () => {
    return ( 
        <section className='Sobre' id='Sobre'>
            <SobreContainer/>
            <img className='Sobre__wave-bg' src={require("../../../assets/images/wave-bg.png")} alt="" />
        </section>
     );
}

export default Sobre;