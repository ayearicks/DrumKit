import { useEffect, useRef } from 'react'
import useSound from 'use-sound';
import './drumsound.scss'


const DrumSound = (props) => { 

    const drumButton = useRef(null);
    const [play] = useSound(props.drumAudio);

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

    
    return (
        <div className="drumsound">
            <button ref={drumButton} onClick={play} className={'DrumSound'}>
                {props.drumButtonName}
            </button>
        </div>
    )


}

export default DrumSound