import "./style.css"
import { useState, useEffect,} from "react";
import { Typewriter } from "react-simple-typewriter";


const TypeWritterWord = (props) => {
    const [text, SetText] = useState();
    const [InitialLetterRotate, SetInitialLetterRotate] = useState({transform: "rotate(0)"});
    const [textSize, SetTextSize] = useState({fontSize: "2.4rem"})

        setTimeout(() => {
            SetText(<Typewriter 
                words={[props.firstText, "", props.secondText]}
                typeSpeed={100}
                deleteSpeed={80}
                delaySpeed={1000}/>);
        }, 2000);


      if(props.rotate) {
        setTimeout(()=>{SetInitialLetterRotate({transform: "rotate(180deg)"})}, 4700)
    }


      

    useEffect(()=>{
        window.innerWidth > 930
        ? setTimeout(()=>{SetTextSize({fontSize: "6rem"})}, 500)
        : setTimeout(()=>{SetTextSize({fontSize: "2.5rem"})}, 500)
    }, [])

    return ( 
        <div className="TypeWritterWord" style={textSize}>
            <p className="TypeWritterWord__initial"  style={InitialLetterRotate}>{props.initial}</p>
        {text}
      </div>
     );
}

export default TypeWritterWord;