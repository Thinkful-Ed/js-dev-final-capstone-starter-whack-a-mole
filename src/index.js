const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const startButton = document.querySelector('#start');
const score = document.querySelector('#score'); 
const timerDisplay = document.querySelector('#timer'); 
const backgroundSound = document.querySelector('#backgroundSound');

let time = 0;
let timer;
let lastHole = 0;
let points = 0;
let difficulty = "hard";

/**
 * Generates a random integer within a range.
 */
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Sets the time delay given a difficulty parameter.
 */
function setDelay(difficulty) {
  if (difficulty === "easy") {
    return 1500;
  } else if (difficulty === "normal") {
    return 1000;
  } else if (difficulty === "hard") {
    return randomInteger(600, 1200);
  }
}

/**
 * Chooses a random hole from a list of holes.
 */
function chooseHole(holes) {
  const index = randomInteger(0, holes.length - 1);
  const hole = holes[index];
  if (hole === lastHole) {
    return chooseHole(holes)
  } 
  lastHole = hole;    
  return hole;
}

function gameOver() {
  if (time > 0) {
    let timeoutId = showUp();
    return timeoutId;
  } else {
    let gameStopped = stopGame();
    return gameStopped;
  }
}


/**
 * Calls the showAndHide() function with a specific delay and a hole.
 */
function showUp() {
  let delay = setDelay(difficulty);
  const hole = chooseHole(holes);
  return showAndHide(hole, delay);
}

/**
 * The purpose of this function is to show and hide the mole given
 * a delay time and the hole where the mole is hidden.
 */
function showAndHide(hole, delay){
  toggleVisibility(hole);
  const timeoutID = setTimeout(() => {
    toggleVisibility(hole)
    gameOver();
  }, delay); 
  return timeoutID;
}

/**
 * Adds or removes the 'show' class to a given hole.
 */
function toggleVisibility(hole){
  hole.classList.toggle('show');
  return hole;
}

/**
 * This function increments the points global variable and updates the scoreboard.
 */
function updateScore() {
  points++;
  score.textContent = points;
  return points;
}

/**
 * Clears the score by setting points = 0.
 */
function clearScore() {
  points = 0;
  score.textContent = points;
  return points;
}

/**
 * Updates the control board with the timer if time > 0.
 */
function updateTimer() {
  if (time > 0) {
    time -= 1;
    timerDisplay.textContent = time;
  }
  return time;
}

/**
 * Starts the timer using setInterval.
 */
function startTimer() {
  timer = setInterval(updateTimer, 1000);
  return timer;
}


// Function to pause the background sound
function pauseBackgroundSound() {
  backgroundSound.pause();
};

/**
 * This function is called when the game is stopped. It clears the
 * timer using clearInterval.
 */
function stopGame(){
  clearInterval(timer);
  pauseBackgroundSound();
  return "game stopped";
}

/**
 * This is the function that starts the game when the `startButton`
 * is clicked.
 */
function startGame(){
  console.log("startGame function called");
  setDuration(10);
  startTimer();
  showUp();
  return "game started";
}

/**
 * Event handler that gets called when a player clicks on a mole.
 */
function whack(mole) {
  updateScore();
  document.getElementById('hitSound').play();
  mole.classList.remove('show'); // Hide the mole after whacking
  return points;
}

/**
 * Sets event listeners to the moles.
 */
function setEventListeners(){
  moles.forEach(mole => {
    mole.addEventListener('click', () => whack(mole));
  });
  return moles;
}

/**
 * Sets the duration of the game.
 */
function setDuration(duration) {
  time = duration;
  return time;
}

// Function to play the background sound
function playBackgroundSound() {
  backgroundSound.play();
}

// Event listener for the start button
startButton.addEventListener("click", function() {
  startGame(); // Call the startGame function
  playBackgroundSound(); // Play the background sound
});

setEventListeners();

// Please do not modify the code below.
// Used for testing purposes.
window.randomInteger = randomInteger;
window.chooseHole = chooseHole;
window.setDelay = setDelay;
window.startGame = startGame;
window.gameOver = gameOver;
window.showUp = showUp;
window.holes = holes;
window.moles = moles;
window.showAndHide = showAndHide;
window.points = points;
window.updateScore = updateScore;
window.clearScore = clearScore;
window.whack = whack;
window.time = time;
window.setDuration = setDuration;
window.toggleVisibility = toggleVisibility;
window.setEventListeners = setEventListeners;
