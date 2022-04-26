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
        setTimeout(() => {
            if (props.rotate) {
                SetInitialLetterRotate({transform: "rotate(180deg)"})
            }
            SetText(<p></p>);
          }, 4000);
        setTimeout(() => {
            SetText(<TypeWritter text={props.secondText} time={140} />);
          }, 5000);
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