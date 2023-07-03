const advAdvancedFunctions = function(){};



//----------------- ----------------------------   START   --------------------------- --------------------------



//----------------- ---------------------------- exercise 01 --------------------------- --------------------------



// 1.Sort Array
// Write a function that sorts an array with numeric values in ascending or descending order, depending on an argument that is passed to it. 
// You will receive a numeric array and a string as arguments to the first function in your code. 
// If the second argument is asc, the array should be sorted in ascending order (smallest values first).
// If it is desc, the array should be sorted in descending order (largest first).
 


advAdvancedFunctions.prototype.sortArr = function (arr, a) {
    return a === "asc" ? arr.sort((x, y) => x - y) : arr.sort((x, y) => y - x);
}



//----------------- ---------------------------- exercise 02 --------------------------- --------------------------



// 2.Argument Info
// Write a function that displays information about the arguments which are passed to it (type and value) 
//and a summary about the number of each type in the following format: 
// "{argument type}: {argument value}"
// Print each argument description on a new line. At the end print a tally with counts for each type in descending order, 
//each on a new line in the following format:
// "{type} = {count}"
// If two types have the same count, use order of appearance. 
// Do NOT print anything for types that do not appear in the list of arguments.



advAdvancedFunctions.prototype.argumentInfo = function (...args) {
    let output = "";
    const count = {}
    const result = args.map(x => {
        count[typeof x] = (count[typeof x] || 0) + 1;
        return `${typeof x}: ${x} `;
    })

    result.forEach(x => output += x);
    Object.entries(count).sort((x,y) => y[1] - x[1]).map(([type, counts]) =>
        output += `${type} = ${counts} `
    )
    return output.trim();
}



//----------------- ---------------------------- exercise 03 --------------------------- --------------------------



// 3.Fibonacci
// Write a JS function that when called, returns the next Fibonacci number, starting at 0, 1. Use a closure to keep the current number.
// Input
// There will be no input.



advAdvancedFunctions.prototype.fibonacci = function() {
    let nums = [0, 0]

    return () => {
        const result = nums[0] + nums[1]
        nums = [nums[1], nums[1] + nums[0] || 1]
        return result || 1
    }
}



//----------------- ---------------------------- exercise 04 --------------------------- --------------------------



// 4.Breakfast Robot
// Your task is to write the management software for a breakfast chef robot - 
//it needs to take orders, keep track of available ingredients and output an error if something’s wrong. 
//The cooking instructions have already been installed, 
//so your module needs to plug into the system and only take care of orders and ingredients.
// And since this is the future and food is printed with nano-particle beams, 
//all ingredients are microelements - protein, carbohydrates, fat and flavours. 
//The library of recipes includes the following meals:
// apple - made with 1 carbohydrates and 2 flavour
// lemonade - made with 10 carbohydrates and 20 flavour
// burger - made with 5 carbohydrates, 7 fat and 3 flavour
// eggs - made with 5 protein, 1 fat and 1 flavour
// turkey - made with 10 protein, 10 carbohydrates, 10 fat and 10 flavour
// The robot receives instructions either to restock the supply, cook a meal or report statistics. 
//The input consists of one of the following commands:
// restock <microelement> <quantity> - increases the stored quantity of the given microelement
// prepare <recipe> <quantity> - uses the available ingredients to prepare the given meal
// report - returns information about the stored microelements, in the order described below, including zero elements
// The robot is equipped with a quantum field storage, so it can hold an unlimited quantity of ingredients, 
//but there is no guarantee there will be enough available to prepare a recipe, 
//in which case an error message should be returned. 
//Their availability is checked in the order in which they appear in the recipe, 
//so the error should reflect the first requirement that was not met.
// Submit a closure that returns the management function. The management function takes one parameter.
// Input
// Instructions are passed as a string argument to your management function. 
//It will be called several times per session, so internal state must be preserved throughout the entire session.



advAdvancedFunctions.prototype.breakfastRobot = function() {
    const ingreds = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }
    const recipes = {
        apple: parseRecipeData(0, 1, 0, 2),
        lemonade: parseRecipeData(0, 10, 0, 20),
        burger: parseRecipeData(0, 5, 7, 3),
        eggs: parseRecipeData(5, 0, 1, 1),
        turkey: parseRecipeData(10, 10, 10, 10),
    }

    function parseRecipeData(protein, carbohydrate, fat, flavour) {
        return {
            protein,
            carbohydrate,
            fat,
            flavour,
        }
    }

    function restock(ingr, x) {
        ingreds[ingr] += x
        return "Success"
    }

    function prepare(required, quantity) {
        const parsedRecipe = Object.entries(required).map(x => [
            x[0],
            x[1] * quantity,
        ])

        for (let i = 0; i < parsedRecipe.length; i++) {
            const [name, amount] = parsedRecipe[i]
            if (ingreds[name] - amount < 0) {
                return `Error: not enough ${name} in stock`
            }
        }

        parsedRecipe.forEach(([name, amount]) => (ingreds[name] -= amount))
        return "Success"
    }

    const report = () =>
        Object.entries(ingreds)
            .map(([key, value]) => `${key}=${value}`)
            .join(" ")

    const actions = {
        prepare: (r, q) => prepare(recipes[r], q),
        restock,
        report,
    }

    return s => {
        const [command, a, b] = s
            .split(" ")
            .map(x => (isNaN(x) ? x : Number(x)))

        return actions[command](a, b)
    }
}



//----------------- ---------------------------- exercise 05 --------------------------- --------------------------



// 5.Functional Sum
// Write a function that adds a number passed to it to an internal sum and returns itself with its internal sum set to the new value, so it can be chained in a functional manner. 
// Input
// Your function needs to take one numeric argument.



advAdvancedFunctions.prototype.functionalSum =  function(n) {
    let temp = 0

    function recursive(x) {
        temp += x

        return recursive;
    }
    recursive.toString = () => temp
    return recursive(n)
}



//----------------- ----------------------------   END   --------------------------- --------------------------

module.exports = advAdvancedFunctions;

