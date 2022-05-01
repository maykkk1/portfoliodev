import React from 'react';
import "./style.css"


const SobreContainer = () => {
    return ( 
        <div className='SobreContainer'>
            <div className='SobreContainer_imgWrapper'>
                <img src={require("../../../../assets/images/Avatar.jpg")} alt="foto de um rosto" />
            </div>

        </div>
     );
}

export default SobreContainer;