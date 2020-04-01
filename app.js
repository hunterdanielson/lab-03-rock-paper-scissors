import { didWeWin } from './didWeWin.js';
import { getRandomThrow } from './get-random-throw.js';

// get things from the DOM
const playButton = document.getElementById('play-button');
//const resetButton = document.getElementById('reset-button');
const winDiv = document.getElementById('wins');
const loseDiv = document.getElementById('loses');
const drawDiv = document.getElementById('draws');
const totalDiv = document.getElementById('total');

let wins = 0;
let draws = 0;
let total = 0;

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

});
