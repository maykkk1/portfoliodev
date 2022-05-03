import React from 'react';
import Habilidades from './Habilidades/Habilidades';
import Sobre from './Sobre/Sobre';
import "./style.css"


const Main = () => {
    return ( 
        <main>
            <Sobre/>
            <Habilidades/>
        </main>
     );
}

export default Main;