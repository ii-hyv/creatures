import { useState } from "react";

function Creature(props) {
    const style = {
        position: 'absolute',
        left: props.x + 'px',
        top: props.y + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated'
    };

    const [isAwake, setIsAwake] = useState(true);
    const imageUrl = isAwake ? props.awakeImageUrl : props.sleepImageUrl;
    function handleClick() {
        setIsAwake(!isAwake);
    }
    
    return (
        <div style={style}>
            <img src={imageUrl} alt={props.name} width="120" onClick={handleClick} />
            <p>{props.name}, age {props.age}</p>
        </div>
    );
}

export default Creature;
