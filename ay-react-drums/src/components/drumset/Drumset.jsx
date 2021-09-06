import './drumset.scss'
import DrumSound from '../drumSound/DrumSound'

import HighHat from '../../7sounds/highhat.wav'
import OpenHighHat from '../../sounds/openhat.wav'
import Snare from '../../sounds/snare.wav'
import Tom1 from '../../sounds/tom1.wav'
import Tom2 from '../../sounds/tom2.wav'
import FloorTom from '../../sounds/floortom.wav'
import Kick from '../../sounds/kick.wav'
import Crash16 from '../../sounds/crash16.wav'
import Ride from '../../sounds/ride.wav'
import RideBell from '../../sounds/ridebell.wav'
import Crash14 from '../../sounds/crash14.wav'

const Drumset = () => {



const drumMap = [
    {
        name: 'high-hat',
        sound: HighHat,
        letter: 'h',
        key: 72
    },
    {
        name: 'open-high-hat',
        sound: OpenHighHat,
        letter: 'g',
        key: 71
    },
    {
        name: 'snare',
        sound: Snare,
        letter: 'a',
        key: 65
    },
    {
        name: 'tom1',
        sound: Tom1,
        letter: 'q',
        key: 81
    },
    {
        name: 'tom2',
        sound: Tom2,
        letter: 'w', 
        key: 87
    },
    {
        name: 'floor-tom',
        sound: FloorTom,
        letter: 'e',
        key: 69
    },
    {
        name: 'kick',
        sound: Kick,
        letter: 'x',
        key: 88
    },
    {
        name: 'crash16',
        sound: Crash16,
        letter: 't',
        key: 84
    },
    {
        name: 'ride',
        sound: Ride,
        letter: 'k',
        key: 75
    },
    {
        name: 'ride-bell',
        sound: RideBell,
        letter: 'l',
        key: 76
    },
    {
        name: 'crash14',
        sound: Crash14,
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

