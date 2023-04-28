
const ArraysMocha = function(){};

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

//1. Even Position Element
//Write a function that finds the elements at even positions in an array.
//The input comes as an array of string elements.
//The output is printed on the console. Collect all elements in a string, separated by space

ArraysMocha.prototype.evenElem = function (arr){
    return arr.filter((e , i) => i % 2 == 0).join(" ");

}

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

//2. Last K Numbers Sequence
//You are given two integers n and k. Write a JS function that generates and return the following sequence:
// The first element is 1
// Every following element equals the sum of the previous k elements
// The length of the sequence is n elements
//The input comes as two number arguments. The first element represents the number n, and the second – the
//number k.
//The output is the return value of your function and should be string of numbers.

ArraysMocha.prototype.lastKNumSeq = function (n, k) {
    const arr = [1]
    for (let i = 1; i < n; i++) {
        arr.push(arr.slice(-k).reduce((a, v) => a + v, 0))
    }
  
    return arr.join(", ");
}

module.exports = ArraysMocha;
