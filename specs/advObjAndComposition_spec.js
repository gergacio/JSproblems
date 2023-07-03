const assert = require("assert");
const AdvObjAndComposition = require("../jsAdvanced/advObjAndComposition.js");

describe('AdvJS Obj And Composition', function () {
    //ask mocha do for us
    //run this before all test to run
    let advObjAndComposition; //can use across test files --- Arranging
  

    beforeEach(function () {
        //no let cause cant reference
        //re - set before any test
        advObjAndComposition = new AdvObjAndComposition();
       
    })

    it('should have a "138" back ', function () {
        //Arrange (make object)

        //Act
        const obj = advObjAndComposition.calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
        const actual = obj["Rise"]

        //Assert
        assert.strictEqual(actual, 138);
    });
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