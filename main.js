var displayMessage = document.querySelector('#display-message');
var fighters = document.querySelectorAll('.fighter');
// VIEWS SELECTORS
var homeView = document.querySelector('.home-view');
var classicGameView = document.querySelector('.classic-game-view');
var difficultGameView = document.querySelector('.difficult-game-view');
var chosenFighters = document.querySelector('.chosen-fighters');
var classicBack = document.getElementById('#classic-view');
var humanTally = document.querySelector('.human-wins-tally');
var computerTally = document.querySelector('.computer-wins-tally');
//BUTTONS selectors
var changeGameButton = document.querySelector('.change-game-button');
var classicChoiceButton = document.querySelector('.classic-choice');
var difficultChoiceButton = document.querySelector('.difficult-choice');


//EVENT LISTENERS
classicChoiceButton.addEventListener('click', function() {
  displayGame(classicGameView)
  classicGameisChosen = true;
});
difficultChoiceButton.addEventListener('click', function() {
  displayGame(difficultGameView)
});
changeGameButton.addEventListener('click', changeGame);
classicGameView.addEventListener('click', battle);
difficultGameView.addEventListener('click', battle);

fighters.forEach(fighter => {
  fighter.addEventListener('click', assignFighter);
})

// GLOBE VARS
var classicGameisChosen = false;
var difficultGameisChosen = false;
var humanPlayer = createPlayer('Human', 0);
var computerPlayer = createPlayer('Computer', 0);
var classicGame = createGame('Classic');
var difficultGame = createGame('Difficult');

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

function createPlayer(name) {
  var player = {
    playerName: name,
    playerWins: 0,
    chosenFighter: null
  }
  return player
}

function createGame() {
  var game = {
    player1: humanPlayer,
    player2: computerPlayer,
    classicGameisChosen: false,
  }
  return game
}

function displayGame(gameView) {
  game = createGame()
  homeView.classList.add('hidden');
  gameView.classList.remove('hidden');
  changeGameButton.classList.remove('hidden');
  displayMessage.innerText = "Choose your fighter!";  
}

// function findOpponent(computerPlayer) {
//   if 
// }

function findClassicOpponent(computerPlayer) {
  var randomClassicIndex = Math.floor(Math.random() * classicVersion.fighters.length);
 computerPlayer.chosenFighter = classicVersion.fighters[randomClassicIndex]
}

function findDifficultOpponent(computerPlayer) {
  var randomDifficultIndex = Math.floor(Math.random() * difficultVersion.fighters.length);
  computerPlayer.chosenFighter = difficultVersion.fighters[randomDifficultIndex];
}

function assignFighter(event) {
  humanPlayer.chosenFighter = event.target.id;
  if (classicGameisChosen === true) {
    findClassicOpponent(computerPlayer)
    displayChosenFighter(computerPlayer.chosenFighter)
  } else {
    findDifficultOpponent(computerPlayer)
    displayChosenFighter(computerPlayer.chosenFighter)
  }
  displayChosenFighter(event);   
};

function displayChosenFighter() {
  chosenFighters.classList.remove('hidden');
  classicGameView.classList.add('hidden');
  difficultGameView.classList.add('hidden');
  chosenFighters.innerHTML = `<img class="fighter" id="${humanPlayer.chosenFighter}" src="assets/${humanPlayer.chosenFighter}.png">
  <img class="fighter" id="${computerPlayer.chosenFighter}" src="assets/${computerPlayer.chosenFighter}.png">`
};

function battle(event){
  assignFighter(event),
  checkDraw()
  whoWon(),
  updateScore(),
  displayScores(),
  setTimeout(resetGame, 3000)
}

function resetGame() {
  chosenFighters.classList.add('hidden');
  chosenFighters.innerHTML = ""
  classicGameView.innerHTML = `<img class="fighter" id="rocks" src="assets/rocks.png">
  <img class="fighter" id="paper" src="assets/paper.png">
  <img class="fighter" id="scissors" src="assets/scissors.png">`;
  difficultGameView.innerHTML = `<img class="fighter" id="rocks" src="assets/rocks.png">
  <img class="fighter" id="paper" src="assets/paper.png">
  <img class="fighter" id="scissors" src="assets/scissors.png">
  <img class="fighter" id="alien" src="assets/alien.png">
  <img class="fighter" id="ufo" src="assets/ufo.png">`;
  displayMessage.innerText = 'Choose your fighter!'
  gameViewReset()
}

function gameViewReset() {
  if (classicGameisChosen === true) {
    classicGameView.classList.remove('hidden')
  } else {
    difficultGameView.classList.remove('hidden')
  }
}

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
  humanTally.innerText = `Wins: ${humanPlayer.playerWins}`;
  computerTally.innerText = `Wins: ${computerPlayer.playerWins}`;
};

function changeGame() {
  homeView.classList.remove('hidden');
  classicGameView.classList.add('hidden');
  difficultGameView.classList.add('hidden');
  changeGameButton.classList.add('hidden');
  chosenFighters.classList.add('hidden');
};