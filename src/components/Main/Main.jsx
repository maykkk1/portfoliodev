import React from 'react';
import Contato from './Contato/Contato';
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
            <Contato />
        </main>
     );
}

export default Main;