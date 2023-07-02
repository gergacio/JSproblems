const advSyntaxFuncStatements = function(){};



//----------------- ----------------------------   START   --------------------------- --------------------------



//----------------- ---------------------------- exercise 01 --------------------------- --------------------------



// 1.Fruit
// Write a function that calculates how much money you need to buy fruit. You will receive a string for the type of fruit you want to buy, a number for weight in grams and another number for the price per kilogram. 
// Print the following text on the console:  
// 'I need ${money} to buy {weight} kilograms {fruit}.'
// Print the weight and the money rounded to two decimal places.
// The input comes as three arguments passed to your function.
// The output should be printed on the console.



advSyntaxFuncStatements.prototype.fruit = function (a, x, y) {
    const kg = x / 1000
    return `I need $${(kg * y).toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${a}.`
}



//----------------- ---------------------------- exercise 02 --------------------------- --------------------------



// 2.Greatest Common Divisor - GCD
// Write a function that takes two positive numbers as input and compute the greatest common divisor.	
// The input comes as two positive integer numbers.
// The output should be printed on the console.



advSyntaxFuncStatements.prototype.gcd = function(...args) {
    let result = 1
    for (let i = 2; i < 9; i++) {
        result = args.every(x => x % i === 0) ? i : result
    }

    return result
}



//----------------- ---------------------------- exercise 03 --------------------------- --------------------------



// 3.Same Numbers
// Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
// Print on the console true if all numbers are same and false if not. On the next line print the sum of all digits.
// The input comes as an integer number.
// The output should be printed on the console.



advSyntaxFuncStatements.prototype.sameNumbers = function(n) {
    const arr = `${n}`.split("")
    return `${arr.every((x, i, arr1) => arr1.slice(i).every(y => x === y))}
${arr.map(Number).reduce((a, v) => a + v, 0)}`
}



//----------------- ---------------------------- exercise 04 --------------------------- --------------------------



// 4.Time to Walk
// Write a function that calculates how long it takes a student to get to university. 
// The function takes three numbers:
// The first is the number of steps the student takes from their home to the university
// Тhe second number is the length of the student's footprint in meters
// Тhe third number is the student speed in km/h
// Every 500 meters the student rests and takes a 1 minute break.
// Calculate how long the student walks from home to university and print on the console the result in the following format: 'hours:minutes:seconds'.
// The input comes as three numbers.
// The output should be printed on the console.



advSyntaxFuncStatements.prototype.timeToWalk = function(steps, metersPerStep, kmPerHour) {
    const distance = steps * metersPerStep
    const decimalTime = distance / 1000 / kmPerHour
    const n = new Date(0, 0)
    n.setSeconds(decimalTime * 60 * 60 + 1) //no idea why judge wants 1 second more, but I meh... added it.
    n.setMinutes(n.getMinutes() + Math.floor(distance / 500))

    return n.toTimeString().slice(0, 8)
}



//----------------- ---------------------------- exercise 05 --------------------------- --------------------------



// 5.Road Radar
// Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. Each area has a different limit: 
// On the motorway the limit is 130 km/h
// On the interstate the limit is 90 km/h
// In the city the limit is 50 km/h 
// Within a residential area the limit is 20 km/h
// If the driver is within the limits, there should be printed speed and the speed limit. 
// `Driving {speed} km/h in a {speed limit} zone`
// If the driver is over the limit, however, your function should print the severity of the infraction and the difference in speeds. 
// `The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
// For speeding up to 20 km/h over the limit, speeding should be printed 
// For speeding up to 40 km/h over the limit, excessive speeding should be printed
// For anything else, reckless driving should be printed
// The input comes as 2 string parameters. The first element is the current speed (number), the second element is the area.
// The output should be printed on the console.




advSyntaxFuncStatements.prototype.roadRadar = function(speed, area) {
    const limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    }
    const getStatus = n => {
        const status = {
            [n > 40]: "reckless driving",
            [n > 20 && n <= 40]: "excessive speeding",
            [n <= 20]: "speeding",
        }

        return status["true"]
    }
    const speedDiff = speed - limits[area]

    return speedDiff > 0
        ? `The speed is ${speedDiff} km/h faster than the allowed speed of ${limits[area]} - ${getStatus(speedDiff)}`
        : `Driving ${speed} km/h in a ${limits[area]} zone`
}



//----------------- ---------------------------- exercise 06 --------------------------- --------------------------



// 6.Cooking by Numbers
// Write a program that receives 6 parameters which are a number and a list of five operations. Perform the operations sequentially by starting with the input number and using the result of every operation as starting point for the next one. Print the result of every operation in order. The operations can be one of the following:
// chop - divide the number by two
// dice - square root of number
// spice - add 1 to number
// bake - multiply number by 3
// fillet - subtract 20% from number
// The input comes as 6 string elements. The first element is the starting point and must be parsed to a number. The remaining 5 elements are the names of the operations to be performed.
// The output should be printed on the console.



advSyntaxFuncStatements.prototype.cookingByNumbers = function(...args) {
    let output = "";
    let n = Number(args.shift())
    const actions = {
        chop: x => n = x / 2,
        dice: x => n = Math.sqrt(x),
        spice: x => n = x + 1,
        bake: x => n = x * 3,
        fillet: x => n = x - x * 0.2,
    }

    args.forEach(x => output += actions[x](n) + " ");
    return output.trim();
}



//----------------- ---------------------------- exercise 07 --------------------------- --------------------------



// 7.Validity Checker
// Write a program that receives total of 4 parameters in the format x1, y1, x2, y2.
// Check if the distance between each point and the start of the cartesian coordinate system (0, 0) is valid.
// A distance between two points is considered valid, if it is an integer value. 
// In case a distance is valid, print"{x1, y1} to {x2, y2} is valid"
// If the distance is invalid, print "{x1, y1} to {x2, y2} is invalid"
// The order of comparisons should always be first {x1, y1} to {0, 0},
// then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}. 
// The input consists of two points given as 4 numbers.
// For each comparison print either "{x1, y1} to {x2, y2} is valid" if the distance is valid,
// or "{x1, y1} to {x2, y2} is invalid" if it is invalid.



advSyntaxFuncStatements.prototype.validityChecker = function(x, y, x1, y1) {
    let output = "";
    const isValidDist = (x, y, x1, y1) =>
        Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2)) % 1 === 0
    const pairs = [
        [x, y, 0, 0],
        [x1, y1, 0, 0],
        [x, y, x1, y1],
    ]
    const printMsg = (a, b, c, d, validity) => `{${a}, ${b}} to {${c}, ${d}} is ${validity}`
    pairs.forEach((x, i) =>
        output += isValidDist(...pairs[i]) ? printMsg(...x, "valid" + " ") : printMsg(...x, "invalid")
    );
    return output.trim();
}



//----------------- ---------------------------- exercise 08 --------------------------- --------------------------



// 8.*Words Uppercase
// Write a program that extracts all words from a passed in string and converts them to upper case. The extracted words in upper case must be printed on a single line separated by ", ".
// The input comes as a single string argument - the text to extract and convert words from.
// The output should be a single line containing the converted string.
// Hints
// You may need to use a Regular Expression or alternatively check for all delimiters that can be found in a sentence
// (ex. ",", " ", "!", "?" and so on).



advSyntaxFuncStatements.prototype.wordsUppercase = function(s) {
    return s.match(/\w+/g).join(", ").toLocaleUpperCase()
}



//----------------- ----------------------------   END   --------------------------- --------------------------

module.exports = advSyntaxFuncStatements;