// this array is using a concept from this picture describing who would win
// https://www.google.com/url?sa=i&url=https%3A%2F%2Fibmathsresources.com%2F2015%2F08%2F29%2Fhow-to-win-at-rock-paper-scissors%2F&psig=AOvVaw2Zy8qPusq2A78Qxd1KzRWn&ust=1585870648495000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjri9eyyOgCFQAAAAAdAAAAABAH
export function didWeWin(userChoice, computerChoice) {

    let choiceStack = ['rock', 'scissors', 'lizard', 'paper', 'spock'];
    let userChoiceIndex = choiceStack.indexOf(userChoice);
    let computerChoiceIndex = choiceStack.indexOf(computerChoice);
    const results = [
        //going from left to right, and top to bottom, categories are:
        //rock, scissors, lizard, paper, spock 
        [0, -1, -1, 1, 1],
        [1, 0, -1, -1, 1],
        [1, 1, 0, -1, -1],
        [-1, 1, 1, 0, -1],
        [-1, -1, 1, 1, 0]
        
    ];

    let userResult = results[computerChoiceIndex][userChoiceIndex];
    return userResult;
   
}
