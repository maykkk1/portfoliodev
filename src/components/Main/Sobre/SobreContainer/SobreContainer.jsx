import React from 'react';
import SobreText from '../SobreText/SobreText';
import "./style.css"


const SobreContainer = () => {
    return ( 
        <div className='SobreContainer'>
            <div className='SobreContainer_imgWrapper'>
                <img src={require("../../../../assets/images/Avatar.jpg")} alt="foto de um rosto" />
            </div>
            <SobreText />
        </div>
     );
}

export default SobreContainer;