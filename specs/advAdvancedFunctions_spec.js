const assert = require("assert");
const AdvAdvancedFunctions = require("../jsAdvanced/advAdvancedFunctions.js");

describe('AdvJS Advanced Functions', function () {
    //ask mocha do for us
    //run this before all test to run
    let advAdvancedFunctions; //can use across test files --- Arranging
  

    beforeEach(function () {
        //no let cause cant reference
        //re - set before any test
        advAdvancedFunctions = new AdvAdvancedFunctions();
       
    })

    it('should have a "" back ', function () {
        //Arrange (make object)

        //Act
        const arr = advAdvancedFunctions.sortArr([14, 7, 17, 6, 8], 'asc');
        const actual = arr.join(", ");
        //Assert
        assert.strictEqual(actual, "6, 7, 8, 14, 17");
    });

    it('should have a "" back ', function () {
        //Arrange (make object)

        //Act
        const actual = advAdvancedFunctions.argumentInfo('cat', 42, function () { console.log('Hello world!'); });
        //Assert
        assert.strictEqual(actual, "string: cat number: 42 function: function () { console.log('Hello world!'); } string = 1 number = 1 function = 1");
    });

    it('should have a "13" back ', function () {
        //Arrange (make object)

        //Act
        const fib = advAdvancedFunctions.fibonacci();
        const result1 = fib();
        const result2 = fib();
        const result3 = fib();
        const result4 = fib();
        const result5 = fib();
        const result6 = fib();
        const actual = fib();
        //Assert
        assert.strictEqual(actual, 13);
    });

    it('should have a "Error: not enough carbohydrate in stock" back ', function () {
        //Arrange (make object)

        //Act
        let manager = advAdvancedFunctions.breakfastRobot();
        const result1 = manager("restock flavour 50");
        const actual = manager("prepare lemonade 4");
        
        //Assert
        assert.strictEqual(actual, "Error: not enough carbohydrate in stock");
    });

    it('should have a "4" back ', function () {
        //Arrange (make object)

        //Act
        const actual = Number(advAdvancedFunctions.functionalSum(1)(6)(-3));
        
        //Assert
        assert.strictEqual(actual, 4);
    });

});