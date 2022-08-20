import './ProjetosItem.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";import { faRectangleList } from "@fortawesome/free-solid-svg-icons";

const ProjetosItem = () => {
    return ( 
        <div className='ProjetosItem'>
            <div className='projetosCardHeader'>
                <div className='projetosCardHeaderLogo'>
                    <FontAwesomeIcon icon={ faRectangleList } />
                </div>
                <div className='projetosCardTitle'>
                    <h2>Calculadora</h2>
                    <p>Projeto web</p>
                </div>
            </div>
            <div className='projetosCardImage'>
                <img src={require("../../../../assets/images/projetos/tip_calculator.jpg")} alt=""/>
            </div>
            <div className='projetosCardFooter'>
                <div className='projetosCardFooterDisc'>
                    Calculadora feita com javaScript, html e css.
                </div>
                <div className='projetosCardFooterLinks'>
                    <a href="">Github</a>
                    <a href="">Deploy</a>
                </div>
            </div>
        </div>
     );
}

export default ProjetosItem;