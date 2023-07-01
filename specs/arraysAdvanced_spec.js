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
});