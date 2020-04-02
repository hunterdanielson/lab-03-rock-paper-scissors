
export function getRandomThrowLS() {
    // generate random choice for computer 
    let number = Math.floor(Math.random() * 5); 
    
    // convert that number into a word
    let choiceStack = ['rock', 'scissors', 'lizard', 'paper', 'spock'];
    let computerChoice = choiceStack[number];
    return computerChoice;
}