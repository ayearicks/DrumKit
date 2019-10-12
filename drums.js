const keys = Array.from(document.querySelectorAll('.key'));
const touchKey = Array.from(document.querySelectorAll('.key'));
const touchText = Array.from(document.querySelectorAll('.sound'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// Listen for Touch
touchKey.forEach(touch => touch.addEventListener('touchstart', touchSound, true));
touchText.forEach(touchWord => touchWord.addEventListener('touchstart', touchSound, true));
// Listen for Keyboard
window.addEventListener('keydown', keySound);

function touchSound(e) {
    const key = document.querySelector(`.key[data-key="${e.target.getAttribute('data-key')}"]`);
    const audio = document.querySelector(`audio[data-key="${e.target.getAttribute('data-key')}"]`);
    // If audio doesn't match key, stop the function
    if (!audio) { return; }
    // Class for adding stylized changes to buttons
    key.classList.add('playing');
    // Restarts sound loop, and plays
    audio.currentTime = 0;
    audio.play();
}

// Plays sound according to key pressed
function keySound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // If audio doesn't match key, stop the function
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

