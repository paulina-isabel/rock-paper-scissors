// var displayMessage = document.querySelector('#display-message');

// var gameView = document.querySelector('.game-view');
// var computerChoiceDisplay = document.querySelector('.computer-choice');

// var changeGameButton = document.querySelector('.change-game-button');
// var classicChoiceButton = document.querySelector('.classic-choice');
// var difficultChoiceButton = document.querySelector('.difficult-choice');
// var rockButton = document.querySelector('.rock-button');
// var paperButton = document.querySelector('.paper-button');
// var scissorsButton = document.querySelector('.scissors-button');
// var alienButton = document.querySelector('.alien-button');
// var ufoButton = document.querySelector('.ufo-button');
// var rocksImage = document.querySelector('.rocks-image');

// var computerRock = document.querySelector('.computer-rock');

// classicChoiceButton.addEventListener('click', chooseClassicGame);
// difficultChoiceButton.addEventListener('click', chooseDifficultGame);
// rockButton.addEventListener('click', chooseRock);
// paperButton.addEventListener('click', choosePaper);
// scissorsButton.addEventListener('click', chooseScissors);
// alienButton.addEventListener('click', chooseAlien);
// ufoButton.addEventListener('click', chooseUfo);

// var classicGameisChosen = false;
// var difficultGameisChosen = false;

// var classicGameOptions = ['<img class="computer-choice" src="assets/happy-rocks.png">', '<img class="computer-choice" src="assets/happy-paper.png">', '<img class="computer-choice" src="assets/happy-scissors.png">'];
// var difficultGameOptions = ['<img src="assets/happy-rocks.png">', '<img src="assets/happy-paper.png">', '<img src="assets/happy-scissors.png">', '<img src="assets/flat-alien.png">', '<img src="assets/ufo.png">'];

// var computerChoice = [];
// var humanChoice = [];

// *+*+*++*+**+*+*+*+*+*+*+*+*+*+**+*+*+*+*+*+*+**+*+*+*+**+*+*+*+*+*+**+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*÷
function createPlayer(name, wins) {
  var player = {
    playerName: name,
    playerWins: wins,
  }
  return player
}

var humanPlayer = createPlayer('Human', 0);
var computerPlayer= createPlayer('Computer', 0);
// console.log(humanPlayer)
// console.log(computerPlayer)

function createGame(player1, player2, gameType) {
  var game = {
    player1: player1,
    player2: player2,
    gameType: gameType
    //a way to keep track of data for the game board
    //a way to keep track of the selected game type
  }
  return game
}

var classicVersion = {
  fighters: ['rock', 'paper', 'scissors']
};
var difficultVersion = {
  fighters: ['rock', 'paper', 'scissors', 'alien', 'ufo']
};

var classicGame = createGame(humanPlayer, computerPlayer, classicVersion);
var difficultGame = createGame(humanPlayer, computerPlayer, difficultVersion);
// console.log(classicGame)
// console.log(difficultGame)

//this is so the human & computer obj can be assigned a new key with a random fighter
var randomIndex = Math.floor(Math.random() * classicVersion.fighters.length);
var randomFighter = classicVersion.fighters[randomIndex]

function takeTurn(activePlayer, fighter) {
  if (activePlayer === humanPlayer) {
    activePlayer.chosenFighter = fighter
  } else if (activePlayer === computerPlayer) {
      for (var i = 0; i < classicVersion.length; i++) {
      }
    activePlayer.chosenFighter = randomFighter
    }
  return activePlayer
}

var firstTurn = takeTurn(computerPlayer)
// console.log(firstTurn)
var secondTurn = takeTurn(humanPlayer, 'scissors')
// console.log(secondTurn)

// **********RULES*************

//////////classique/////////
var classicFighters = {
  rock: {beats: 'scissors'},
  paper: {beats: 'rock'},
  scissors: {beats: 'paper'}
};

// console.log(classicFighters.rock)
// console.log(classicFighters.rock.beats)

function whoWonClassic(player1, player2) {
  if (classicFighters[player1.chosenFighter].beats === player2.chosenFighter) {
    player1.playerWins += 1
    return `${player1.playerName} won this round!`
  } else if (classicFighters[player2.chosenFighter].beats === player1.chosenFighter) {
    player2.playerWins += 1
    return `${player2.playerName} won this round!`
  } else {
    return `It's a draw!`
  }
}

winner = whoWonClassic(humanPlayer, computerPlayer)
// console.log(classicFighters[humanPlayer.chosenFighter].beats)
// console.log(computerPlayer.chosenFighter)
// console.log(humanPlayer.chosenFighter)
// console.log(computerPlayer.chosenFighter)
// console.log(humanPlayer.playerWins)
// console.log(computerPlayer.playerWins)
// console.log(winner)

//////////difficult/////////

// *+*+*++*+**+*+*+*+*+*+*+*+*+*+**+*+*+*+*+*+*+**+*+*+*+**+*+*+*+*+*+**+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*÷

// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }

// function classicComputerChoice() {
//   var classicComputerChoice = classicGameOptions[getRandomIndex(classicGameOptions)]
//   computerChoiceDisplay.innerHTML = classicComputerChoice
//   computerChoice.push(classicComputerChoice)
// }

// function difficultComputerChoice() {
//   var difficultComputerChoice = difficultGameOptions[getRandomIndex(difficultGameOptions)]
//   computerChoiceDisplay.innerHTML = difficultComputerChoice
//   computerChoice.push(difficultComputerChoice)
// }

// function chooseClassicGame() {
//   rockButton.classList.remove('hidden');
//   paperButton.classList.remove('hidden');
//   scissorsButton.classList.remove('hidden');
//   classicChoiceButton.classList.add('hidden');
//   difficultChoiceButton.classList.add('hidden');
//   displayMessage.innerText = "Choose your fighter!";
//   classicGameisChosen = true;
// }

// function chooseDifficultGame() {
//   rockButton.classList.remove('hidden');
//   paperButton.classList.remove('hidden');
//   scissorsButton.classList.remove('hidden');
//   alienButton.classList.remove('hidden');
//   ufoButton.classList.remove('hidden');
//   classicChoiceButton.classList.add('hidden');
//   difficultChoiceButton.classList.add('hidden');
//   displayMessage.innerText = "Choose your fighter!";
//   difficultGameisChosen = true
// }

// function chooseRock() {
//   paperButton.classList.add('hidden');
//   scissorsButton.classList.add('hidden');
//   alienButton.classList.add('hidden');
//   ufoButton.classList.add('hidden');
//     if (difficultGameisChosen === true) {
//       difficultComputerChoice()
//     } else if (classicGameisChosen === true) {
//       classicComputerChoice()
//     }
// }

// function choosePaper() {
//   rockButton.classList.add('hidden');
//   scissorsButton.classList.add('hidden');
//   alienButton.classList.add('hidden');
//   ufoButton.classList.add('hidden');
//     if (difficultGameisChosen === true) {
//       difficultComputerChoice()
//     } else if (classicGameisChosen === true) {
//       classicComputerChoice()
//     }
// }

// function chooseScissors() {
//   rockButton.classList.add('hidden');
//   paperButton.classList.add('hidden');
//   alienButton.classList.add('hidden');
//   ufoButton.classList.add('hidden');
//     if (difficultGameisChosen === true) {
//       difficultComputerChoice()
//     } else if (classicGameisChosen === true) {
//       classicComputerChoice()
//     }
// }

// function chooseAlien() {
//   rockButton.classList.add('hidden');
//   paperButton.classList.add('hidden');
//   scissorsButton.classList.add('hidden');
//   ufoButton.classList.add('hidden');
//   difficultComputerChoice()
// }

// function chooseUfo() {
//   rockButton.classList.add('hidden');
//   paperButton.classList.add('hidden');
//   scissorsButton.classList.add('hidden');
//   alienButton.classList.add('hidden');
//   difficultComputerChoice()
// }