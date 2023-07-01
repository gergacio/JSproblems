const arraysAdvanced = function(){};



//----------------- ----------------------------   START   --------------------------- --------------------------



// 1.Train
// You will be given an array of strings.
// The first element will be a string containing wagons (numbers). Each number inside the string represents the number of passengers that are currently in a wagon. 
// The second element in the array will be the max capacity of each wagon (single number).
// The rest of the elements will be commands in the following format:
// Add {passengers} – add a wagon to the end with the given number of passengers.
// {passengers} -  find an existing wagon to fit all the passengers (starting from the first wagon)
// At the end print the final state of the train (all the wagons separated by a space)



arraysAdvanced.prototype.train = function(arr) {
    let wagons = arr
        .shift()
        .split(" ")
        .map(x => Number(x))
    const maxSeats = Number(arr.shift());

    function addPassengers(n) {
        for (let i = 0; i < wagons.length; i++) {
            if (wagons[i] + n <= maxSeats) {
                wagons[i] += n;
                break;
            }
        }
    }

    function add(value) {
        wagons.push(value);
    }

    arr.forEach(x => {
        const [command, value] = x.split(" ");
        value ? add(Number(value)) : addPassengers(Number(command));
    })

    return wagons.join(" ");
}



//----------------- ---------------------------- exercise 02 --------------------------- --------------------------



// 2.Distinct Array
// You will be given an array of integer numbers on the first line of the input (space-separated). 
// Remove all repeating elements from the array. 
// Print the result elements separated by single space.



arraysAdvanced.prototype.distinctArray = function(arr) {
    return arr.reduce((a, v) => {
        if (!a.includes(v)) a.push(v)
        return a
    }, []).join(' ')
}



//----------------- ---------------------------- exercise 03 --------------------------- --------------------------



// 3.House Party
// Write a function that keeps track of guests that are going to a house party.
// You will be given an array of strings. Each string will be one of the following:
// -"{name} is going!"
// -"{name} is not going!"
// If you receive the first type of input, you have to add the person if he/she is not in the list (If he/she is in the list print: "{name} is already in the list!").
// If you receive the second type of input, you have to remove the person if he/she is in the list (if not print: "{name} is not in the list!"). 
// At the end print all the guests each on a separate line.




arraysAdvanced.prototype.houseParty = function(arr) {
    let output = "";
    let going = [];
    arr.forEach(x => {
        const data = x.split(" ")
        if (data.length === 3) {
            going.includes(data[0]) ? output += `${data[0]} is already in the list!` : going.push(data[0]);
        } else {
            going.includes(data[0])
                ? (going = going.filter(x => x !== data[0]))
                : output = `${data[0]} is not in the list!`;
        }
    })

    going.forEach(x => console.log(x));
    return output + going.join("");
}



//----------------- ---------------------------- exercise 04 --------------------------- --------------------------



// 4.Sorting
// Write a function that sorts an array of numbers so that the first element is the biggest one, 
//the second is the smallest one, the third is the second biggest one, the fourth is the second smallest one and so on. 
// Print the elements on one row, separated by single space.



arraysAdvanced.prototype.sorting = function(arr) {
    let sliced = arr.slice()
    const biggestNums = arr.sort((x, y) => y - x)
    const lowestNums = sliced.sort((x, y) => x - y)
    const concatArray = []

    biggestNums.forEach((x, i) => {
        concatArray.push(x)
        concatArray.push(lowestNums[i])
    })
     return concatArray.splice(concatArray.length / 2) .reverse().join(" ") 
}



//----------------- ---------------------------- exercise 05 --------------------------- --------------------------



// 5. Sort an Array by 2 Criteria
// Write a function that orders an array of strings, by their length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
// The input comes as array of strings.
// The output is the ordered array of strings.



arraysAdvanced.prototype.sortAnArrayBy2Criteria = function(arr) {
    return arr
        .sort((x, y) => {
            return x.length - y.length !== 0
                ? x.length - y.length
                : x.toLocaleLowerCase().localeCompare(y.toLocaleLowerCase())
        })
        .join(" ");
}



//----------------- ---------------------------- exercise 06 --------------------------- --------------------------



// 6.Bomb Numbers
// Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power. 
// Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors from left and right. 
// Detonations are performed from left to right and all detonated numbers disappear. 
// The input contains two arrays of numbers. The first contains the initial sequence and the second contains the special bomb number and it's power.
// The output is the sum of the remaining elements in the sequence.



arraysAdvanced.prototype.bombNumbers = function(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[0]) {
            arr1.splice(i - arr2[1] > 0 ? i - arr2[1] : 0, arr2[1] * 2 + 1)
            i = 0
        }
    }

    return arr1.reduce((a, v) => a + v, 0);
  

}

//----------------- ---------------------------- exercise 07 --------------------------- --------------------------



// 7.Search for a Number
// You will receive two arrays of integers. The second array is contains exactly three numbers. 
// First number represents the number of elements you have to take from the first array (starting from the first one).
// Second number represents the number of elements you have to delete from the numbers you took (starting from the first one). 
// Third number is the number we search in our collection after the manipulations. 
// As output print how many times that number occurs in our array in the following format: 
// "Number {number} occurs {count} times."



arraysAdvanced.prototype.searchForNumbers = function(arr, arr1) {
    let result = arr.slice(0, arr1[0])
    result.splice(0, arr1[1])
    result = result.filter(x => x === arr1[2])
    
    return `Number ${arr1[2]} occurs ${result.length} times.`;
}



//----------------- ---------------------------- exercise 08 --------------------------- --------------------------



// 8. *Array Manipulator
// Write a function that receives an array of integers and array of string commands and executes them over the array. 
// The commands are as follows:
// add <index> <element> – adds element at the specified index (elements right from this position inclusively are shifted to the right).
// addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.
// contains <element> – prints the index of the first occurrence of the specified element (if exists) in the array or -1 if the element is not found.
// remove <index> – removes the element at the specified index.
// shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
// oFor example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
// sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
// oFor example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
// print – stop receiving more commands and print the last state of the array.



arraysAdvanced.prototype.arrayManipulator = function(arr, commands) {
    let output = "";
    const actions = {
        add: (i, e) => add(i, e),
        addMany: (i, e) => add(i, e),
        contains: i => contains(i),
        shift: p => shift(p),
        remove: i => remove(i),
        sumPairs: sumPairs,
        print: print,
    }
    let printed = false

    function add(i, e) {
        arr.splice(Number(i), 0, ...e.map(x => Number(x)))
    }

    function contains(e) {
        console.log(arr.findIndex(x => x === Number(e)))
    }

    function remove(i) {
        arr.splice(i, 1)
    }

    function shift(p) {
        for (let j = 0; j < p; j++) {
            let element = arr.shift()
            arr.push(element)
        }
    }

    function sumPairs() {
        let result = []
        for (let i = 0; i < arr.length; i += 2) {
            result.push(arr[i + 1] ? arr[i] + arr[i + 1] : arr[i])
        }
        arr = result
    }

    function print() {
       
        printed = true
        if (arr.length > 0) {
            output += `[ ${arr.join(", ")} ]`;
        } else {
            output = `[]`;
        }
        output;
    }

    commands.forEach(x => {
        if (!printed) {
            const [action, param1, ...param2] = x.split(" ")
            actions[action](Number(param1), param2)
        }
    })
    return output;
}



//----------------- ---------------------------- exercise 09 --------------------------- --------------------------


//----------------- ---------------------------- exercise 10 --------------------------- --------------------------

//----------------- ----------------------------   END   --------------------------- --------------------------

module.exports = arraysAdvanced;