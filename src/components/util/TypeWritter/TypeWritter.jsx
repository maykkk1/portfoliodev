import "./style.css"
import { useState, useEffect, useRef} from "react";

const TypeWritter = (props) => {
    const [text, SetText] = useState("")
    const [contador, SetContador] = useState(0)
    let textValue = ""

    textValue = props.text

    const firstUpdate = useRef(true);

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false    
        } else {
            if (contador < textValue.length)
            setTimeout(()=> {
                SetContador((value) => ++value)
                SetText((value) => value + textValue[contador])
            }, props.time)
        }
    } , [contador, SetText])


    return ( 
        <p>{text}</p>
     );
}

export default TypeWritter;