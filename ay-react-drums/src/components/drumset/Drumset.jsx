import './drumset.scss'
import DrumSound from '../drumSound/DrumSound'


const Drumset = () => {

    const drumMap = [
        {
            name: 'high-hat',
            sound: './sounds/highhat.wav',
            letter: 'h',
            key: 72
        },
        {
            name: 'open-high-hat',
            sound: './sounds/openhat.wav',
            letter: 'g',
            key: 71
        },
        {
            name: 'snare',
            sound: './sounds/snare.wav',
            letter: 'a',
            key: 65
        },
        {
            name: 'tom1',
            sound: './sounds/tom1.wav',
            letter: 'q',
            key: 81
        },
        {
            name: 'tom2',
            sound: './sounds/tom2.wav',
            letter: 'w', 
            key: 87
        },
        {
            name: 'floor-tom',
            sound: './sounds/floortom.wav',
            letter: 'e',
            key: 69
        },
        {
            name: 'kick',
            sound: './sounds/kick.wav',
            letter: 'x',
            key: 88
        },
        {
            name: 'crash16',
            sound: './sounds/crash16.wav',
            letter: 't',
            key: 84
        },
        {
            name: 'ride',
            sound: './sounds/ride.wav',
            letter: 'k',
            key: 75
        },
        {
            name: 'ride-bell',
            sound: './sounds/ridebell.wav',
            letter: 'l',
            key: 76
        },
        {
            name: 'crash14',
            sound: './sounds/crash14.wav',
            letter: 'y',
            key: 89
        }
    ]

    return (
        <div className="drumContainer">
            {
                drumMap.map(drum => 
                    <DrumSound
                        key={drum.name}
                        dataKey={drum.key}
                        drumButtonName={drum.letter}
                        drumAudio={drum.sound}
                    />
                )
            }
        </div>
    )
}


export default Drumset

