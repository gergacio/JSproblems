const assert = require("assert");
const AdvClasses = require("../jsAdvanced/advClasses.js");

describe('AdvanceJS Classes', function () {
    //ask mocha do for us
    //run this before all test to run
    let advClasses; //can use across test files --- Arranging
  

    beforeEach(function () {
        //no let cause cant reference
        //re - set before any test
        advClasses = new AdvClasses();
       
    })

    it('should have a "Red" back ', function () {
        //Arrange (make object)

        //Act
        const Rectangle = advClasses.rectangle();
 
        rect = new Rectangle(4, 5, 'Red');
        let actual = rect.color;
        //Assert
        assert.strictEqual(actual, "Red");
    });

    it('should have a "http://google.com" back ', function () {
        //Arrange (make object)

        //Act
        const Request = advClasses.dataClass();
        let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
        let actual = myData.uri;
        //Assert
        assert.strictEqual(actual, 'http://google.com');
    });

    // it('should have a "" back ', function () {
    //     //Arrange (make object)

    //     //Act
    //     const actual = advClasses.tickets(['Philadelphia|94.20|available','New York City|95.99|available','New York City|95.99|sold','Boston|126.20|departed'],'destination');

    //     //Assert
    //     assert.strictEqual(actual, "Ticket { destination: 'Boston',price: 126.20,status: 'departed' }, { destination: 'New York City',price: 95.99, status: 'available' }, { destination: 'New York City',price: 95.99,status: 'sold' }, { destination: 'Philadelphia',price: 94.20,status: 'available' }");
    // });

    // it('should have a "" back ', function () {
    //     //Arrange (make object)

    //     //Act
    //     const actual = advClasses.fruit();
    //     //Assert
    //     assert.strictEqual(actual, "");
    // });

    // it('should have a "" back ', function () {
    //     //Arrange (make object)

    //     //Act
    //     const actual = advClasses.fruit();
    //     //Assert
    //     assert.strictEqual(actual, "");
    // });

});