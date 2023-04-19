var displayMessage = document.querySelector('#displayMessage');
var changeGameButton = document.querySelector('.change-game-button');
var gameArea = document.querySelector('.game-area');
var classicChoiceButton = document.querySelector('.classic-choice');
var difficultChoiceButton = document.querySelector('.difficult-choice');
var rockButton = document.querySelector('.rock-button');
var paperButton = document.querySelector('.paper-button');
var scissorsButton = document.querySelector('.scissors-button');
var alienButton = document.querySelector('.alien-button');
var ufoButton = document.querySelector('.ufo-button');


//add an event listener to difficult and classic choices
//calling a function that will show or hide certain attributes

classicChoiceButton.addEventListener('click', chooseClassicGame)
difficultChoiceButton.addEventListener('click', chooseDifficultGame)

function chooseClassicGame() {
  rockButton.classList.remove('hidden')
  paperButton.classList.remove('hidden')
  scissorsButton.classList.remove('hidden')
  classicChoiceButton.classList.add('hidden')
  difficultChoiceButton.classList.add('hidden')
}

function chooseDifficultGame() {
  rockButton.classList.remove('hidden')
  paperButton.classList.remove('hidden')
  scissorsButton.classList.remove('hidden')
  alienButton.classList.remove('hidden')
  ufoButton.classList.remove('hidden')
  classicChoiceButton.classList.add('hidden')
  difficultChoiceButton.classList.add('hidden')
}