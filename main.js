//CHOOSE YOUR XYZ MSG selector
var displayMessage = document.querySelector('#display-message');

//VIEWS selectors
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

//FIGHTERS PIX selector
var fighters = document.querySelectorAll('.fighter');

//EVENT LISTENERS
classicChoiceButton.addEventListener('click', displayClassicGame);
difficultChoiceButton.addEventListener('click', displayDifficultGame);
changeGameButton.addEventListener('click', changeGame);
classicGameView.addEventListener('click', function(event){
  battle(event)
});

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

var randomClassicIndex = Math.floor(Math.random() * classicVersion.fighters.length);
// var randomClassicFighter = classicVersion.fighters[randomClassicIndex];
var randomDifficultIndex = Math.floor(Math.random() * difficultVersion.fighters.length);
var randomDifficultFighter = difficultVersion.fighters[randomDifficultIndex];

function findClassicOpponent(computerPlayer) {
 computerPlayer.chosenFighter = classicVersion.fighters[randomClassicIndex]
}

// JS *

fighters.forEach((fighter) => {
  fighter.addEventListener('click', function(event) {
    id = this.id;
    assignFighter(event);
  })
});

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
    gameType: classicVersion || difficultVersion,
  }
  return game
}

function displayClassicGame() {
  game = createGame()
  gameType = classicVersion;
  homeView.classList.add('hidden');
  classicGameView.classList.remove('hidden');
  changeGameButton.classList.remove('hidden');
  displayMessage.innerText = "Choose your fighter!";
  classicGameisChosen = true;
  
};

function displayDifficultGame() {
  game = createGame()
  gameType = difficultVersion;
  difficultGameView.classList.remove('hidden');
  homeView.classList.add('hidden');
  changeGameButton.classList.remove('hidden');
  displayMessage.innerText = "Choose your fighter!";
  difficultGameisChosen = true;
};

function assignFighter(event) {
  humanPlayer.chosenFighter = event.target.id;
  if (classicGameisChosen === true) {
    findClassicOpponent(computerPlayer)
    displayChosenFighter(computerPlayer.chosenFighter)
  } else {
    computerPlayer.chosenFighter = randomDifficultFighter;
    displayChosenFighter(randomDifficultFighter)
  }
  displayChosenFighter(event);   
};

function displayChosenFighter(id) {
  var chosenFighter = document.getElementById(id);
  chosenFighters.classList.remove('hidden');
  classicGameView.classList.add('hidden');
  difficultGameView.classList.add('hidden');
  chosenFighters.innerHTML = `<img class="fighter" id="${humanPlayer.chosenFighter}" src="assets/${humanPlayer.chosenFighter}.png">
  <img class="fighter" id="${computerPlayer.chosenFighter}" src="assets/${computerPlayer.chosenFighter}.png">`
  // chosenFighters.appendChild(randomClassicIndex);
  whoWon()
};

function checkDraw() {
  if (humanPlayer.chosenFighter === computerPlayer.chosenFighter) {
    game.isDraw = true
  } else {
    game.isDraw = false
  }
};

function resetGame() {
  chosenFighters.classList.add('hidden');
  chosenFighters.innerHTML = ""
  classicGameView.innerHTML = `<img class="fighter" id="rocks" src="assets/rocks.png">
  <img class="fighter" id="paper" src="assets/paper.png">
  <img class="fighter" id="scissors" src="assets/scissors.png">`;
  classicGameView.classList.remove('hidden');
  displayMessage.innerText = 'Choose your fighter!'

}

function battle(event){
  findClassicOpponent(computerPlayer),
  assignFighter(event),
  whoWon(),
  setTimeout(resetGame, 3000)
}

function whoWon() {
  checkDraw()
  if (game.isDraw === true) {
    displayMessage.innerText = 'It\'s a draw!'    
  } else if (gameRules[humanPlayer.chosenFighter].includes(computerPlayer.chosenFighter)) {
    humanPlayer.playerWins += 1
    displayMessage.innerText = 'Human won this round!'
  } else {
    computerPlayer.playerWins += 1
    displayMessage.innerText = 'Computer won this round!'
  }
  displayScores()
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
