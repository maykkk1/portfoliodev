import "./style.css"
import TypeWritter from "../TypeWritter/TypeWritter";
import { useState, useEffect} from "react";


const TypeWritterWord = (props) => {
    const [text, SetText] = useState(<p></p>);
    const [InitialLetterRotate, SetInitialLetterRotate] = useState({transform: "rotate(0)"});
    const [textSize, SetTextSize] = useState({fontSize: "2.4rem"})

    useEffect(() => {
        setTimeout(() => {
            SetText(<TypeWritter text={props.firstText} time={140} />);
        }, 2000);
        setTimeout(()=>{SetText(props.firstText.slice(0, -1))}, 4100)
        setTimeout(()=>{SetText(props.firstText.slice(0, -2))}, 4200)
        setTimeout(()=>{SetText(props.firstText.slice(0, -3))}, 4300)
        setTimeout(()=>{SetText(props.firstText.slice(0, -4))}, 4400)
        setTimeout(()=>{SetText(props.firstText.slice(0, -5))}, 4500)
        setTimeout(()=>{SetText(props.firstText.slice(0, -6))}, 4600)
        if(props.rotate) {
            setTimeout(()=>{SetInitialLetterRotate({transform: "rotate(180deg)"})}, 4900)
        }

        setTimeout(() => {
            SetText(<TypeWritter text={props.secondText} time={140} />);
          }, 5500);
      }, []);

    useEffect(()=>{
        setTimeout(()=>{SetTextSize({fontSize: "6rem"})}, 500)
    })

    return ( 
        <div className="TypeWritterWord" style={textSize}>
            <p className="TypeWritterWord__initial"  style={InitialLetterRotate}>{props.initial}</p>
        {text}
      </div>
     );
}

export default TypeWritterWord;