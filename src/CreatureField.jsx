import { useState } from 'react';
import Creature from './Creature.jsx';

function CreatureField() {
    const [creatureData, setCreatureData] = useState([
        {
            id: 1, name: "Mr. Fresh", age: 3, isAwake: false,
            sleepImageUrl: "/images/first_sleep.png",
            awakeImageUrl: "/images/first_awake.png",
            x: 120, y: 140
        },
        {
            id: 2, name: "Meimei", age: 5, isAwake: true,
            sleepImageUrl: "/images/second_sleep.png",
            awakeImageUrl: "/images/second_awake.png",
            x: 300, y: 260
        },
        {
            id: 3, name: "Bingus", age: 2, isAwake: true,
            sleepImageUrl: "/images/third_sleep.png",
            awakeImageUrl: "/images/third_awake.png",
            x: 550, y: 40
        },
        {
            id: 4, name: "Leipä", age: 4, isAwake: true,
            sleepImageUrl: "/images/fourth_sleep.png",
            awakeImageUrl: "/images/fourth_awake.png",
            x: 150, y: 420
        },
        {
            id: 5, name: "Mista", age: 4, isAwake: false,
            sleepImageUrl: "/images/fifth_sleep.png",
            awakeImageUrl: "/images/fifth_awake.png",
            x: 550, y: 590
        }
    ]);

    const fieldStyle = {
        position: 'relative',
        width: '800px',
        height: '800px',
        border: '2px solid #ccc',
        margin: '20px auto',
        backgroundColor: '#6b8c66'
    };

    const awakeCount = creatureData.filter(creature => creature.isAwake).length;

    return (
        <div style={fieldStyle}>
            <p>{awakeCount} of {creatureData.length} creatures awake</p>
            {creatureData.map(creature => (
                <Creature
                    key={creature.id}
                    name={creature.name}
                    age={creature.age}
                    isAwake={creature.isAwake}
                    sleepImageUrl={creature.sleepImageUrl}
                    awakeImageUrl={creature.awakeImageUrl}
                    x={creature.x} y={creature.y}
                    onAwakeChange={isAwake => {
                        setCreatureData(currentCreatures => currentCreatures.map(currentCreature => (
                            currentCreature.id === creature.id
                                ? { ...currentCreature, isAwake }
                                : currentCreature
                        )));
                    }}
                />
            ))} 
        </div>
    );
}

export default CreatureField;
