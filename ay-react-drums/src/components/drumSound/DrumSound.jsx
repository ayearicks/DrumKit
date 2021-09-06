import { useEffect, useRef } from 'react'
import Drumset from '../drumset/Drumset';
import useSound from 'use-sound';
import './drumsound.scss'



const DrumSound = (props) => { 

    const drumButton = useRef(null);
    const [play] = useSound(props.drumAudio);

    const [isPlaying, setIsPlaying] = useState(false);
    const handlePlay = (ev) => {
        if (ev.key === props.dataKey) {
            play();
            drumButton.current.classList.add('active');
        }
    }
    
    const handleStop = (ev) => {
        drumButton.current.classList.remove('active');
    }

    useEffect(() => {
        window.addEventListener('keydown', handlePlay);
        window.addEventListener('keyup', handleStop);
        return () => {
            window.removeEventListener('keyup', handleStop);
            window.removeEventListener('keydown', handlePlay);
        }
    }, []);
    

    const RenderButton = () => {

        return DrumMap.map((soundObj, index) => {
            return(
                <button 
                    ref={drumButton} 
                    key={index}
                    onClick={play}
                    className={'DrumSound'}
                   >
                        <p>{soundObj.letter}</p>
                        <p>{soundObj.name}</p>
                </button>
            )
        });
    }

    
    return (
        <div className="drumsound">
            {RenderButton()}
        </div>
    )


}

export default DrumSound