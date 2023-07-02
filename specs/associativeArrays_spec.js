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

    it('should have a "c# JS 1 5" back ', function () { 
        //Arrange (make object)

        //Act
        const actual = associativeArrays.occurrences('C# Java JS Java 3 C# 3 1 5 C#');
        //Assert
        assert.strictEqual(actual, "c# js 1 5");
    });

    it('should have a "Parking Lot is Empty" back ', function () { 
        //Arrange (make object)

        //Act
        const actual = associativeArrays.piccolo(['IN, CA2844AA','IN, CA1234TA','OUT, CA2844AA','OUT, CA1234TA']);
        //Assert
        assert.strictEqual(actual, "Parking Lot is Empty");
    });

    it('should have a "2 7IK9Yo0h tSzE5t0p" back ', function () { 
        //Arrange (make object)

        //Act
        const actual = associativeArrays.partyTime(['7IK9Yo0h','9NoBUajQ','Ce8vwPmE','SVQXQCbc','tSzE5t0p','PARTY','9NoBUajQ','Ce8vwPmE','SVQXQCbc']);
        //Assert
        assert.strictEqual(actual, "2 7IK9Yo0h tSzE5t0p");
    });

    it('should have a "Peter: 167 Tomas: 175 Andrea: 197" back ', function () { 
        //Arrange (make object)

        //Act
        const actual = associativeArrays.cardGame(['Peter: 2C, 4H, 9H, AS, QS','Tomas: 3H, 10S, JC, KD, 5S, 10S','Andrea: QH, QC, QS, QD','Tomas: 6H, 7S, KC, KD, 5S, 10C','Andrea: QH, QC, JS, JD, JC','Peter: JD, JD, JD, JD, JD, JD']);
        //Assert
        assert.strictEqual(actual, "Peter: 167 Tomas: 175 Andrea: 197");
    });

    it('should have a "Albania -> Tirana -> 1000 Bulgaria -> Sofia -> 200 Sopot -> 800 France -> Paris -> 2000" back ', function () { 
        //Arrange (make object)

        //Act
        const actual = associativeArrays.travelTime(["Bulgaria > Sofia > 500","Bulgaria > Sopot > 800","France > Paris > 2000","Albania > Tirana > 1000","Bulgaria > Sofia > 200"]);
        //Assert
        assert.strictEqual(actual, "Albania -> Tirana -> 1000 Bulgaria -> Sofia -> 200 Sopot -> 800 France -> Paris -> 2000");
    });

    it('should have a "HP -- BB12345 Microsoft -- CC12345 SoftUni -- AA12345 -- BB12345" back ', function () { 
        //Arrange (make object)

        //Act
        const actual = associativeArrays.companyUsers(['SoftUni -> AA12345','SoftUni -> BB12345','Microsoft -> CC12345','HP -> BB12345']);
        //Assert
        assert.strictEqual(actual, "HP -- BB12345 Microsoft -- CC12345 SoftUni -- AA12345 -- BB12345");
    });

    it('should have a "gold -> 155 silver -> 10" back ', function () { 
        //Arrange (make object)

        //Act
        const actual = associativeArrays.minerTask(['Gold','155','Silver','10' ]);
        //Assert
        assert.strictEqual(actual, "gold -> 155 silver -> 10");
    });

});