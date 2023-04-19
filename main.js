var displayMessage = document.querySelector('#display-message');

var gameView = document.querySelector('.game-view');
var computerChoiceDisplay = document.querySelector('.computer-choice');

var changeGameButton = document.querySelector('.change-game-button');
var classicChoiceButton = document.querySelector('.classic-choice');
var difficultChoiceButton = document.querySelector('.difficult-choice');
var rockButton = document.querySelector('.rock-button');
var paperButton = document.querySelector('.paper-button');
var scissorsButton = document.querySelector('.scissors-button');
var alienButton = document.querySelector('.alien-button');
var ufoButton = document.querySelector('.ufo-button');
var rocksImage = document.querySelector('.rocks-image');

classicChoiceButton.addEventListener('click', chooseClassicGame);
difficultChoiceButton.addEventListener('click', chooseDifficultGame);
rockButton.addEventListener('click', chooseRock);
paperButton.addEventListener('click', choosePaper);
scissorsButton.addEventListener('click', chooseScissors);
alienButton.addEventListener('click', chooseAlien);
ufoButton.addEventListener('click', chooseUfo);

var classicGameisChosen = false;
var difficultGameisChosen = false;

var classicGameOptions = ['<img src="assets/happy-rocks.png">', '<img src="assets/happy-paper.png">', '<img src="assets/happy-scissors.png">'];
var difficultGameOptions = ['<img src="assets/happy-rocks.png">', '<img src="assets/happy-paper.png">', '<img src="assets/happy-scissors.png">', '<img src="assets/flat-alien.png">', '<img src="assets/ufo.png">'];

var computerChoice = [];
var humanChoice = [];

//have to push the choice made by each 
//OR assign the value to that? 
//but how will you get this to display in the page?

function createPlayer(name, token, wins) {
  var player = {
    name: name,
    token: token,
    wins: wins,
  }
  return player
}

function createGame(player1, player2) {
  var game = {
    player1: player1,
    player2: player2,
    //a way to keep track of data for the game board
    //a way to keep track of the selected game type
  }
  return game
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function classicComputerChoice() {
  var classicComputerChoice = classicGameOptions[getRandomIndex(classicGameOptions)]
  computerChoiceDisplay.innerHTML = classicComputerChoice
  computerChoice.push(classicComputerChoice)
}

function difficultComputerChoice() {
  var difficultComputerChoice = difficultGameOptions[getRandomIndex(difficultGameOptions)]
  computerChoiceDisplay.innerHTML = difficultComputerChoice
  computerChoice.push(difficultComputerChoice)
}

function chooseClassicGame() {
  rockButton.classList.remove('hidden');
  paperButton.classList.remove('hidden');
  scissorsButton.classList.remove('hidden');
  classicChoiceButton.classList.add('hidden');
  difficultChoiceButton.classList.add('hidden');
  displayMessage.innerText = "Choose your fighter!";
  classicGameisChosen = true;
}

function chooseDifficultGame() {
  rockButton.classList.remove('hidden');
  paperButton.classList.remove('hidden');
  scissorsButton.classList.remove('hidden');
  alienButton.classList.remove('hidden');
  ufoButton.classList.remove('hidden');
  classicChoiceButton.classList.add('hidden');
  difficultChoiceButton.classList.add('hidden');
  displayMessage.innerText = "Choose your fighter!";
  difficultGameisChosen = true
}

function chooseRock() {
  paperButton.classList.add('hidden');
  scissorsButton.classList.add('hidden');
  alienButton.classList.add('hidden');
  ufoButton.classList.add('hidden');
    if (difficultGameisChosen === true) {
      difficultComputerChoice()
    } else if (classicGameisChosen === true) {
      classicComputerChoice()
    }
}

function choosePaper() {
  rockButton.classList.add('hidden');
  scissorsButton.classList.add('hidden');
  alienButton.classList.add('hidden');
  ufoButton.classList.add('hidden');
    if (difficultGameisChosen === true) {
      difficultComputerChoice()
    } else if (classicGameisChosen === true) {
      classicComputerChoice()
    }
}

function chooseScissors() {
  rockButton.classList.add('hidden');
  paperButton.classList.add('hidden');
  alienButton.classList.add('hidden');
  ufoButton.classList.add('hidden');
    if (difficultGameisChosen === true) {
      difficultComputerChoice()
    } else if (classicGameisChosen === true) {
      classicComputerChoice()
    }
}

function chooseAlien() {
  rockButton.classList.add('hidden');
  paperButton.classList.add('hidden');
  scissorsButton.classList.add('hidden');
  ufoButton.classList.add('hidden');
  difficultComputerChoice()
}

function chooseUfo() {
  rockButton.classList.add('hidden');
  paperButton.classList.add('hidden');
  scissorsButton.classList.add('hidden');
  alienButton.classList.add('hidden');
  difficultComputerChoice()
}