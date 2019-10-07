const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionEnd', removeTransition));
window.addEventListener('keydown', playSound);

function playSound(note){
    const audio = document.querySelector(`audio[data-key="${note.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${note.keyCode}"]`);    
    if (!audio) {
        return;
    }
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    
};

function removeTranstion(note){
    if (note.propertyName !== 'transform'){
        return;
    }
    key.classList.remove('playing');
};