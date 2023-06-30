const assert = require("assert");
const DataTypes = require("../jsFundamentals/dataTypes.js");

describe('DataTypes', function () {
    //ask mocha do for us
    //run this before all test to run
    let dataTypes; //can use across test files --- Arranging
  

    beforeEach(function () {
        //no let cause cant reference
        //re - set before any test
        dataTypes = new DataTypes();
       
    })

    it('should have a 32 back ', function () {
        //Arrange (make object)

        //Act
        const actual = dataTypes.sumDigits(245678);
        //Assert
        assert.strictEqual(actual, 32);
    });
    it('should have "abc" back', function(){
        const actual = dataTypes.charsToString('a', 'b', 'c');
        assert.strictEqual(actual, "abc");
    })
    it('should have "Town London has population of 9 000 000 000 and area 1572 square km." back', function(){
        const actual = dataTypes.townInfo("London",9000000000,1572);
        assert.strictEqual(actual,"Town London has population of 9000000000 and area 1572 square km.");
    })
    it('should have "1.85" back', function(){
        const actual = dataTypes.convertMeterToKilometer(1852);
        assert.strictEqual(actual,'1.85');
    })
    it('should have "104.800" back', function(){
        const actual = dataTypes.poundToDollar(80);
        assert.strictEqual(actual,'104.800');
    })
    it('should have "C B A" back', function(){
        const actual = dataTypes.reversedChars('A', 'B', 'C');
        assert.strictEqual(actual,'C B A');
    })
    it('should have "lower-case" back', function(){
        const actual = dataTypes.lowerToUpper('a');
        assert.strictEqual(actual,'lower-case');
    })
    it('should have "9.00" back', function(){
        const actual = dataTypes.calculator(3, '*', 3);
        assert.strictEqual(actual,"9.00");
    })
    it('should have "Gladiator expenses: 16.00 aureus" back', function(){
        const actual = dataTypes.gladiatorExpenses(7, 2, 3, 4, 5);
        assert.strictEqual(actual,"Gladiator expenses: 16.00 aureus");
    })

});