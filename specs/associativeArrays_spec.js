const assert = require('assert');
const AssociativeArrays = require('../jsFundamentals/associativeArrays.js');

describe("Associative Arrays", function(){
    let associativeArrays;

    this.beforeEach(function(){
        associativeArrays = new AssociativeArrays();
    });

    it('should have a "this - 3 sentence - 2" back ', function () { 
        //Arrange (make object)

        //Act
        const actual = associativeArrays.wordTracker(['this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the','words','this','and','sentence','because','this','is','your','task']);
        //Assert
        assert.strictEqual(actual, "this - 3 sentence - 2");
    });

    it('should have a "c# php 1 5" back ', function () { 
        //Arrange (make object)

        //Act
        const actual = associativeArrays.occurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
        //Assert
        assert.strictEqual(actual, "c# php 1 5");
    });
});