const dataTypes = function(){};



//----------------- ----------------------------   START   --------------------------- --------------------------



//----------------- ---------------------------- exercise 01 --------------------------- --------------------------



// 1.Sum Digits
// Write a function which will be given a single number. Your task is to find the sum of its digits.



dataTypes.prototype.sumDigits = function(n) {
    return n
        .toString()
        .split("")
        .map(x => Number(x))
        .reduce((a, v) => a + v);
}



//----------------- ---------------------------- exercise 02 --------------------------- --------------------------



// Write a function which receives 3 parameters. Each parameter is a single character. 
//Combine all the characters into one string and print it on the console.



dataTypes.prototype.charsToString = function(...args){
    return args.join("");
}



//----------------- ---------------------------- exercise 03 --------------------------- --------------------------


// 3.Town Info
// You will be given 3 parameters. The first parameter will be the name of the town (string), the second – the population (number) and the third the area (number). Print the result in the following format:
// "Town {town name} has population of {population} and area {area} square km."



dataTypes.prototype.townInfo = function(...args) {
    return `Town ${args[0]} has population of ${args[1]} and area ${args[2]} square km.`;
}



//----------------- ---------------------------- exercise 04 --------------------------- --------------------------



// 4.Convert Meters to Kilometres
// You will be given a number that will be distance in meters. 
//Write a program that converts meters to kilometers formatted to the second decimal point.



dataTypes.prototype.convertMeterToKilometer = function (x) {
    return (x / 1000).toFixed(2);
}



//----------------- ---------------------------- exercise 05 --------------------------- --------------------------



// 5.Pounds to Dollars
// Write a function that converts British pounds to dollars formatted to 3th decimal point. 
// 1 British Pound = 1.31 Dollars



dataTypes.prototype.poundToDollar =  function (n) {
    return (n * 1.31).toFixed(3);
}





//----------------- ---------------------------- exercise 06 --------------------------- --------------------------



// 6.Reversed Chars
// Write a program that takes 3 parameters (characters) and prints them in reversed order with a space between them.



dataTypes.prototype.reversedChars = function (...args) {
    return args.reverse().join(' ');
}



//----------------- ---------------------------- exercise 07 --------------------------- --------------------------



// 7.Lower or Upper
// Write a function that prints whether a given character is upper-case or lower-case.



dataTypes.prototype.lowerToUpper = function(x) {
    return x === x.toUpperCase() ? "upper-case" : "lower-case";
}



//----------------- ---------------------------- exercise 08 --------------------------- --------------------------



// 8.*Calculator
// Write a function that receives 3 parameters: a number, an operator (string) and another number. 
//Print the result of the calculation on the console formatted to the second decimal point 



dataTypes.prototype.calculator = function(...args) {
    const actions = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
        "*": (x, y) => x * y,
        "/": (x, y) => x / y,
        "**": (x, y) => x ** y,
        "%": (x, y) => x % y,
    }

    return (actions[args[1]](args[0], args[2])).toFixed(2)
}



//----------------- ---------------------------- exercise 09 --------------------------- --------------------------



// 9.*Gladiator Expenses
// As a gladiator, Peter has to repair his broken equipment when he loses a fight. His equipment consists of helmet, sword, shield and armour. You will receive the Peter`s lost fights count. 
// Every second lost game, his helmet is broken.
// Every third lost game, his sword is broken.
// When both his sword and helmet are broken in the same lost fight, his shield also brakes.
// Every second time, when his shield brakes, his armour also needs to be repaired. 
// You will receive the price of each item in his equipment. Calculate his expenses for the year for renewing his equipment. 
// Input / Constraints
// You will receive 5 parameters to your function:
// First parameter – lost fights count – integer in the range [0, 1000].
// Second parameter – helmet price - floating point number in range [0, 1000]. 
// Third parameter – sword price - floating point number in range [0, 1000]. 
// Fourth parameter – shield price - floating point number in range [0, 1000]. 
// Fifth parameter – armor price - floating point number in range [0, 1000]. 



dataTypes.prototype.gladiatorExpenses = function(...args) {
    let finalPrice = 0
    let brokenTimes = 0
    const failedFights = args.shift()

    for (let i = 1; i <= failedFights; i += 1) {
        if (i % 2 === 0) {
            if (i % 3 === 0) {
                brokenTimes += 1
                if (brokenTimes % 2 === 0) {
                    finalPrice += args.reduce((a, v) => a + v)
                } else {
                    finalPrice += args.slice(0, 3).reduce((a, v) => a + v)
                }
            } else {
                finalPrice += args[0]
            }
        } else if (i % 3 === 0) {
            finalPrice += args[1]
        }
    }

    return `Gladiator expenses: ${finalPrice.toFixed(2)} aureus`;
}



//----------------- ----------------------------   END   --------------------------- --------------------------

module.exports = dataTypes;



