const assert = require("assert");
const AdvUnitTestErrorHandling = require("../jsAdvanced/advUnitTestErrorHandling");

describe('AdvJS Unit Test And Error Handling', function () {
    //ask mocha do for us
    //run this before all test to run
    let advUnitTestErrorHandling; //can use across test files --- Arranging
  

    beforeEach(function () {
        //no let cause cant reference
        //re - set before any test
        advUnitTestErrorHandling = new AdvUnitTestErrorHandling();
       
    })

    // it('should have a "" back ', function () {
    //     //Arrange (make object)

    //     //Act
    //     const actual = advUnitTestErrorHandling.();
    //     //Assert
    //     assert.strictEqual(actual, "");
    // });
        // it('should have a "" back ', function () {
    //     //Arrange (make object)

    //     //Act
    //     const actual = advSyntaxFuncStatements.fruit();
    //     //Assert
    //     assert.strictEqual(actual, "");
    // });

    // it('should have a "" back ', function () {
    //     //Arrange (make object)

    //     //Act
    //     const actual = advSyntaxFuncStatements.fruit();
    //     //Assert
    //     assert.strictEqual(actual, "");
    // });

    // it('should have a "" back ', function () {
    //     //Arrange (make object)

    //     //Act
    //     const actual = advSyntaxFuncStatements.fruit();
    //     //Assert
    //     assert.strictEqual(actual, "");
    // });

    // it('should have a "" back ', function () {
    //     //Arrange (make object)

    //     //Act
    //     const actual = advSyntaxFuncStatements.fruit();
    //     //Assert
    //     assert.strictEqual(actual, "");
    // });

    // it('should have a "" back ', function () {
    //     //Arrange (make object)

    //     //Act
    //     const actual = advSyntaxFuncStatements.fruit();
    //     //Assert
    //     assert.strictEqual(actual, "");
    // });

    // it('should have a "" back ', function () {
    //     //Arrange (make object)

    //     //Act
    //     const actual = advSyntaxFuncStatements.fruit();
    //     //Assert
    //     assert.strictEqual(actual, "");
    // });
});