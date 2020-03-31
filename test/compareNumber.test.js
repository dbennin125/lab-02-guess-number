// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compareNumbers from '../compareNumber.js';
const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(0);
    const result1 = compareNumbers(1);
    const result2 = compareNumbers(-1);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(true, result);
    assert.equal(true, result1);
    assert.equal(true, result2);
});
