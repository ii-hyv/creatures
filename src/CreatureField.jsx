import Creature from './Creature.jsx';

function CreatureField() {
    const creatureData =[
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
    ]

    const fieldStyle = {
        position: 'relative',
        width: '800px',
        height: '800px',
        border: '2px solid #ccc',
        margin: '20px auto',
        backgroundColor: '#6b8c66'
    };

    const creatures =[]

    return (
        <div style={fieldStyle}>
            {creatureData.map(creature => (
                creatures.push(
                    <Creature
                        key={creature.id}
                        name={creature.name}
                        age={creature.age}
                        isAwake={creature.isAwake}
                        sleepImageUrl={creature.sleepImageUrl}
                        awakeImageUrl={creature.awakeImageUrl}
                        x={creature.x} y={creature.y}
                    />
                )
            ))} 
        </div>
    );
}

export default CreatureField;
