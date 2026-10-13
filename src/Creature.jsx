import { useState, useEffect } from "react";

function Creature(props) {


    const [isAwake, setIsAwake] = useState(true);

        function handleAwake() {
        //TODO random paikkaan creature
        console.log("Creature is awake!");
    }

    useEffect(() => {
        if (isAwake) {
            handleAwake(); ''
        }
    }, [isAwake]);

const imageUrl = isAwake ? props.awakeImageUrl : props.sleepImageUrl;

function handleClick() {
        const updatedState = !isAwake;
        setIsAwake(updatedState);
    }

    const style = {
        position: 'absolute',
        left: props.x + 'px',
        top: props.y + 'px',
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
