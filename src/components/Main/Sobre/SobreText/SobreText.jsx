import React from "react";
import "./style.css"
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SobreText = () => {
  return (
    <div className="SobreText">
      <h2>Ola, me chamo Maycon Douglas</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <a href="https://drive.google.com/uc?export=download&id=1WJFBUSSvLqMakcQVxkiUNCPdmY3G-_mI">
        <button className="SobreText__cvBtn"> 
          Currículo
          <FontAwesomeIcon icon={faDownload}  />
        </button>
      </a>
    </div>
  );
};

export default SobreText;
