const assert = require('assert');
const TextProcessing = require('../jsFundamentals/textProcessing.js');

describe("Text Processing", function(){
    let textProcessing;

    this.beforeEach(function(){
        textProcessing = new TextProcessing();
    });

    it('should have a "" back ', function () { 
        //Arrange (make object)

        //Act
        const actual = textProcessing.revealWords('great','JS Loop(JSL) is ***** place for learning new programming languages');
        //Assert
        assert.strictEqual(actual, "JS Loop(JSL) is great place for learning new programming languages");
    });
});