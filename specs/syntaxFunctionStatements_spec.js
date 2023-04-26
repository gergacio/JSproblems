const assert = require('assert');
const MochaObj = require('../syntaxFunctionStatements');

describe('MochaObj', function () {
    //ask mocha do for us
    //run this before all test to run
    let mochaObj; //can use across test files --- Arranging

    beforeEach(function () {
        //no let cause cant reference
        //re - set before any test
         mochaObj = new MochaObj();
    })

    it('should have a string back with his len', function () {
        //Arrange (make object)

        //Act
        const actual = mochaObj.echofoo("peace");
        //Assert
        assert.strictEqual(actual, "5, peace");
    });

    it('should have sum of len of str and and avg len of str', function () {
        //Arrange (make object)

        //Act
        const actual = mochaObj.strLen('chocolate', 'ice cream', 'cake');
        //Assert
        assert.strictEqual(actual, "22, 7");
    });

    it('should have largest number', function () {
        //Arrange (make object)

        //Act
        const actual = mochaObj.largestNum(-3, -5, -22.5);
        //Assert
        assert.strictEqual(actual, 'The largest number is -3.');
    });

    it('should have circle area', function () {
        //Arrange (make object)

        //Act
        const actual = mochaObj.circleArea(5);
        //Assert
        assert.strictEqual(actual, '78.54');
    });

    it('should do math operation', function () {
        //Arrange (make object)

        //Act
        const actual = mochaObj.mathOperations(5, 6, "+");
        //Assert
        assert.strictEqual(actual, '11');
    });

    it('should have sum between passed two nums', function () {
        //Arrange (make object)

        //Act
        const actual = mochaObj.sumOfNum('1', '5');
        //Assert
        assert.strictEqual(actual, '15');
    });

    it('should have num represent day of the week', function () {
        //Arrange (make object)

        //Act
        const actual = mochaObj.daysOfTheWeek("Monday");
        //Assert
        assert.strictEqual(actual, 1);
    });

    it('should have num of days in a month', function () {
        //Arrange (make object)

        //Act
        const actual = mochaObj.daysInAMonth(1, 2012);
        //Assert
        assert.strictEqual(actual, '31');
    });

    it('should have a stars printed', function () {
        //Arrange (make object)

        //Act
        const actual = mochaObj.stars(2);
        //Assert
        assert.strictEqual(actual, '* *');
    });

    it('should have agrageted elem', function () {
        //Arrange (make object)

        //Act
        const actual = mochaObj.agrElem([1, 2, 3] );
        //Assert
        assert.strictEqual(actual, '6, 1.8333333333333333, 123');
    });









});