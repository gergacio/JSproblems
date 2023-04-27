
const ArraysMocha = function(){};

//1. Even Position Element
//Write a function that finds the elements at even positions in an array.
//The input comes as an array of string elements.
//The output is printed on the console. Collect all elements in a string, separated by space

ArraysMocha.prototype.evenElem = function (arr){
    return arr.filter((e , i) => i % 2 == 0).join(" ");

}

module.exports = ArraysMocha;
