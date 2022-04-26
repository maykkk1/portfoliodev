import { useState, useEffect } from "react";
import HeaderName from "../HeaderName/HeaderName";
import "./style.css"

const HeaderContent = () => {
    const [logoSize, SetLogoSize] = useState({width: "100px", opacity:"0"})
    const [btnPosition, SetBtnPostion] = useState({transform: "translateY(400px)", opacity: "0"})



    useEffect(()=>{
        setTimeout(()=>{SetBtnPostion({transform: "translateY(0)", opacity: "1"})}, 2000)
    })
    
    
    useEffect(()=>{
        setTimeout(()=>{SetLogoSize({width: "90%", opacity:"1"})}, 800)
    })

    return ( 
        <div className="HeaderContent">
            <div className="HeaderContent__Apresentation">
            <img style={logoSize} src={require("../../../assets/logo/Logo-Md-Web-Developer.webp")} alt="" />
                <HeaderName />
                <button class="button-53" role="button" style={btnPosition}>Entre em contato</button>
            </div>
        </div>
     );
}

export default HeaderContent;