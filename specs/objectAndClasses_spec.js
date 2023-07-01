const assert = require('assert');
const ObjectAndClasses = require('../jsFundamentals/objectAndClasses.js');

describe("Object and Classes", function(){
    let objectAndClasses;

    this.beforeEach(function(){
        objectAndClasses = new ObjectAndClasses();
    });

    it('should have a "Name: Silas Butler -- Personal Number: 12 Name: Adnaan Buckley -- Personal Number: 14 "Name: Juan Peterson -- Personal Number: 13 Name: Brendan Villarreal -- Personal Number: 18" back ', function () { 
        //Arrange (make object)

        //Act
        const actual = objectAndClasses.employees(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']);
        //Assert
        assert.strictEqual(actual, "Name: Silas Butler -- Personal Number: 12 Name: Adnaan Buckley -- Personal Number: 14 Name: Juan Peterson -- Personal Number: 13 Name: Brendan Villarreal -- Personal Number: 18");
    });

    it('should have a "[{town":"Sofia","latitude":"42.70","longitude":"23.33"},{"town":"Beijing","latitude":"39.91","longitude":"116.36"}]" back ', function () { 
        //Arrange (make object)

        //Act
        const actual = objectAndClasses.towns(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625']);
        //Assert
        assert.strictEqual(actual, '[{"town":"Sofia","latitude":"42.70","longitude":"23.33"},{"town":"Beijing","latitude":"39.91","longitude":"116.36"}]');
    });

    it('should have a "Chips -> 5 CocaCola -> 9 Bananas -> 44 Pasta -> 11 Beer -> 2 Flour -> 44 Oil -> 12 Tomatoes -> 70" back ', function () { 
        //Arrange (make object)

        //Act
        const actual = objectAndClasses.storeProvision(["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]);
        //Assert
        assert.strictEqual(actual, "Chips -> 5 CocaCola -> 9 Bananas -> 44 Pasta -> 11 Beer -> 2 Flour -> 44 Oil -> 12 Tomatoes -> 70");
    });

    it('should have a "{"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}{"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}" back ', function () { 
        //Arrange (make object)

        //Act
        const actual = objectAndClasses.movies(['addMovie Fast and Furious','addMovie Godfather','Inception directedBy Christopher Nolan','Godfather directedBy Francis Ford Coppola','Godfather onDate 29.07.2018','Fast and Furious onDate 30.07.2018','Batman onDate 01.08.2018','Fast and Furious directedBy Rob Cohen']);
        //Assert
        assert.strictEqual(actual, '{"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}{"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}');
    });

    it('should have a "Hero: Hes  level => 1 items => Antara, Desolator, Sentinel Hero: Derek  level => 12 items => BarrelVest, DestructionSword Hero: Isacc  level => 25 items => Apple, GravityGun" back ', function () { 
        //Arrange (make object)

        //Act
        const actual = objectAndClasses.inventory(["Isacc / 25 / Apple, GravityGun","Derek / 12 / BarrelVest, DestructionSword","Hes / 1 / Desolator, Sentinel, Antara"]);
        //Assert
        assert.strictEqual(actual, 'Hero: Hes  level => 1 items => Antara, Desolator, Sentinel Hero: Derek  level => 12 items => BarrelVest, DestructionSword Hero: Isacc  level => 25 items => Apple, GravityGun');
    });

    it('should have a "Term: Boiler => Definition: A fuel-burning apparatus or container for heating water.Term: Bus => Definition: A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare.Term: Coffee => Definition: A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub.Term: Microphone => Definition: An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded.Term: Tape => Definition: A narrow strip of material, typically used to hold or fasten something." back ', function () { 
        //Arrange (make object)

        //Act
        const actual = objectAndClasses.makeDictionary([
            '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
            '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
            '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
            '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
            '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
            ]);
        //Assert
        assert.strictEqual(actual, 'Term: Boiler => Definition: A fuel-burning apparatus or container for heating water.Term: Bus => Definition: A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare.Term: Coffee => Definition: A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub.Term: Microphone => Definition: An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded.Term: Tape => Definition: A narrow strip of material, typically used to hold or fasten something.');
    });

    it('should have a "100" back ', function () { 
        //Arrange (make object)

        //Act
        const actual = objectAndClasses.vehicle();
        //Assert
        assert.strictEqual(actual, "100");
    });

});