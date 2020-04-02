
import { getRandomThrow } from './get-random-throw.js';

// my own stretch goal - adding Lizard Spock to the mix
import { getRandomThrowLS } from './get-random-throw-LS.js';
import { didWeWin } from './didWeWin.js';

// get things from the DOM
const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const winDiv = document.getElementById('wins');
const loseDiv = document.getElementById('loses');
const drawDiv = document.getElementById('draws');
const totalDiv = document.getElementById('total');
const computerChoiceDiv = document.getElementById('computer-choice');
const computerChoiceHeading = document.getElementById('computer-choice-heading');
const timesReset = document.getElementById('times-reset');

// my stretch goal
const lsButton = document.getElementById('l-s-button');
const lizardContainer = document.getElementById('lizard-container');
const spockContainer = document.getElementById('spock-container');
let gameMode = '';
const welcome = document.getElementById('welcome');
const rockRule = document.getElementById('rock-rule');
const paperRule = document.getElementById('paper-rule');
const scissorRule = document.getElementById('scissor-rule');
const lizardRule = document.getElementById('lizard-rule');
const spockRule = document.getElementById('spock-rule');

const img = document.createElement('img');

let wins = 0;
let draws = 0;
let total = 0;
let resetButtonCount = 0;

playButton.addEventListener('click', () => {

    // get the pressed radio button
    const selectedChoice = document.querySelector('input[type=radio]:checked');

    // figure out what player picked
    const userChoice = selectedChoice.value;

    // computer choice
   
    let computerChoice = getRandomThrow();
    if (gameMode === 'ls') {
        computerChoice = getRandomThrowLS();
    }

    if (computerChoice === 'rock') {
        img.src = './icons/rockIcon.png';
    } else if (computerChoice === 'paper') {
        img.src = './icons/paperIcon.png';
    } else if (computerChoice === 'scissors') {
        img.src = './icons/scissorsIcon.png';
    } else if (computerChoice === 'lizard') {
        img.src = './icons/lizardIcon.png';
    } else if (computerChoice === 'spock') {
        img.src = './icons/spockIcon.png';
    }
    
    
    

    // figure out if we won
    const results = didWeWin(userChoice, computerChoice);

    if (results === 1) {
        wins++;
    } else if (results === 0) {
        draws++;
    }

    total++;

    const loses = total - wins - draws;

    winDiv.textContent = wins;
    loseDiv.textContent = loses;
    drawDiv.textContent = draws;
    totalDiv.textContent = total;
    // only shows up if game has been played
    if (total > 0) {
        computerChoiceHeading.style.visibility = 'visible';
        computerChoiceDiv.appendChild(img);
    }
    
    
});

resetButton.addEventListener('click', () => {
    // reset counters
    wins = 0;
    draws = 0;
    total = 0;
    
    // clear the text from the page
    winDiv.textContent = '';
    loseDiv.textContent = '';
    drawDiv.textContent = '';
    totalDiv.textContent = '';
    computerChoiceHeading.style.visibility = 'hidden';
    computerChoiceDiv.textContent = '';

    // track how many times reset button pushed
    resetButtonCount++;
    timesReset.textContent = resetButtonCount;

    // reset lizard-spock
    lizardContainer.style.display = 'none';
    spockContainer.style.display = 'none';
    gameMode = '';
    welcome.textContent = 'Welcome to Rock-Paper-Scissors';
    rockRule.textContent = 'Rock beats scissors';
    paperRule.textContent = 'Paper beats rock';
    scissorRule.textContent = 'Scissors beats paper';
    lizardRule.textContent = '';
    spockRule.textContent = '';
});

lsButton.addEventListener('click', () => {

    lizardContainer.style.display = 'inline';
    spockContainer.style.display = 'inline';
    gameMode = 'ls';
    welcome.textContent = 'Welcome to Rock-Paper-Scissors-Lizard-Spock';
    rockRule.textContent = 'Rock beats scissors and lizard';
    paperRule.textContent = 'Paper beats rock and spock';
    scissorRule.textContent = 'Scissors beats paper and lizard';
    lizardRule.textContent = 'Lizard beats paper and spock';
    spockRule.textContent = 'Spock beats rock and scissors';

});