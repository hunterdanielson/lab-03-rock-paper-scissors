

export function getRandomThrow() {
    // generate random choice for computer 
    let number = Math.floor(Math.random() * 3); 
    // convert that number into a word
    
    let choiceStack = ['rock', 'paper', 'scissors'];
    let computerChoice = choiceStack[number];
    return computerChoice;

}