import React from 'react';
import Habilidades from './Habilidades/Habilidades';
import Projetos from './Projetos/Projetos';
import Sobre from './Sobre/Sobre';
import "./style.css"


const Main = () => {
    return ( 
        <main>
            <Sobre/>
            <Habilidades/>
            <Projetos/>
        </main>
     );
}

export default Main;