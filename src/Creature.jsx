import { useState } from "react";

function Creature(props) {


    const [isAwake, setIsAwake] = useState(props.isAwake);

    const [posX, setPosX] = useState(props.x);
    const [posY, setPosY] = useState(props.y);
    
        function handleAwake() {
        const randomX = Math.floor(Math.random() * 601);
        const randomY = Math.floor(Math.random() * 601);
        setPosX(randomX);
        setPosY(randomY);
        console.log("Creature is awake!");
    }

const imageUrl = isAwake ? props.awakeImageUrl : props.sleepImageUrl;

function handleClick() {
        const updatedState = !isAwake;
        setIsAwake(updatedState);
        if (updatedState) {
            handleAwake();
        }
    props.onAwakeChange(updatedState);
    }

    const style = {
        position: 'absolute',
        left: posX + 'px',
        top: posY + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated'
    };

    return (
        <div style={style}>
            <img src={imageUrl} alt={props.name} width="120" onClick={handleClick} />
            <p>{props.name}, age {props.age}</p>
        </div>
    );
}

export default Creature;
