import "./style.css";
import { useState, useEffect} from "react";
import TypeWritterWord from "../../util/TypeWritterWord/TypeWritterWord";
import { Typewriter } from "react-simple-typewriter";

function HeaderName() {
  const [namePosition, SetNamePosition] = useState({transform: "translateY(-50px)"})
  const [titleOpacity, SetTitleOpacity]  = useState({opacity: "0"})

  useEffect(()=>{
    setTimeout(() => {
      SetNamePosition({transform: "translateY(0)", gap: "15px"})
    }, 800);
  }, [])

  useEffect(()=>{
    setTimeout(() => {
      SetNamePosition({opacity: "0"})
    }, 8000);
  }, [])

  useEffect(()=>{
    setTimeout(() => {
      SetTitleOpacity({opacity: "1"})
    }, 8500);
  }, [])
  return (
    <>
    <span className="HeaderName" style={namePosition}>
        <TypeWritterWord firstText={"aycon"} secondText={"eb"}  rotate={true} initial={"M"}/>
        <TypeWritterWord firstText={"ouglas"} secondText={"eveloper"}  rotate={false} initial={"D"}/>
    </span>
    <h1 style={titleOpacity} className="pageTitle"><strong>M</strong>aycon <strong>D</strong>ouglas</h1>
    </>
  );
}

export default HeaderName;
