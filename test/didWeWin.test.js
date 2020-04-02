// IMPORT MODULES under test here:
import { didWeWin } from '../didWeWin.js';

const test = QUnit.test;

test('tests', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const rock = 'rock';
    const paper = 'paper';
    const scissors = 'scissors';
    const lizard = 'lizard';
    const spock = 'spock';

    //Act 
    // Call the function you're testing and set the result to a const
    const test1 = didWeWin(rock, rock);
    const test2 = didWeWin(rock, paper);
    const test3 = didWeWin(rock, scissors);
    const test10 = didWeWin(rock, lizard);
    const test11 = didWeWin(rock, spock);
    const test4 = didWeWin(paper, rock);
    const test5 = didWeWin(paper, paper);
    const test6 = didWeWin(paper, scissors);
    const test12 = didWeWin(paper, lizard);
    const test13 = didWeWin(paper, spock);
    const test7 = didWeWin(scissors, rock);
    const test8 = didWeWin(scissors, paper);
    const test9 = didWeWin(scissors, scissors);
    const test14 = didWeWin(scissors, lizard);
    const test15 = didWeWin(scissors, spock);
    const test16 = didWeWin(lizard, rock);
    const test17 = didWeWin(lizard, paper);
    const test18 = didWeWin(lizard, scissors);
    const test19 = didWeWin(lizard, spock);
    const test20 = didWeWin(lizard, lizard);
    const test21 = didWeWin(spock, rock);
    const test22 = didWeWin(spock, paper);
    const test23 = didWeWin(spock, scissors);
    const test24 = didWeWin(spock, lizard);
    const test25 = didWeWin(spock, spock);

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


    assert.equal(test10, 1);
    assert.equal(test11, -1);
    assert.equal(test12, -1);
    assert.equal(test13, 1);
    assert.equal(test14, 1);    
    assert.equal(test15, -1);

    assert.equal(test16, -1);
    assert.equal(test17, 1);
    assert.equal(test18, -1);
    assert.equal(test19, 1);
    assert.equal(test20, 0);
    assert.equal(test21, 1);
    assert.equal(test22, -1);
    assert.equal(test23, 1);
    assert.equal(test24, -1);
    assert.equal(test25, 0);
});
