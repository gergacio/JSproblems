const assert = require("assert");
const Arrays = require("../jsFundamentals/arrays");

describe('Arrays', function () {
    //ask mocha do for us
    //run this before all test to run
    let arrays; //can use across test files --- Arranging
  

    beforeEach(function () {
        //no let cause cant reference
        //re - set before any test
        arrays = new Arrays();
       
    })

    it('should have a "[ 5, 14, 21, 59, 31 ], 134, 130" back ', function () {
        //Arrange (make object)

        //Act
        const actual = arrays.addAndSubtract([5, 15, 23, 56, 35]);
        //Assert
        assert.strictEqual(actual, "[ 5, 14, 21, 59, 31 ], 134, 130");
    });
    it('should have "hello 4" back', function () {
        //Arrange (make object)

        //Act
        const actual = arrays.commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
        //Assert
        assert.strictEqual(actual, "hello, 4");
    });
    it('should have "22 - 1522 - 110 - 5636 - 46" back', function () {
        //Arrange (make object)

        //Act
        const actual = arrays.mergeArrays(['5', '15', '23', '56', '35'],['17', '22', '87', '36', '11']);
        //Assert
        assert.strictEqual(actual, "22 - 1522 - 110 - 5636 - 46");
    });
    it('should have "32 61 21 51 47" back', function () {
        //Arrange (make object)

        //Act
        const actual = arrays.rotation([51, 47, 32, 61, 21], 2);
        //Assert
        assert.strictEqual(actual, "32 61 21 51 47");
    });
    it('should have "4 3 2" back', function () {
        //Arrange (make object)

        //Act
        const actual = arrays.maxNumber([1, 4, 3, 2]);
        //Assert
        assert.strictEqual(actual, "4 3 2");
    });
    it('should have "2" back', function () {
        //Arrange (make object)

        //Act
        const actual = arrays.equalSums([1, 2, 3, 3]);
        //Assert
        assert.strictEqual(actual, 2);
    });
    it('should have "2 2 2" back', function () {
        //Arrange (make object)

        //Act
        const actual = arrays.maxSeqOfEqualSums([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
        //Assert
        assert.strictEqual(actual,"2 2 2");
    });
    it('should have "1 7\n6 2" back', function () {
        //Arrange (make object)

        //Act
        const actual = arrays.magicSum([1, 7, 6, 2, 19, 23],8);
        //Assert
        assert.strictEqual(actual,"1 7\n6 2");
    });

});