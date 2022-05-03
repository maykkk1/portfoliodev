import React from 'react';
import "./style.css"


const HabilidadesWrapper = (props) => {
    return ( 
        <div className='Habilidades__IconWrapper'>
            <img src={require(`../../../../assets/images/skills/${props.imgPath}`)} alt="" />
        </div>
     );
}

export default HabilidadesWrapper;