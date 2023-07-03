const assert = require("assert");
const AdvObjAndComposition = require("../jsAdvanced/advObjAndComposition.js");

describe('AdvJS Obj And Composition', function () {
    //ask mocha do for us
    //run this before all test to run
    let advObjAndComposition; //can use across test files --- Arranging
  

    beforeEach(function () {
        //no let cause cant reference
        //re - set before any test
        advObjAndComposition = new AdvObjAndComposition();
       
    })

    it('should have a "138" back ', function () {
        //Arrange (make object)

        //Act
        const obj = advObjAndComposition.calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
        const actual = obj["Rise"]

        //Assert
        assert.strictEqual(actual, 138);
    });

    it('should have a "8" back ', function () {
        //Arrange (make object)

        //Act
        const obj = advObjAndComposition.constructionCrew({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true });
        const actual = obj.levelOfHydrated
        
        //Assert
        assert.strictEqual(actual, 8);
    });

    it('should have a "13, 13, 13, 13" back ', function () {
        //Arrange (make object)

        //Act
        const obj = advObjAndComposition.carFactory({ model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14 });

        const actual = obj.wheels.join(", ");
        //Assert
        assert.strictEqual(actual, "13, 13, 13, 13");
    });

    it('should have a "[{"name":"Jake","level":1000,"items":["Gauss","HolidayGrenade"]}]" back ', function () {
        //Arrange (make object)

        //Act
        const actual = advObjAndComposition.heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);
       
        
        //Assert
        assert.strictEqual(actual, '[{"name":"Jake","level":1000,"items":["Gauss","HolidayGrenade"]}]');
    });

    it('should have a "Sample Product -> 1000 (Sample Town) Orange -> 2 (Sample Town) Peach -> 1 (Sample Town) Burger -> 10 (New York)" back ', function () {
        //Arrange (make object)

        //Act
        const actual = advObjAndComposition.lowesPricesInCities(['Sample Town | Sample Product | 1000','Sample Town | Orange | 2','Sample Town | Peach | 1','Sofia | Orange | 3','Sofia | Peach | 2','New York | Sample Product | 1000.1','New York | Burger | 10']);
        //Assert
        assert.strictEqual(actual, "Sample Product -> 1000 (Sample Town) Orange -> 2 (Sample Town) Peach -> 1 (Sample Town) Burger -> 10 (New York)");
    });
 
});