const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionEnd', removeTransition));
window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeTransition);



function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) {
        return;
    } 
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform'){
        return;
    }
   key.classList.remove('playing');
}