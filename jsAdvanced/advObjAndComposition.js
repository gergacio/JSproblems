const advObjAndComposition = function(){};



//----------------- ----------------------------   START   --------------------------- --------------------------



//----------------- ---------------------------- exercise 01 --------------------------- --------------------------



// 1.Calorie Object
// Write a function that composes an object by given properties. The input comes as an array of strings. Every even index of the array represents the name of the food.
// Every odd index is a number that is equal to the calories in 100 grams of the given product. Assign each value to its corresponding property and print it on the console.
// The input comes as an array of string elements.
// The output should be printed on the console.



advObjAndComposition.prototype.calorieObject = function(arr) {
    return arr.reduce((a, v, i) => {
        if (i % 2 === 0) {
            a[v] = Number(arr[i + 1])
        }
        return a;
    }, {});
}

//----------------- ---------------------------- exercise 02 --------------------------- --------------------------



//----------------- ---------------------------- exercise 03 --------------------------- --------------------------



//----------------- ---------------------------- exercise 03 --------------------------- --------------------------



//----------------- ---------------------------- exercise 04 --------------------------- --------------------------


//----------------- ---------------------------- exercise 05 --------------------------- --------------------------



//----------------- ---------------------------- exercise 06 --------------------------- --------------------------




//----------------- ---------------------------- exercise 07 --------------------------- --------------------------





//----------------- ---------------------------- exercise 08 --------------------------- --------------------------







//----------------- ----------------------------   END   --------------------------- --------------------------

module.exports = advObjAndComposition;

