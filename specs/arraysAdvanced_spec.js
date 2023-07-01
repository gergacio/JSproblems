const assert = require('assert');
const ArraysAdvanced = require('../jsFundamentals/arraysAdvanced.js');

describe("Arrays Advanced", function(){
    let arraysAdvanced;

    this.beforeEach(function(){
        arraysAdvanced = new ArraysAdvanced();
    });

    it('should have a "72 54 21 12 4 75 23 10 0" back ', function () {
        //Arrange (make object)

        //Act
        const actual = arraysAdvanced.train(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75']);
        //Assert
        assert.strictEqual(actual, "72 54 21 12 4 75 23 10 0");
    });

    it('should have a "7 8 9 2 3 4 1" back ', function () {
        //Arrange (make object)

        //Act
        const actual = arraysAdvanced.distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
        //Assert
        assert.strictEqual(actual, "7 8 9 2 3 4 1");
    });

    it('should have a "John is not in the list!Allie" back ', function () {
        //Arrange (make object)

        //Act
        const actual = arraysAdvanced.houseParty(['Allie is going!','George is going!','John is not going!','George is not going!']);
        //Assert
        assert.strictEqual(actual, "John is not in the list!Allie");
    });

    it('should have a "94 1 69 2 63 3 52 18 31 21" back ', function () {
        //Arrange (make object)

        //Act
        const actual = arraysAdvanced.sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
        //Assert
        assert.strictEqual(actual, "94 1 69 2 63 3 52 18 31 21");
    });

    it('should have a "beta alpha gamma" back ', function () {
        //Arrange (make object)

        //Act
        const actual = arraysAdvanced.sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
        //Assert
        assert.strictEqual(actual, "beta alpha gamma");
    });

    it('should have a "12" back ', function () {
        //Arrange (make object)

        //Act
        const actual = arraysAdvanced.bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
        //Assert
        assert.strictEqual(actual, 12);
    });

    it('should have a "Number 3 occurs 1 times." back ', function () {
        //Arrange (make object)

        //Act
        const actual = arraysAdvanced.searchForNumbers([5, 2, 3, 4, 1, 6], [5, 2, 3]);
        //Assert
        assert.strictEqual(actual, "Number 3 occurs 1 times.");
    });


    it('should have a "[ 1, 8, 2, 4, 5, 6, 7 ]" back ', function () {
        //Arrange (make object)

        //Act
        const actual = arraysAdvanced.arrayManipulator([1, 2, 4, 5, 6, 7],['add 1 8', 'contains 1', 'contains 3', 'print']);
        //Assert
        assert.strictEqual(actual, "[ 1, 8, 2, 4, 5, 6, 7 ]");
    });





});