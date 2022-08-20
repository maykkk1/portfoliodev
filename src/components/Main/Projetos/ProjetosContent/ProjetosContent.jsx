import ProjetosItem from '../ProjetosItem/ProjetosItem';
import './ProjetosContent.css'
import { projetos } from '../../../../services/projetos';

const ProjetosContent = () => {
    return ( 
        <div className='ProjetosContent'>
            {
                projetos.map((projeto) => {
                    return (
                        <ProjetosItem nome={projeto.nome} imgPath={projeto.imgPath} desc={projeto.descricao} github={projeto.github} deploy={projeto.deploy} />
                    )
                })
            }
        </div>
     );
}
export default ProjetosContent;