//CHOOSE YOUR XYZ MSG selector
var displayMessage = document.querySelector('#display-message');

//VIEWS selectors
var homeView = document.querySelector('.home-view');
var classicGameView = document.querySelector('.classic-game-view');
var difficultGameView = document.querySelector('.difficult-game-view');

var chosenFighters = document.querySelector('.chosen-fighters');

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

// GLOBE VARS
var classicGameisChosen = false;
var difficultGameisChosen = false;
var humanPlayer = createPlayer('Human', 0);
var computerPlayer = createPlayer('Computer', 0);
var classicGame = createGame('Classic');
var difficultGame = createGame('Difficult');
var classicVersion = {
  fighters: ['happy-rock', 'happy-paper', 'happy-scissors']
};
var difficultVersion = {
  fighters: ['happy-rock', 'happy-paper', 'happy-scissors', 'flat-alien', 'ufo']
};
var randomClassicIndex = Math.floor(Math.random() * classicVersion.fighters.length);
var randomClassicFighter = classicVersion.fighters[randomClassicIndex];
var randomDifficultIndex = Math.floor(Math.random() * difficultVersion.fighters.length);
var randomDifficultFighter = difficultVersion.fighters[randomDifficultIndex];


// JS *

fighters.forEach((fighter) => {
  fighter.addEventListener('click', function() {
    id = this.id;
    assignFighter();
  })
});

function createPlayer(name, wins) {
  var player = {
    playerName: name,
    playerWins: wins,
  }
  return player
}

function createGame(gameType) {
  var game = {
    player1: humanPlayer,
    player2: computerPlayer,
    gameType: gameType,
  }
  return game
}

function displayClassicGame() {
  homeView.classList.add('hidden');
  classicGameView.classList.remove('hidden');
  changeGameButton.classList.remove('hidden');
  displayMessage.innerText = "Choose your fighter!";
  classicGameisChosen = true;

};

function displayDifficultGame() {
  difficultGameView.classList.remove('hidden');
  homeView.classList.add('hidden');
  changeGameButton.classList.remove('hidden');
  displayMessage.innerText = "Choose your fighter!";
  difficultGameisChosen = true;
  //the next line creates a game
  // createGame('difficult')
}

function assignFighter() {
  humanPlayer.chosenFighter = id;
  if (classicGameisChosen === true) {
    computerPlayer.chosenFighter = randomClassicFighter;
    displayChosenFighter(randomClassicFighter)
  } else {
    computerPlayer.chosenFighter = randomDifficultFighter;
    displayChosenFighter(randomDifficultFighter)
  }
  displayChosenFighter(id);   
};

function displayChosenFighter(id) {
  var chosenFighter = document.getElementById(id);
  chosenFighters.classList.remove('hidden');
  classicGameView.classList.add('hidden');
  difficultGameView.classList.add('hidden');
  chosenFighters.appendChild(chosenFighter);
  // chosenFighters.appendChild(randomClassicIndex);
  // v new code smh v
  checkDraw()
  if (classicGame.isDraw === true) {
    displayMessage.innerText = 'It\'s a draw!'    
   }
};

function checkDraw() {
  if (humanPlayer.chosenFighter === computerPlayer.chosenFighter) {
    classicGame.isDraw = true
  }
};

function changeGame() {
  homeView.classList.remove('hidden');
  classicGameView.classList.add('hidden');
  difficultGameView.classList.add('hidden');
}
