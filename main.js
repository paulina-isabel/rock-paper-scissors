
// Query selectors
var fighters = document.querySelectorAll('.fighter');
var homeView = document.querySelector('.home-view');
var displayMessage = document.querySelector('.display-message');
var classicGameView = document.querySelector('.classic-game-view');
var difficultGameView = document.querySelector('.difficult-game-view');
var chosenFighters = document.querySelector('.chosen-fighters');
var humanTally = document.querySelector('.human-wins-tally');
var computerTally = document.querySelector('.computer-wins-tally');
var changeGameButton = document.querySelector('.change-game-button');
var classicChoiceButton = document.querySelector('.classic-choice');
var difficultChoiceButton = document.querySelector('.difficult-choice');

// Event listeners
changeGameButton.addEventListener('click', changeGame);
classicGameView.addEventListener('click', startGame);
difficultGameView.addEventListener('click', startGame);

classicChoiceButton.addEventListener('click', function() {
  displayGame(classicGameView)
  game.classicGameisChosen = true;
});

difficultChoiceButton.addEventListener('click', function() {
  displayGame(difficultGameView)
});

fighters.forEach(fighter => {
  fighter.addEventListener('click', assignFighter)
});

// Global variables
var humanPlayer = createPlayer('Human', 0);
var computerPlayer = createPlayer('Computer', 0);

var classicVersion = {
  fighters: ['rocks', 'paper', 'scissors']
};

var difficultVersion = {
  fighters: ['rocks', 'paper', 'scissors', 'alien', 'ufo']
};

var gameRules = {
  rocks: ['scissors', 'ufo'],
  paper: ['rocks', 'alien'],
  scissors: ['paper', 'ufo'],
  alien: ['scissors', 'rocks'],
  ufo: ['paper', 'alien']
};

// JS
function createPlayer(name) {
  var player = {
    playerName: name,
    playerWins: 0,
    chosenFighter: null
  }
  return player
};

function createGame() {    
  var game = {
    player1: humanPlayer,
    player2: computerPlayer,
    classicGameisChosen: false
  }
  return game
};

function removeHiddenClassList(elements) {
  for (var i = 0; i <elements.length; i++) {
    elements[i].classList.remove('hidden')
  }
};

function addHiddenClassList(elements) {
  for (var i = 0; i <elements.length; i++) {
    elements[i].classList.add('hidden')
  }
};

function displayGame(gameView) {
  game = createGame()
  addHiddenClassList([homeView])
  removeHiddenClassList([gameView, changeGameButton])
  displayMessage.innerText = "Choose your fighter!"
};

function findOpponent(computerPlayer) {
  if (game.classicGameisChosen === true) {
    var randomClassicIndex = Math.floor(Math.random() * classicVersion.fighters.length)
    computerPlayer.chosenFighter = classicVersion.fighters[randomClassicIndex]
  } else {
    var randomDifficultIndex = Math.floor(Math.random() * difficultVersion.fighters.length)
    computerPlayer.chosenFighter = difficultVersion.fighters[randomDifficultIndex];
  }
};

function assignFighter(event) {
  humanPlayer.chosenFighter = event.target.id;
  if (game.classicGameisChosen === true) {
    findOpponent(computerPlayer)
    displayChosenFighter(computerPlayer.chosenFighter)
  } else {
    findOpponent(computerPlayer)
    displayChosenFighter(computerPlayer.chosenFighter)  
  }
  displayChosenFighter(event)
};

function displayChosenFighter() {
  addHiddenClassList([classicGameView, difficultGameView])
  removeHiddenClassList([chosenFighters])
  chosenFighters.innerHTML = `<img class="fighter" id="${humanPlayer.chosenFighter}" src="assets/${humanPlayer.chosenFighter}.png">
  <img class="fighter" id="${computerPlayer.chosenFighter}" src="assets/${computerPlayer.chosenFighter}.png">`
};

function startGame(event){
  assignFighter(event),
  checkDraw(),
  whoWon(),
  updateScore(),
  displayScores(),
  setTimeout(resetGame, 1500)
};

function resetGame() {
  addHiddenClassList([chosenFighters])
  chosenFighters.innerHTML = ""
  classicGameView.innerHTML = `<img class="fighter" id="rocks" src="assets/rocks.png" alt="rocks">
    <img class="fighter" id="paper" src="assets/paper.png" alt="paper">
    <img class="fighter" id="scissors" src="assets/scissors.png" alt="scissors">`;
  difficultGameView.innerHTML = `<div>
    <img class="fighter" id="rocks" src="assets/rocks.png" alt="rocks">
    <img class="fighter" id="paper" src="assets/paper.png" alt="paper">
    <img class="fighter" id="scissors" src="assets/scissors.png" alt="scissors"></div>
    <div><img class="fighter" id="alien" src="assets/alien.png" alt="alien">
    <img class="fighter" id="ufo" src="assets/ufo.png" alt="ufo"></div>`;
  displayMessage.innerText = 'Choose your fighter!'
  gameViewReset()
};

function gameViewReset() {
  if (game.classicGameisChosen === true) {
    removeHiddenClassList([classicGameView])
  } else {
    removeHiddenClassList([difficultGameView])
  }
};

function whoWon() {
  if (game.isDraw === true) {
    displayMessage.innerText = 'It\'s a draw!'    
  } else if (gameRules[humanPlayer.chosenFighter].includes(computerPlayer.chosenFighter)) {
    displayMessage.innerText = 'Human won this round!'
  } else {
    displayMessage.innerText = 'Computer won this round!'
  }
};

function checkDraw() {
  if (humanPlayer.chosenFighter === computerPlayer.chosenFighter) {
    game.isDraw = true
  } else {
    game.isDraw = false
  }
};

function updateScore() {
  if (displayMessage.innerText === 'Human won this round!') {
    humanPlayer.playerWins += 1
  } else if (displayMessage.innerText === 'Computer won this round!') {
    computerPlayer.playerWins += 1
  }
};

function displayScores() {
  humanTally.innerText = `Wins: ${humanPlayer.playerWins}`
  computerTally.innerText = `Wins: ${computerPlayer.playerWins}`
};

function changeGame() {
  displayMessage.innerText = 'Choose your game!'
  addHiddenClassList([classicGameView, difficultGameView, changeGameButton, chosenFighters])
  removeHiddenClassList([homeView])
};