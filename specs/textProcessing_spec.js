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

    it('should have a "special socialMedia" back ', function () { 
        //Arrange (make object)

        //Act
        const actual = textProcessing.hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
        //Assert
        assert.strictEqual(actual, "special socialMedia");
    });

    it('should have a "File name: Template File extension: pptx" back ', function () { 
        //Arrange (make object)

        //Act
        const actual = textProcessing.extractFile('C:\\Internal\\training-internal\\Template.pptx');
        //Assert
        assert.strictEqual(actual, "File name: Template File extension: pptx");
    });

    it('should have a "javascript" back ', function () { 
        //Arrange (make object)

        //Act
        const actual = textProcessing.stringSubstring('javascript','JavaScript is the best programming language');
        //Assert
        assert.strictEqual(actual, "javascript");
    });

    it('should have a "abcdedsa" back ', function () { 
        //Arrange (make object)

        //Act
        const actual = textProcessing.repeatingChar('aaaaabbbbbcdddeeeedssaa');
        //Assert
        assert.strictEqual(actual, "abcdedsa");
    });

    it('should have a "Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can" back ', function () { 
        //Arrange (make object)

        //Act
        const actual = textProcessing.pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
        //Assert
        assert.strictEqual(actual, "Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can");
    });

    it('should have a "ThisIsDifficult ThisIsSoAmazing" back ', function () { 
        //Arrange (make object)

        //Act
        const actual = textProcessing.cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
        //Assert
        assert.strictEqual(actual, "ThisIsDifficult ThisIsSoAmazing");
    });

    // it('should have a "" back ', function () { 
    //     //Arrange (make object)

    //     //Act
    //     const actual = textProcessing.revealWords();
    //     //Assert
    //     assert.strictEqual(actual, "");
    // });
});