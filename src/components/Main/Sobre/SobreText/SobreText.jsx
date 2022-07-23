import React from "react";
import "./style.css";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SobreText = () => {
  return (
    <div className="SobreText">
      <h2>Olá, me chamo Maycon Douglas</h2>
      <p>
        Sou um Desenvolvedor Web. Apaixonado por desafios e a transformar
        ideias em código. Entre minhas principais habilidades estão JavaScript,
        CSS, HMTL, React, Java, Python e SQL. Sou proativo, costumo lidar bem com 
        trabalho em equipe e possuo facilidade em me adaptar à novos cenários.

      </p>
      <a href="https://drive.google.com/uc?export=download&id=1WJFBUSSvLqMakcQVxkiUNCPdmY3G-_mI">
        <button className="SobreText__cvBtn">
          Currículo
          <FontAwesomeIcon icon={faDownload} />
        </button>
      </a>
    </div>
  );
};

export default SobreText;
