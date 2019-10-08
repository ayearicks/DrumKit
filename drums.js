// 
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

// Plays sound according to key pressed
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // When the audio stops, stop the function
    if (!audio) {return;}
    // Class for adding stylized changes to buttons
    key.classList.add('playing');
    // Restarts sound loop, and plays
    audio.currentTime = 0;
    audio.play();
}

// Function to remove class when sound is done
function removeTransition(e) {
    if (e.propertyName !== 'transform') {return;}
    this.classList.remove('playing');
}