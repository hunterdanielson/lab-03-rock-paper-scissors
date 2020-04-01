// IMPORT MODULES under test here:
import { didWeWin } from '../didWeWin.js';

const test = QUnit.test;

test('tests', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const rock = 'rock';
    const paper = 'paper';
    const scissors = 'scissors';

    //Act 
    // Call the function you're testing and set the result to a const
    const test1 = didWeWin(rock, rock);
    const test2 = didWeWin(rock, paper);
    const test3 = didWeWin(rock, scissors);
    const test4 = didWeWin(paper, rock);
    const test5 = didWeWin(paper, paper);
    const test6 = didWeWin(paper, scissors);
    const test7 = didWeWin(scissors, rock);
    const test8 = didWeWin(scissors, paper);
    const test9 = didWeWin(scissors, scissors);


    //Assert
    // Make assertions about what is expected valid result
    assert.equal(test1, 0);
    assert.equal(test2, -1);
    assert.equal(test3, 1);
    assert.equal(test4, 1);
    assert.equal(test5, 0);
    assert.equal(test6, -1);
    assert.equal(test7, -1);
    assert.equal(test8, 1);
    assert.equal(test9, 0);


});
