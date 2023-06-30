const assert = require('assert');
const SyntaxCondLoops = require("../jsFundamentals/syntaxCondLoops.js");


describe('syntaxCondLoop', function () {
    //ask mocha do for us
    //run this before all test to run
    let syntaxCondLoop; //can use across test files --- Arranging
  

    beforeEach(function () {
        //no let cause cant reference
        //re - set before any test
        syntaxCondLoop = new SyntaxCondLoops();
       
    })

    it('should have a "elder" back ', function () {
        //Arrange (make object)

        //Act
        const actual = syntaxCondLoop.ages(99);
        //Assert
        assert.strictEqual(actual, "elder");
    });

    it('should have a "out of bounds" back ', function () {
        //Arrange (make object)

        //Act
        const actual = syntaxCondLoop.ages();
        //Assert
        assert.strictEqual(actual, "out of bounds");
    });

    it('should have a "3.14" back ', function () {
        //Arrange (make object)

        //Act
        const actual = syntaxCondLoop.rounding(3.1415926535897932384626433832795,2);
        //Assert
        assert.strictEqual(actual, 3.14);
    });

    it('number is divisible by 10" back ', function () {
        //Arrange (make object)

        //Act
        const actual = syntaxCondLoop.division(30);
        //Assert
        assert.strictEqual(actual, "The number is divisible by 10");
    });

    it('Total price: 266.73" back ', function () {
        //Arrange (make object)

        //Act
        const actual = syntaxCondLoop.vacation(30, "Students", "Sunday");
        //Assert
        assert.strictEqual(actual, "Total price: 266.73");
    });

    it('pass 1984 get "yes"', function () {
        //Arrange (make object)

        //Act
        const actual = syntaxCondLoop.leapyear(1984);
        //Assert
        assert.strictEqual(actual, "yes");
    });

    it('print 5 6 7 8 9 10 Sum: 45', function () {
        //Arrange (make object)

        //Act
        const actual = syntaxCondLoop.printAndSum(5,10);
        //Assert
        assert.strictEqual(actual,"5 6 7 8 9 10 Sum: 45");
    });

    it('3 X 1 = 33 X 2 = 63 X 3 = 93 X 4 = 123 X 5 = 153 X 6 = 183 X 7 = 213 X 8 = 243 X 9 = 273 X 10 = 30', function () {
        //Arrange (make object)

        //Act
        const actual = syntaxCondLoop.multiplicationTable(3);
        //Assert
        assert.strictEqual(actual,"undefined3 X 1 = 3 3 X 2 = 6 3 X 3 = 9 3 X 4 = 12 3 X 5 = 15 3 X 6 = 18 3 X 7 = 21 3 X 8 = 24 3 X 9 = 27 3 X 10 = 30");
    });

});
