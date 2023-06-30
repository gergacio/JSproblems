
const syntaxCondLoop = function(){};


//----------------- ----------------------------   START   --------------------------- --------------------------

//----------------- ---------------------------- exercise 01 --------------------------- --------------------------


// 1.Ages
// Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder. The input comes as single number parameter. The bounders are:
// ·0-2 – baby; 
// ·3-13 – child; 
// ·14-19 – teenager;
// ·20-65 – adult;
// ·>=66 – elder; 
// ·In all other cases - out of bounds
// ·All the values are inclusive.

//introduce switch case statement

syntaxCondLoop.prototype.ages = function(x){
        let output;
 
        switch (x) {
            case ((x >= 0 && x <= 2) ? x : -1):
                output = "baby";
                break;
            case ((x >= 3 && x <= 13) ? x : -1):
                output = "child";
                break;
            case ((x >= 14 && x <= 19) ? x : -1):            
                output = "teenager";
                break;
            case ((x >= 20 && x <= 65) ? x : -1):     
                output = "adult";  
                break;      
            case ((x >= 66) ? x : -1):         
                output = "elder";    
                break;  
            default:
                output = `out of bounds`;               
        
    }
    return output;
   
}


//----------------- ---------------------------- exercise 02 --------------------------- --------------------------


// 2. Rounding
// Write a JS function that rounds numbers to a specific precision.
// The input comes as two numbers. The first value is the number to be rounded and the second is the precision
// (significant decimal places). If the passed precision is more than 15, it should automatically be reduced to 15.
// Remove trailing zeroes, if any (you can use parseFloat (number))
// The output should be printed to the console. Do not print insignificant decimals

syntaxCondLoop.prototype.rounding = function(x, y) {
    return parseFloat(x.toFixed(y < 15 ? y : 15))
}


//----------------- ---------------------------- exercise 03 --------------------------- --------------------------


// 3. Division
// You will be given a number and you have to check whether that number is divisible by any of the following numbers:
// 2, 3, 6, 7, and 10. You should always take the bigger division.
// If the number is divisible by both 2 and 3 it is also divisible by 6 and you should print only the division by 6. If a
// number is divisible by 2 it is sometimes also divisible by 10 and you should print the division by 10.
// If the number is not divisible by any of the given numbers print: "Not divisible". Otherwise, print: "The
// number is divisible by {number}".

syntaxCondLoop.prototype.division = function(n) {
    let division = false
    const divisions = [2, 3, 6, 7, 10]

    divisions.forEach(x => {
        if (n % x === 0) division = x
    })

    return division ? `The number is divisible by ${division}` : `Not divisible`
}


//----------------- ---------------------------- exercise 04 --------------------------- --------------------------

// 4. Vacation
// You are given a group of people, the type of the group, and the day of the week they are going to stay. Based on
// that information calculate how much they have to pay and print that price on the console. Use the table below. In
// each cell is the price for a single person.
// The output should look like that: `Total price: {price}`.The price should be formatted to the second
// decimal point

syntaxCondLoop.prototype.vacation = function(number, type, day) {
    const types = {
        Students: {
            Friday: 8.45,
            Saturday: 9.8,
            Sunday: 10.46,
        },
        Business: {
            Friday: 10.9,
            Saturday: 15.6,
            Sunday: 16,
        },
        Regular: {
            Friday: 15,
            Saturday: 20,
            Sunday: 22.5,
        },
    }

    function display(r) {
        return `Total price: ${r.toFixed(2)}`
    }
    const result = types[type][day] * number
    if (type === "Students" && number >= 30) return display(result - result * 0.15)
    if (type === "Business" && number >= 100) return display(result - 10 * types[type][day])
    if (type === "Regular" && number >= 10 && number <= 20) return display(result - result * 0.05)

    return display(result)
}





//----------------- ---------------------------- exercise 05 --------------------------- --------------------------

// 5. Leap Year
// Write a JS function to check whether a year is a leap. Leap years are either divisible by 4 but not by 100 or are
// divisible by 400. The output should be following:
// • If the year is a leap, print: "yes"
// • Otherwise, print: "no"


syntaxCondLoop.prototype.leapyear = function(y) {
    return ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) ? 'yes' : 'no' 
}


//----------------- ---------------------------- exercise 06 --------------------------- --------------------------


// 6. Print and Sum
// Write a function that displays numbers from given start to given end and their sum. The input comes as two
// number parameters. Print the result like the examples below:
// Examples
// Input |  Output
// 5, 10 | 5 6 7 8 9 10
//---------------------
// Sum: 45

syntaxCondLoop.prototype.printAndSum = function(v1, v2) {
    let sum = 0
    let numbers = []
    for (let i = v1; i <= v2; i++) {
        numbers.push(i)
        sum += i
    }
    return `${numbers.join(' ')} Sum: ${sum}`
}




//----------------- ---------------------------- exercise 07 --------------------------- --------------------------

// 7. Triangle of Numbers
// Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples


//----------------- ---------------------------- exercise 08 --------------------------- --------------------------


// 8. Multiplication Table
// You will receive a number as a parameter. Print the 10 times table for this number. See the examples below for
// more information.
// Output
// Print every row of the table in the following format:
// {number} X {times} = {product}

syntaxCondLoop.prototype.multiplicationTable = function(n) {
    let output;
    for (let i = 1; i <= 10; i++) {
        output += i == 10 ? `${n} X ${i} = ${n * i}`: `${n} X ${i} = ${n * i} `;
    }
    return output;
}
//----------------- ----------------------------   END   --------------------------- --------------------------


module.exports = syntaxCondLoop;