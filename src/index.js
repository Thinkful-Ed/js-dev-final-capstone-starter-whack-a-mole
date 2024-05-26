document.addEventListener("DOMContentLoaded", () => {
const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const startButton = document.querySelector('#start');
const score = document.querySelector('#score');
const timerDisplay = document.querySelector('#timer'); 

let time = 0;
let timer;
let lastHole = 0;
let points = 0;
let difficulty = "hard";


function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 


function setDelay(difficulty) {
   
    if (difficulty === 'easy') {
      return 1500;
    } else if (difficulty === 'normal') {
      return 1000;
    } else if (difficulty === 'hard') {
      return randomInteger(600, 1200);
    }
  }

  function chooseHole(holes) {
  
      const index =  randomInteger(0, holes.length - 1);
      const hole = holes[index];
      if (hole === lastHole) {
        return chooseHole(holes);
      }
      lastHole = hole;
      return hole;
    }
  


  function gameOver() {
    if(time > 0){
      let timeoutId = showUp();
      return timeoutId;
    } else {
     let gameStopped = stopGame();
     clearInterval(timer);
     return gameStopped;
    }
  }


  function showUp() {
    let delay = setDelay(difficulty);
    const hole = chooseHole(holes);
    return showAndHide(hole, delay);
  }

  
  function showAndHide(hole, delay) {
    delay = setDelay(difficulty);
    toggleVisibility(hole, 'show');
    const timeoutID = setTimeout(() => {
    toggleVisibility(hole, 'hide');
      gameOver();
    },delay);
    return timeoutID;
  }

  function toggleVisibility(hole) {
    hole.classList.toggle('show');
    return hole;
  }

    
  function updateScore() {
   
    points++;
    score.textContent = points;
    return points;
  }

  function clearScore() {
    points= 0;
    score.textContent = points;
    return points;
  }
  
 
  function updateTimer() {
    if (time > 0){
      time -= 1;
      timerDisplay.textContent = time;
    }
    return time;
  }


  function startTimer() {
    timer = setInterval(updateTimer, 1000);
    return timer;
  }
  
  
  function whack(event) {
    updateScore()
    return points;
  }
  

  function setEventListeners(){
    moles.forEach(
      mole => mole.addEventListener('click', whack)
    );
    return moles;
  }



  function setDuration(duration) {
  
   time = duration;
    return time;
  }



  function stopGame(){
    /*stopAudio(song);*/
    clearInterval(timer);
    return "game stopped";
  }
  
  
  function startGame() {
    setDuration(10);
    clearScore();
    startTimer();
    showUp();
    return "game started";
  }
  
  startButton.addEventListener("click", startGame);
  setEventListeners();
});


     

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
