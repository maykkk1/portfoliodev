import React from "react";
import ProjetosCard from "./ProjetosCard/ProjetosCard";
import "./style.css";

const ProjetosWrapper = (props) => {
  return (
    <div className="ProjetosWrapper">
      {props.projetos.map((projeto, index) => {
        return (
          <ProjetosCard
            name={projeto.nome}
            tech={projeto.tecnologias}
            path={projeto.imgPath}
            github={projeto.github}
            deploy={projeto.deploy}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ProjetosWrapper;
