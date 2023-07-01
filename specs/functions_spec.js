const assert = require('assert');
const Functions = require('../jsFundamentals/functions.js');

describe("Functions", function(){
    let functions;

    this.beforeEach(function(){
        functions = new Functions();
    });

    it('should have a "-3" back ', function () {
        //Arrange (make object)

        //Act
        const actual = functions.smallestOfThreeNum(-1,2,-3);
        //Assert
        assert.strictEqual(actual, -3);
    });

    it('should have a "20" back ', function () {
        //Arrange (make object)

        //Act
        const actual = functions.addAndSubtract(23, 6, 9);
        //Assert
        assert.strictEqual(actual, 20);
    });

    it('should have a "b c" back ', function () {
        //Arrange (make object)

        //Act
        const actual = functions.charsInRange('a', 'd');
        //Assert
        assert.strictEqual(actual, "b c");
    });

    it('should have a "Odd sum = 9, Even sum = 4" back ', function () {
        //Arrange (make object)

        //Act
        const actual = functions.oddAndEven(1000435);
        //Assert
        assert.strictEqual(actual, "Odd sum = 9, Even sum = 4");
    });

    it('should have a "false true false true" back ', function () {
        //Arrange (make object)

        //Act
        const actual = functions.palindromeIntegers([123,323,421,121]);
        //Assert
        assert.strictEqual(actual, "false true false true");
    });

    it('should have a "Password must consist only of letters and digits.Password must have at least 2 digits." back ', function () {
        //Arrange (make object)

        //Act
        const actual = functions.passwordValidator('Pa$s$s');
        //Assert
        assert.strictEqual(actual, "Password must consist only of letters and digits.Password must have at least 2 digits.");
    });

    it('should have a "3 3 3, 3 3 3, 3 3 3" back ', function () {
        //Arrange (make object)

        //Act
        const actual = functions.printMatrix(3);
        //Assert
        assert.strictEqual(actual, "3 3 3, 3 3 3, 3 3 3");
    });

    it('should have a "We have a perfect number!" back ', function () {
        //Arrange (make object)

        //Act
        const actual = functions.perfectNumber(6);
        //Assert
        assert.strictEqual(actual, "We have a perfect number!"); //1 + 2 + 3
    });

    it('should have a "30% [%%%.......] Still loading..." back ', function () {
        //Arrange (make object)

        //Act
        const actual = functions.loadingBar(30);
        //Assert
        assert.strictEqual(actual, "30% [%%%.......] Still loading...");
    });

    it('should have a "60.00" back ', function () {
        //Arrange (make object)

        //Act
        const actual = functions.factorialDivision(5, 2);
        //Assert
        assert.strictEqual(actual, "60.00");
    });


});