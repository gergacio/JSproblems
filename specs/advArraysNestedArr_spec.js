const assert = require("assert");
const AdvArraysNestedArr = require("../jsAdvanced/advArraysNestedArr.js");

describe('AdvJS Arrays Nested Arr', function () {
    //ask mocha do for us
    //run this before all test to run
    let advArraysNestedArr; //can use across test files --- Arranging
  

    beforeEach(function () {
        //no let cause cant reference
        //re - set before any test
        advArraysNestedArr = new AdvArraysNestedArr();
       
    })

    it('should have a "One-Two-Three-Four-Five" back ', function () {
        //Arrange (make object)

        //Act
        const actual = advArraysNestedArr.printArrWithGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five'], '-');
        //Assert
        assert.strictEqual(actual, "One-Two-Three-Four-Five");
    });

    it('should have a "5 31 20" back ', function () {
        //Arrange (make object)

        //Act
        const actual = advArraysNestedArr.printEverNthElemFromArr(['5','20','31','4','20'], 2);
        //Assert
        assert.strictEqual(actual, '5 31 20');
    });

    it('should have a "1\n2\n3\n4" back ', function () {
        //Arrange (make object)

        //Act
        const actual = advArraysNestedArr.addRemoveElem(['add', 'add', 'add', 'add']);
        //Assert
        assert.strictEqual(actual, "1\n2\n3\n4");
    });

    it('should have a "3 4 1 2" back ', function () {
        //Arrange (make object)

        //Act
        const actual = advArraysNestedArr.rotateArray(['1', '2', '3', '4'], 2);
        //Assert
        assert.strictEqual(actual, "3 4 1 2");
    });

    it('should have a "20" back ', function () {
        //Arrange (make object)

        //Act
        const actual = advArraysNestedArr.ExtractIncSubseqFromArr([20, 3, 2, 15,6, 1]);
        //Assert
        assert.strictEqual(actual, "20");
    });

    it('should have a "1.Bob 2.Christina 3.Ema 4.John" back ', function () {
        //Arrange (make object)

        //Act
        const actual = advArraysNestedArr.listOfNames(["John", "Bob", "Christina", "Ema"]);
        //Assert
        assert.strictEqual(actual, "1.Bob 2.Christina 3.Ema 4.John");
    });

    it('should have a "" back ', function () {
        //Arrange (make object)

        //Act
        const actual = advArraysNestedArr.sortNum([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
        //Assert
        assert.strictEqual(actual, "-3, 65, 1, 63, 3, 56, 18, 52, 31, 48");
    });

    it('should have a "" back ', function () {
        //Arrange (make object)

        //Act
        const actual = advArraysNestedArr.sortArrBy2Criteria(['alpha', 'beta', 'gamma']);
        //Assert
        assert.strictEqual(actual, "beta\nalpha\ngamma");
    });
});