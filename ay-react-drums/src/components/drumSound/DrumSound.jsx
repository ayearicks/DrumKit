import { useEffect, useRef } from 'react'
import useSound from 'use-sound';
import './drumsound.scss'
import { Howl, Howler } from 'howler'


const DrumSound = (props) => { 

    const drumButton = useRef(null);
    const playSound = new Howl({
        src: [props.drumAudio]
    });

    const handlePlay = (ev) => {
        if (ev.key === props.dataKey) {
            playSound.play();
            drumButton.current.classList.add('active');
        }
    }
    
    const handleStop = () => {
        drumButton.current.classList.remove('active');
    }

    useEffect(() => {
        window.addEventListener('keydown', handlePlay);
        window.addEventListener('keyup', handleStop);
        return () => {
            window.removeEventListener('keyup', handleStop);
            window.removeEventListener('keydown', handlePlay);
        }
    });

    
    return (
        <button ref={drumButton} onClick={() => {playSound.play()}} className={'DrumSound'}>
            {props.drumButtonName}
        </button>
    )

}

export default DrumSound