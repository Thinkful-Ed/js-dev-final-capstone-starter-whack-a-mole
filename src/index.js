const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const startButton = document.querySelector("#start");
const score = document.querySelector("#score");
const timerDisplay = document.querySelector("#timer");
const molePopSound = new Audio("sounds/mole-pop.mp3");
const whackSound = new Audio("sounds/whack.mp3");
const gameOverSound = new Audio("sounds/game-over.mp3");
const gameStartSound = new Audio("sounds/game-start.mp3");

let time = 0;
let timer;
let lastHole = 0;
let points = 0;
let delay = document.querySelector("#delay").value;
let duration = document.querySelector("#duration").value;

/*
 * Generates a random integer within a range of min and max.
 */
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/*
 * Sets the time delay given a difficulty parameter.
 *
 * Example:
 * setDelay("easy")
 * setDelay("normal")
 * setDelay("hard")
 */
function setDelay(delay) {
  if (delay === "easy") {
    return 1500;
  } else if (delay === "normal") {
    return 1000;
  } else if (delay === "hard") {
    return randomInteger(600, 1200);
  }
}
/*
 * Chooses a random hole from a list of holes.
 */
function chooseHole(holes) {
  let index = 0;
  index = randomInteger(0, 8);
  const hole = holes[index];
  if (hole === lastHole) {
    return chooseHole(holes);
  }
  lastHole = hole;
  return hole;
}
/*
 * The purpose of this function is to show and hide the mole given
 * a delay time and the hole where the mole is hidden.
 */
function showAndHide(hole, delay) {
  // call toggleVisibility so it adds the 'show' class.
  toggleVisibility(hole);

  const timeoutID = setTimeout(() => {
    // call toggleVisibility so that it 'show' class when the timer times out.
    toggleVisibility(hole);
    gameOver();
  }, 0);

  setTimeout.delay = delay; // changes the setTimeout delay to the one provided as a parameter.
  return timeoutID;
}
/*
 * Adds or removes the 'show' class that is defined in styles.css to
 * a given hole. It returns the hole.
 */
function toggleVisibility(hole) {
  hole.classList.toggle("show");
  return hole;
}
/*
 * Calls the showAndHide() function with a specific delay and a hole.
 */
function showUp() {
  let delay = 0;
  delay = setDelay(delay); // Get the appropriate delay based on difficulty
  const hole = chooseHole(holes); // Choose a random hole
  molePopSound.play(); // Play mole pop sound
  return showAndHide(hole, delay); // Show the mole
}
/*
 * Calls the showUp function if time > 0 and stops the game if time = 0.
 */
function gameOver() {
  if (time <= 0) {
    return stopGame();
  } else {
    return showUp();
  }
}
/*
 * This function increments the points global variable and updates the scoreboard.
 * After the `points` variable is incremented, proceed by updating the scoreboard.
 */
function updateScore() {
  points++;
  score.textContent = points;
  return points;
}
/*
 * This function clears the score by setting `points = 0`. It also updates
 * the board using `score.textContent = points`. The function should return
 * the points.
 */
function clearScore() {
  points = 0;
  score.textContent = points;
  return points;
}
/*
 * Adds the 'click' event listeners to the moles. See the instructions
 * for an example on how to set event listeners using a for loop.
 */
function setEventListeners() {
  moles.forEach((mole) => {
    mole.addEventListener("click", whack);
  });
  return moles;
}
/*
 * This is the event handler that gets called when a player
 * clicks on a mole. The setEventListeners should use this event
 * handler (e.g. mole.addEventListener('click', whack)) for each of
 * the moles.
 */
function whack(event) {
  whackSound.play(); // Play whack sound
  updateScore();
  return points;
}
/*
 * Starts the timer using setInterval. For each 1000ms (1 second)
 * the updateTimer function get called. This function is already implemented
 */
function startTimer() {
  timer = setInterval(updateTimer, 1000);
  return timer;
}
/*
 * Updates the control board with the timer if time > 0
 */
function updateTimer() {
  if (time > 0) {
    time -= 1;
    timerDisplay.textContent = time;
  }
  return time;
}
/*
 * This function sets the duration of the game. The time limit, in seconds,
 * that a player has to click on the sprites.
 */
function setDuration(duration) {
  time = duration;
  return time;
}
/*
 * This function is called when the game is stopped. It clears the
 * timer using clearInterval. Returns "game stopped".
 */
function stopGame() {
  //stopAudio(song);  //optional
  clearInterval(timer);
  gameOverSound.play(); // Play game over sound
  return "game stopped";
}
/*
 * This function starts the game when the `startButton` is clicked and initializes the game by performing the following steps:
 * 1. Clears the score using `clearScore()`.
 * 2. Sets the game duration using `setDuration()`.
 * 3. Sets up event listeners on the moles using `setEventListeners()`.
 * 4. Starts the game timer by calling `startTimer()`.
 * 5. Begins the game loop by calling `showUp()` to display moles.
 * Note: Simply uncommenting `setDuration(10);` and `showUp();` is not enough. To make the game work, ensure all necessary functions listed above are called to initialize the score, timer, event listeners, and mole appearances.
 */
startButton.addEventListener("click", startGame);

function startGame() {
  clearScore();
  setDuration(duration);
  setDelay(delay);
  setEventListeners();
  startTimer();
  showUp();

  gameStartSound.play(); // Play game start sound

  return "game started";
  //stopGame(); //optional
}

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
