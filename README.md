
# JS Dev - Final Capstone

If you've ever been to an arcade you have probably seen or played whack-a-mole. *Whack-a-mole* is a game in which a player uses a mallet to hit toy moles, which appear at random, back into their holes. You are tasked in writing a computer version of this game where a user clicks on a mole (or some other entity) that appears or disapears randomly. You are encouraged to come up with an original design for this game. Feel free to use the CSS skills that you've learned in this course to give your game a unique feel.

![whackamole](https://github.com/gabrielsanchez/erddiagram/blob/main/whackamole.gif?raw=true)

# Existing Files

|Folder/file path	|Description|
|------|-----|
| `index.html` |	The HTML document that holds the game structure. You will need to modify this file so that the tests pass. |
| `src/styles.css` |	The CSS file that holds the styling of the game. You don't need to modify this file for the tests to pass but you may want to make optional changes to the file to change the appearance.|
| `src/index.js` | The JS file that holds the functionality of the game. You will need to change this file for the tests to pass. |
| `test/solution.test.js` | This file holds the unit tests of the game.|


# User Stories

The user stories have been created for the game. Each of the user stories is listed below, the user stories are to be implemented in the order in which they are listed. Find the *TODO* comments in the code and create the necessary functionality.  Try to implement the functionality by yourself and check the hints and REPLs that we provide if you get stuck.

## US-01 - Basic Game Structure

The game needs to have the basic structure for it to function. The game will need a name, some basic board controls such as a start button, a score and a timer display. The game needs 9 holes and moles defined.

#### 1. Add a title to the game surrounded in `h1` tags.

You need to name your game. The default is `whack-a-mole` but you can choose another name depending on the theme that you want to set for the game. Some variations could be `whack-a-virus`, `catch-a-cat`, etc. Surround your title in h1 tags. For the test to pass you need to assign title to the h1 id.

```html
<h1 id="title"> My game!! </h1>
```

#### 2. Add 9 holes and moles to the grid in `index.html`

The `index.html` file  has only 2 holes defined. The game should have up to 9 holes defined. Add the missing holes and moles to the html file.

```html
    <div class="grid">
      <div id="hole0" class="hole">
        <div id="mole0" class="mole"></div>
      </div>
      <div id="hole1" class="hole">
        <div id="mole1" class="mole"></div>
      </div>
      
      <!-- TODO: Add the missing holes and moles to the grid -->

```

#### 3. Define a `start` button in `index.html`

The game needs a `start` button so that a player can start playing the game. Use a `button` tag with "start" set as id.

```html
<button id="start">start</button>
```

#### 4. Use `querySelector()` or `querySelectorAll()` to access the elements in `index.js`

Great! You have defined most of the HTML structure! Now you need to make sure that you can access the elements in javascript. Go to `src/index.js` and take some time to analyze the query selectors. You should see something like this:

```js
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const startButton = document.querySelector('#start');
// TODO: Add the missing query selectors:
const score; // Use querySelector() to get the score element
const timerDisplay; // use querySelector() to get the timer element.
```

Use `querySelector()` to get the missing `score` and `timer` elements.

**Hint:** Review the "Selecting Elements from the DOM" lesson from the "JavaScript and the DOM" module if you don't remember how to use query selectors. You can also consult the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector).

#### Aceptance criteria

1. The title is surrounded by h1 tags.
2. Nine holes and moles are declared in the html file as `div`s.
4.  A start button is defined in the html file.
5.  The missing query selectors for the score and timer were added in the `index.js` file.

## US-02 - Basic Game Functionality: Randomness

Good job! You have the HTML of your game all set up and now it's time to implement some of the game functionality in JavaScript. The moles (or chosen entity) need to appear and disappear randomly.

#### 1. `randomInteger(min, max)`

The function takes two values as parameters that limits the range of the number to be generated. For example, calling randomInteger(0,10)  will return a random integer between 0 and 10. Calling randomInteger(10,200)  will return a random integer between 10 and 200.

Study [this example](https://replit.com/@thinkful/randomInteger#index.js) and Implement the `randomInteger(min, max)` function in `index.js`. 
 
**Note:** This function is already implemented for you. You only need to study the REPL and uncomment it.

#### 2. `setDelay(difficulty)`
Implement the `setDelay(difficulty)` function. The moles need to appear and disappear at a certain interval of time.  The function takes a `difficulty` parameter that can have three values: `easy`, `normal` or `hard`. If difficulty is "easy" then the function returns a time delay of 1500 milliseconds (or 1.5 seconds). If the difficulty is set to "normal" it should return 1000. If difficulty is set to "hard" it should return a randomInteger between 600 and 1200.

```js
setDelay("easy") //> returns 1500
setDelay("normal") //> returns 1000
setDelay("hard") //> returns 856 (returns a random number between 600 and 1200).
```
**Hint:** Study the Control Flow lesson if you need to review `if/else` statements.

#### 3. `chooseHole(holes)`
 Implement the `chooseHole(holes)` function. This function should select a random Hole from the list of holes that you defined. You should make sure that when you call the function it doesn't return the last hole.
 
 ```js
 const holes = document.querySelectorAll('.hole');
 chooseHole(holes) //> returns one of the 9 holes that you defined
 ```
 
 Feel free to use the following pseudocode as a guide for your implementation.
 
 ```
 function chooseHole(holes){
   // 1. generate a random integer from 0 to 8 and assign it to an index variable
   // 2. get a random hole with the random index (e.g. const hole = holes[index])
   // 3. if hole === lastHole then call chooseHole(holes) again since we don't want to return the same hole
   // 4. if hole is not the same as the lastHole then keep track of it (lastHole = hole) and return the hole
 }
 ```

**Hint:**  If you get stuck, study [this REPL](https://replit.com/@thinkful/chooseHole#script.js).

#### Acceptance criteria

1. The `randomInteger()` function works as expected.
2. The `setDelay()` function returns the correct values when a difficulty is set.
3. The `chooseHole()` function returns a random hole as specified in the pseudocode above.


## US-03: Game Flow

In the previous user story you implemented some of the basic functions necessary for the game to work correctly. Congrats! You are making good progress!

In this user story you are going to implement the game flow so that a player can start a game and the moles hide and appear randomly using the functions you created in the previous story.

#### 1. `toggleVisibility(hole)`

In the [JavaScript and the DOM: Selecting elements](#) lesson you learned about the `classList` method. Take some time to review the [classList MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) before you proceed implementing this function. Previously you used `classList.add()` and `classList.remove()` to add and remove classes to HTML elements. In this case you are asked to use `classList.toggle` so that it adds or removes the `show` class. In the `styles.css` file notice how the `.show` class is used so that the mole class appears in the respective hole:

```
function toggleVisibility(hole){
  // TODO: add hole.classList.toggle so that it adds or removes the 'show' class.
  
  return hole
}
```

**Hint:**  If you get stuck, study the  [classList MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) and see how classList.toggle is used in [ this REPL](https://replit.com/@thinkful/chooseHole#script.js).

#### 2. `showAndHide(hole)`

The purpose of this function is to show and hide the mole given a delay time and the hole where the mole is hidden. You'll need to call the `toggleVisibility` function that you just created. First call the function so the it adds the 'show' class. Then inside the `setTimeout` the `toggleVisibility` function will also need to be called so that it removes the 'show' class. You will also need set the delay that is given as a parameter. 

```js
function showAndHide(hole, delay){
  // TODO: call the toggleVisibility function so that it adds the 'show' class.
  
  const timeoutID = setTimeout(() => {
    // TODO: call the toggleVisibility function so that it removes the 'show' class when the timer times out.
    
    gameOver();
  }, 0); // TODO: change the setTimeout delay to the one provided as a parameter
  return timeoutID;
}
```

**Hint:** Study [this REPL](https://replit.com/@thinkful/showAndHide#script.js) if you get stuck. The REPL has a very similar example that implements the mechanism that you want to implement here. Recall the `setTimeout` is explained in the 'JavaScript and the DOM: Events' lesson. You can also consult the [setTimeout MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout).

#### 3. `showUp()`

This function simply calls the `showAndHide` function with a specific delay and hole. The function needs to call `setDelay()` and `chooseHole()` to call `showAndHide(hole, delay)`.

```js
function showUp() {
  let delay = 0; // TODO: call setDelay()
  const hole = 0; // TODO: call chooseHole()
  return showAndHide(hole, delay);
}
```

**Hint:** Study [this REPL](https://replit.com/@thinkful/showAndHide#script.js) if you get stuck. The REPL has a very similar example that implements the mechanism that you want to implement here.

#### 4. `gameOver()`

The purpose of this function is simply to determine if the game should continue or stop. The game continues if there is still time `if(time > 0)`. If there is still time then `showUp()` needs to be called again so that it sets a different delay and a different hole. If there is no more time then it should call the `stopGame()` function. The function also needs to return the timeoutId if the game continues or the string "game stopped" if the game is over. You don't need to worry about the time right now. The time will be addressed in US-05.

```js
function gameOver() {
  // if time > 0:
  //   timeoutId = showUp()
  //   return timeoutId
  // else
  //   gameStopped = stopGame()
  //   return gameStopped
}
```
**Hint:** Study [this REPL](https://replit.com/@thinkful/showAndHide#script.js) if you get stuck. The REPL has a very similar example that implements the mechanism that you want to implement here.

#### 5. `startGame()`

This is the function that starts the game when the 'start' button is clicked.

```js
function startGame(){
  // setDuration(10);
  // showUp();
  // return "game started";
}
```
**Note:** This function is provided to you. You only need to uncomment the code inside the function.

#### Acceptance criteria

1. The `toggleVisibility()` function works as expected and uses `hole.classList.toggle` to add or remove the 'show' class.
2. The `showAndHide()` calls `toggleVisibility()` to show or hide a mole after a delay of time using the setTimeout function provided.
3. The `showUp()` function calls `setDelay()`  and `chooseHole()` to set a delay and hole used to call `showAndHide()`.
4. The `gameOver()` function works as described in the pseudocode provided.
5. The `startGame()` function works as expected.


## US-04: Whack!

The moles now show and hide but nothing happens when a user clicks on them. In this user story you are tasked to implement the functions that handle the clicking events and scoring.

#### 1. `updateScore()`

This function increments the points global variable and updates the scoreboard.  Use the `points` global variable that is already defined and increment it by 1. After the `points` variable is incremented proceed by updating the scoreboard that you defined in the `index.html` file. To update the scoreboard you can use `score.textContent = points;`. Use the comments in the function as a guide for your implementation:

```js
function updateScore() {
  // increment the points global variable by 1 point
  // update score.textContent with points.
  // return points;
}

```

#### 2. `clearScore()`

This function is similar to `updateScore` but instead of incrementing the scoreboard it resets it to 0. This is necessary if the game finishes and the player wants to play again.

```js
function clearScore() {
  // set the points global variable to 0
  // update score.textContent 
  // return points;
}
```

#### 3. `whack(event)`

This is an event handler that simply calls the `updateScore()` function to increment the score if a mole has been clicked by the player. If you don't remember event handlers, please go and review the "Event Listeners" lesson from the "JavaScript and the DOM" module.

```js
function whack(event) {
  // call updateScore();
  // return points;
}
```
**Hint:** Try to implement the solution by yourself and then look at how we suggest you implement this function in this [REPL](https://replit.com/@thinkful/addEventListeners#script.js)

#### 4. `setEventListeners(moles)`

You defined an event handler in the previous step and now it's time to set the event listeners so that the event handler gets called when a player clicks on a mole. If you don't remember event listeners, please go and review the "Event Listeners" lesson from the "JavaScript and the DOM" module.

```js
function setEventListeners(){
  // forEach mole add the whack event handler when a player clicks on the mole.
  // return moles;
}

```
**Hint:** Try to implement the solution by yourself and then look at how we suggest you implement this function in this [REPL](https://replit.com/@thinkful/addEventListeners#script.js)

#### Acceptance criteria

1. The score points increment by 1 and the scoreboard is updated when `updateScore()` is called.
2. The `clearScore()` function set the points to 0 and the scoreboard is updated accordingly.
3. `setEventListeners(moles)` adds a "click" eventListener to each of the moles.
4. `whack(event)` calls `updateScore()` when a player clicks on a mole. 

## US-05: Timer

The game needs a timer that informs the player how many seconds they have left. You'll need to use `setInterval()` to create a timer. Go back and review the `setInterval` function in the "JavaScript and the DOM: Events" lesson.  You may also use the functions provided in [this REPL](https://replit.com/@thinkful/timer#script.js).

#### 1. startTimer()

Implement the `startTimer()` function in the game. 

```js
function startTimer() {
  timer = setInterval(updateTimer, 1000);
  return timer;
}
```

**Note:** This is the same function that we provide in  [this REPL](https://replit.com/@thinkful/timer#script.js). 

#### 2. updateTimer()

Implement the `updateTimer()` function in the game:

```js
function updateTimer() {
  if (time > 0){
    time -= 1;
    timerDisplay.textContent = time;
  }
  return time;
}
```
**Note:** This is the same function that we provide in  [this REPL](https://replit.com/@thinkful/timer#script.js).

#### Acceptance criteria

1. `startTimer()` and `updateTimer()` work as expected.
2. The timer displays in the game.


## US-06: Originality

Good job in making it this far! You have a functional game and it's time to add some uniqueness and originality to make it your own. Read the following suggestions and implement whatever you want. There are no unit tests for this user story but originality will be considered in the rubric.

#### 1. Change the look of the game.
The game looks great but it looks similar to the games of some  other student's in the program. Hack the `styles.css` file and make changes to make your game look unique. You can change the background, the sprites, the fonts, and the general appearance of the game. Why not instead of moles use zombies or monsters? Study  and experiment with `styles.css` and see what you can come up.

#### 2. Audio FX and Music
A game without sound FX and music can be pretty boring. Here is a [REPL](https://replit.com/@thinkful/audiofx-and-music#script.js) with an example on how to add audio to your game. Feel free to use your own audio files.

#### 3. Additional features
You can add additional features to your game like adding more user controls to control difficulty, adding a sprite that takes off points if it gets hit, adding additional animations, etc.

#### Acceptance criteria

1. There are no unit tests for this user story but originality and creativity will be considered in the rubric. Consider implementing at least one of the suggested options listed above.

## US-07: Deploying to Github

You made it! You finished the first version of your game and now it's time to show it to the world so that your friends and potential employers can look at your work. Follow the insturctions in the [Intro to Github lesson](https://overview.thinkful.com/preview/FEWD-201/version/3/introduction-to-web-development/html-and-css-fundamentals/intro-to-github) and deploy your game so that it becomes part of your portfolio.

#### Acceptance criteria

1. Project is deployed to Github.


# Success Criteria

Functionality:
- The game works and covers the user stories as described above.
- The game has at least one original feature as described in US-06.
- All the tests pass as expected.

General Code Organization:
- Minimal code duplication
- Comments are used to describe the functions.


# Tips

- Start by completing the required HTML elements and then proceed to work on the javascript functions. We recommend you leave any CSS changes at last. Follow the order of the user stories.
- If you are stuck, take a careful look at the resources that we provide. If you are still stuck, ask a friend or a mentor for help.
- Read the user stories and tests carefully.
