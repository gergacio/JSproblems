
const MochaObj = function(){};

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

// 1. Echo Function
//Write a JS function that takes one string parameter and prints on two lines 
//the length of the parameter and then
//the unchanged parameter itself.

MochaObj.prototype.echofoo = function(input){
    return`${input.length}, ${input}`;
}

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

// 2. String Length
//Write a JS function that takes three string arguments as an input. 
//Calculate the sum of the length of the strings and
//the average length of the strings rounded down to the nearest integer.
//The input comes as three string arguments passed to your function.

MochaObj.prototype.strLen = function (...args){
    const length = args.reduce((ac, elem) => {
        return ac +=elem.length;
    },0);
    return `${length}, ${Math.round(length/args.length)}`;
    
}

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

// 3. Largest Number
//Write a function that takes three number arguments as input and finds the largest of them. 
//Print the following text
//on the console: `The largest number is {number}.`.
//The input comes as three number arguments passed to your function.
//The output should be printed to the console.

MochaObj.prototype.largestNum = function (...args){
    const number = Math.max(...args);
    return  `The largest number is ${number}.`;
}

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

// 4. Circle Area
//Write a function that takes a single argument as an input. Check the type of input argument. 
//If it is a number,assume it is the radius of a circle and calculate the circle area. 
//Print the area rounded to two decimal places.
//If the argument type is NOT a number, print the following text on the console:
//`We can not calculate the circle area, because we receive a {type of argument}`
  
MochaObj.prototype.circleArea = function (input){

    const result =
        typeof input === "number"
            ? (Math.PI * input * input).toFixed(2)
            : `We can not calculate the circle area, because we receive a ${typeof input}.`
    return result;
}

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

// 5. Math Operations
//Write a JS function that takes two numbers and a string as an input.
//The string may be one of the following: '+', '-', '*', '/', '%', '**'.
//Print on the console the result of the mathematical operation between both numbers 
//and the operator you receive as a string.
//The input comes as two numbers and a string argument passed to your function.

MochaObj.prototype.mathOperations = function (x, y, a){
    const operator = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
        "*": (x, y) => x * y,
        "/": (x, y) => x / y,
        "%": (x, y) => x % y,
        "**": (x, y) => x ** y,
              
    };
    return `${operator[a](x, y)}`;
   
}

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

// 6. Sum of Numbers N…M
//Write a JS function that takes two numbers n and m as an input and prints the sum of all numbers from n to m.
//The input comes as two string elements that need to be parsed as numbers.
//The output should return the sum.


MochaObj.prototype.sumOfNum = function (x, y){
    [x,y] = [x,y].map(n => Number(n));
   let sum = 0;

   for (let i = x; i <= y; i++) {
       sum += i;
   }
   return `${sum}`;
   
}

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

// 7. Day of Week
//Write a function that prints a number between 1 and 7 when a day of the week is passed to it as a string and an
//error message if the string is not recognized.
//The input comes as a single-string argument.
//The output should be returned as a result.

MochaObj.prototype.daysOfTheWeek = function (input){
    const days = {
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6,
        Sunday: 7,
   
    };
    return days[input] || 'error';
}


//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

// 8. Days in a month
//Write a JavaScript function to get the number of days in a month.
//The input comes as two numeric parameters. The first element is the month, the second is the year.
//The output must return the number of days in a month for a given year.

MochaObj.prototype.daysInAMonth = function f(month, year){
    const daysInMonth = new Date(year, month, 0).getDate();
    return `${daysInMonth}`;
}

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

// 9. Square of Stars
//Write a function that prints a rectangle made of stars with variable size, depending on an input parameter. If there
//is no parameter specified, the rectangle should always be of size 5. Look at the examples to get an idea.
//The input comes as a single number argument.
MochaObj.prototype.stars = function f(n){
    const row = "* ".repeat(n).trim();
    return row;

}

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

//10. Aggregate Elements
//Write a program that performs different operations on an array of elements. Implement the following operations:
// Sum(ai) - calculates the sum of all elements from the input array
// Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
// Concat(ai) - concatenates the string representations of all elements from the array
//The input comes as an array of number elements


MochaObj.prototype.agrElem =function (arr) {
         return `${arr.reduce((a, v) => a + v, 0)}, ${arr.reduce((a, v) => a + 1 / v, 0)}, ${arr.join("")}`
}

//always export 
module.exports = MochaObj;