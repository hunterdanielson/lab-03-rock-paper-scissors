import { didWeWin } from './didWeWin.js';
import { getRandomThrow } from './get-random-throw.js';

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

let wins = 0;
let draws = 0;
let total = 0;
let resetButtonCount = 0;

playButton.addEventListener('click', () => {

    // get the pressed radio button
    const selectedChoice = document.querySelector('input[type=radio]:checked');

    // figure out what player picked
    const userChoice = selectedChoice.value;
    console.log('userChoice', userChoice);

    // computer choice
    let computerChoice = getRandomThrow();
    console.log('computerChoice', computerChoice);
    
    
    

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
        computerChoiceDiv.textContent = computerChoice;
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
});