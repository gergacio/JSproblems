const assert = require("assert");
const AdvDOMevents = require("../jsAdvanced/advDOMevents.js");

describe('AdvJS DOM Events', function () {
    //ask mocha do for us
    //run this before all test to run
    let advDOMevents; //can use across test files --- Arranging
  

    beforeEach(function () {
        //no let cause cant reference
        //re - set before any test
        advDOMevents = new AdvDOMevents();
       
    })

    // it('should have a "" back ', function () {
    //     //Arrange (make object)

    //     //Act
    //     const actual = advDOMevents.();
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