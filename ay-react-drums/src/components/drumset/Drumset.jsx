import './drumset.scss'
import ImageMapper from 'react-img-mapper'
import { useState, useEffect } from 'react'
import { AREA_MAP, IMAGE_URL } from '../data/Data'



const Drumset = (props) => {
   let [drumTrigger, isDrumTrigger] = useState(false);
   let [drumClick, isDrumClick] = useState('');
   let [drumKey, isDrumKey] = useState(0);


//    useEffect(() => {
//        keySound.addEventListener(isDrumKey, removeTransition);
//    });


    // prevent continuous sound/events
    const handleClick = (e) => {
        e.preventDefault();
    }
 
//     // Mouse click
//    const clickDrum = () => {
//        if(!isDrumTrigger) {
//            this.audio.play({props.drummap.id.sound});
//            this.audio.currentTime = 0;
//            handleClick();
//        }
//     }

    // Keyboard click
    const drumKeyClick = () => {
        if (!drumKey) {
            this.audio.play({});
            this.audio.currentTime = 0;
            handleClick();
        }
    }


    return (
        <div className="container">
           <ImageMapper
                src={IMAGE_URL}
                map={AREA_MAP}
                width={800}
                height={500}
                imgWidth={800}
                parentWidth={800}
                responsive={true}

                onClick={() => {isDrumClick(true)}}
                onTouchStart={() => {isDrumClick(true)}}
                onImageClick={() => {isDrumClick(false)}} //Outside area clicks
            />
            <audio></audio>

        </div>
    )
}

export default Drumset

