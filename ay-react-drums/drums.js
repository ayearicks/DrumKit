// Global Variables
const keys = Array.from(document.querySelectorAll('.key'));
const touchKey = Array.from(document.querySelectorAll('.key'));

// Assign an event and function for each key
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Assign an event and function for each touch
touchKey.forEach(touch => touch.addEventListener('touchstart', touchSound, true));

// Listen for Keyboard
window.addEventListener('keydown', keySound);


// function to play mobile sound based on button touched.
function touchSound(e) {
    const key = document.querySelector(`.key[data-key="${e.target.getAttribute('data-key')}"]`);
    const audio = document.querySelector(`audio[data-key="${e.target.getAttribute('data-key')}"]`);
    // If audio doesn't match next button pressed, stop the function
    if (!audio) { return; }
    // Class for adding stylized changes to buttons
    key.classList.add('playing');
    // Restarts sound loop, and plays
    audio.currentTime = 0;
    audio.play();
}

// Plays sound according to key pressed on desktop
function keySound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // If audio doesn't match next key pressed, stop the function
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

