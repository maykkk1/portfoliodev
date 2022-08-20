import './ProjetosItem.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";import { faRectangleList } from "@fortawesome/free-solid-svg-icons";

const ProjetosItem = (props) => {
    return ( 
        <div className='ProjetosItem'>
            <div className='projetosCardHeader'>
                <div className='projetosCardHeaderLogo'>
                    <FontAwesomeIcon icon={ faRectangleList } />
                </div>
                <div className='projetosCardTitle'>
                    <h2>{props.nome}</h2>
                    <p>Projeto web</p>
                </div>
            </div>
            <div className='projetosCardImage'>
                <img src={require(`../../../../assets/images/projetos/${props.imgPath}`)} alt=""/>
            </div>
            <div className='projetosCardFooter'>
                <div className='projetosCardFooterDisc'>
                    <p>{props.desc}</p>
                </div>
                <div className='projetosCardFooterLinks'>
                    <a href={props.github} target="_blank">Github</a>
                    <a href={props.deploy} target="_blank">Deploy</a>
                </div>
            </div>
        </div>
     );
}

export default ProjetosItem;