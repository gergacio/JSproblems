const assert = require('assert');
const SyntaxCondLoops = require("../jsFundamentalsProblems/syntaxCondLoops.js");


describe('syntaxCondLoop', function () {
    //ask mocha do for us
    //run this before all test to run
    let syntaxCondLoop; //can use across test files --- Arranging
  

    beforeEach(function () {
        //no let cause cant reference
        //re - set before any test
        syntaxCondLoop = new SyntaxCondLoops();
       
    })

    it('should have a "baby" back ', function () {
        //Arrange (make object)

        //Act
        const actual = syntaxCondLoop.ages(1);
        //Assert
        assert.strictEqual(actual, "baby");
    });
});
