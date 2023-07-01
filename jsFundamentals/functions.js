const functions = function(){};



//----------------- ----------------------------   START   --------------------------- --------------------------



//----------------- ---------------------------- exercise 01 --------------------------- --------------------------



// 1.Smallest of Three Numbers
// Write a function which receives three integer numbers to print the smallest. Use appropriate name for the function.



functions.prototype.smallestOfThreeNum = function(...args) {
    return Math.min(...args)
}



//----------------- ---------------------------- exercise 02 --------------------------- --------------------------



// 2.Add and Subtract
// You will receive three integer numbers. 
// Write a function sum() to get the sum of the first two integers and subtract() function that subtracts the third integer from the result.



functions.prototype.addAndSubtract = function(...args) {
    const last = args.pop();
    function add() {
        return args.reduce((a, v) => a + v);
    }

    function subtract() {
        return add() - last;
    }

    return subtract();
}



//----------------- ---------------------------- exercise 03 --------------------------- --------------------------



// 3.Characters in Range
// Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code. 
//Keep in mind that the second character code might be before the first one inside the ASCII table.



functions.prototype.charsInRange = function foo(...args) {
    let result = []
    const start = args[0].charCodeAt(0)
    const end = args[1].charCodeAt(0)

    function display(start, end) {
        for (let i = start + 1; i < end; i++) {
            result.push(String.fromCharCode(i))
        }
    }

    start < end ? display(start, end) : display(end, start)

    return result.join(" ");
}



//----------------- ---------------------------- exercise 04 --------------------------- --------------------------



// 4.Odd and Even Sum
// You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number. 



functions.prototype.oddAndEven = function(n) {
    let evens = 0
    let odds = 0
    n = n
        .toString()
        .split("")
        .map(x => Number(x))
        .forEach(x => (x % 2 === 0 ? (evens += x) : (odds += x)))

    return `Odd sum = ${odds}, Even sum = ${evens}`
}



//----------------- ---------------------------- exercise 05 --------------------------- --------------------------



// 5.Palindrome Integers
// A palindrome is a number which reads the same backward as forward, such as 323 or 1001. 
//Write a function which receives an array of positive integer and checks if each integer is a palindrome or not.



functions.prototype.palindromeIntegers = function(arr) {
    let output = "";
    arr.forEach(x =>
        x.toString() === x.toString().split("").reverse().join("") ? output += "true ": output += "false ");
        return output.trim();
}



//----------------- ---------------------------- exercise 06 --------------------------- --------------------------



// 6.Password Validator
// Write a function that checks if a given password is valid. Password validations are:
// The length should be 6 - 10 characters (inclusive)
// It should consists only of letters and digits
// It should have at least 2 digits 
// If a password is valid print "Password is valid".
// If it is NOT valid, for every unfulfilled rule print a message:
// "Password must be between 6 and 10 characters"
// "Password must consist only of letters and digits"
// "Password must have at least 2 digits"



functions.prototype.passwordValidator = function(str) {
    // react much??

    let output = "";

    const errors = []
    function isValidLength(str) {
        if (!(str.length >= 6 && str.length <= 10))
            errors.push("Password must be between 6 and 10 characters.")
        return str
    }

    function isOnlyLettersDigits(str) {
        if (!str.match(/^[a-zA-Z0-9]+$/g)) errors.push("Password must consist only of letters and digits.")
        return str
    }

    function atleastTwoDigis(str) {
        if (!str.match(/[0-9]{2,}/g)) errors.push("Password must have at least 2 digits.")
        return str
    }

    atleastTwoDigis(isOnlyLettersDigits(isValidLength(str)))

    errors.length === 0 ? output = "Password is valid." : errors.forEach(x => output += x)

    return output;
}



//----------------- ---------------------------- exercise 07 --------------------------- --------------------------



// Write a function that receives a single integer number n and prints nxn matrix with that number.



functions.prototype.printMatrix = function(n) {
    let row = [];
    let output = "";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            row.push(n)
        }
        output += row.join(" ") + ", ";
        row = []
    }
    return output.slice(0,-2);
}



//----------------- ---------------------------- exercise 08 --------------------------- --------------------------



// 8.Perfect Number 
// Write a function that receive a number and return if this number is perfect or NOT.
// A perfect number is a positive integer that is equal to the sum of its proper positive divisors. 
//That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).



functions.prototype.perfectNumber = function(n) {
    let sum = 0
    for (i = 1; i <= n; i += 1) {
        if (n % i === 0) sum += i
    }

    return sum / n === 2 ? `We have a perfect number!` : `It's not so perfect.`
}



//----------------- ---------------------------- exercise 09 --------------------------- --------------------------



// 9.Loading Bar
// You will receive a single number between 0 and 100 which is divided with 10 without residue (0, 10, 20, 30...). 
// Your task is to create a function that visualize a loading bar depending on that number you have received in the input.


functions.prototype.loadingBar = function(n) {
    let output = "";
    let arr = new Array(10).fill(".").map((x, i) => {
        if (i < n / 10) x = "%"
        return x
    })

    if (n !== 100) {
        output = `${n}% [${arr.join("")}] Still loading...`;
    } else {
        output = `${n}% Complete! [${arr.join("")}]`;
    }
    return output;
}



//----------------- ---------------------------- exercise 10 --------------------------- --------------------------



// 10.Factorial Division
// Write a function that receives two integer numbers. Calculate factorial of each number. 
//Divide the first result by the second and print the division formatted to the second decimal point.



functions.prototype.factorialDivision = function(...args) {
    let output = "";
    let result = []
    args.forEach((x, i) => {
        for (let j = x; j > 0; j--) {
            result[i] = j * (result[i] || 1)
        }
    })

    output = (result[0] / result[1]).toFixed(2);

    return output;
}
//----------------- ----------------------------   END   --------------------------- --------------------------

module.exports = functions;