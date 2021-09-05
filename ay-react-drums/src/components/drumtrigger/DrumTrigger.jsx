import { AREAS_MAP, IMAGE_URL } from '../data/Data'
import { useState } from 'react';


const DrumTrigger = (props) => {
    const mapDrumTrigger = AREAS_MAP;
    const displayTriggers = mapDrumTrigger.map((id) => 
        <li>{mapDrumTrigger}</li>
    );
    return (
        <ul>{displayTriggers}</ul>
    );

    

    // let [clickdrum, isClickDrum] = useState(false);



    // if (!isClickDrum) {
    //     handleClick = () => {
    //         this.audio.play();
    //         this.audio.currentTime = 0;
    //         this.props.handleDisplay(this.props.id);
    //     }
    // }



    // return (
    //     <button 
    //         className="DrumTrigger"
            
    //         >
    //             {props.letter}
    //     </button>
    // )
}

export default DrumTrigger
