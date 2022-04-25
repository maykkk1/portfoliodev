import HeaderName from "../HeaderName/HeaderName";
import "./style.css"

const HeaderContent = () => {
    return ( 
        <div className="HeaderContent">
            <div className="HeaderContent__Apresentation">
            <img src={require("../../../assets/logo/Logo-Md-Web-Developer.webp")} alt="" />
                <HeaderName />
                <button className="HeaderContent__ContactBtn">Saiba mais</button>
            </div>
        </div>
     );
}

export default HeaderContent;