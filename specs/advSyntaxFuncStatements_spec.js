const assert = require("assert");
const AdvSyntaxFuncStatements = require("../jsAdvanced/advSyntaxFuncStatements.js");

describe('AdvJS Syntax Func Statements', function () {
    //ask mocha do for us
    //run this before all test to run
    let advSyntaxFuncStatements; //can use across test files --- Arranging
  

    beforeEach(function () {
        //no let cause cant reference
        //re - set before any test
        advSyntaxFuncStatements = new AdvSyntaxFuncStatements();
       
    })

    it('should have a "I need $4.50 to buy 2.50 kilograms orange." back ', function () {
        //Arrange (make object)

        //Act
        const actual = advSyntaxFuncStatements.fruit('orange', 2500, 1.80);
        //Assert
        assert.strictEqual(actual, "I need $4.50 to buy 2.50 kilograms orange.");
    });

    it('should have a "5" back ', function () {
        //Arrange (make object)

        //Act
        const actual = advSyntaxFuncStatements.gcd(15, 5);
        //Assert
        assert.strictEqual(actual, 5);
    });

    it('should have a "true\n14" back ', function () {
        //Arrange (make object)

        //Act
        const actual = advSyntaxFuncStatements.sameNumbers(2222222);
        //Assert
        assert.strictEqual(actual, "true\n14");
    });

    it('should have a "00:32:48" back ', function () {
        //Arrange (make object)

        //Act
        const actual = advSyntaxFuncStatements.timeToWalk(4000, 0.60, 5);
        //Assert
        assert.strictEqual(actual, "00:32:48");
    });

    it('should have a "Driving 40 km/h in a 50 zone" back ', function () {
        //Arrange (make object)

        //Act
        const actual = advSyntaxFuncStatements.roadRadar(40, 'city');
        //Assert
        assert.strictEqual(actual, "Driving 40 km/h in a 50 zone");
    });

    it('should have a "16 8 4 2 1" back ', function () {
        //Arrange (make object)

        //Act
        const actual = advSyntaxFuncStatements.cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
        //Assert
        assert.strictEqual(actual, "16 8 4 2 1");
    });

    it('should have a "{3, 0} to {0, 0} is valid {0, 4} to {0, 0} is valid {3, 0} to {0, 4} is valid" back ', function () {
        //Arrange (make object)

        //Act
        const actual = advSyntaxFuncStatements.validityChecker(3, 0, 0, 4);
        //Assert
        assert.strictEqual(actual, "{3, 0} to {0, 0} is valid {0, 4} to {0, 0} is valid {3, 0} to {0, 4} is valid");
    });

    it('should have a "HI, HOW, ARE, YOU" back ', function () {
        //Arrange (make object)

        //Act
        const actual = advSyntaxFuncStatements.wordsUppercase('Hi, how are you?');
        //Assert
        assert.strictEqual(actual, "HI, HOW, ARE, YOU");
    });

});