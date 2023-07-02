const advArraysNestedArr = function(){};



//----------------- ----------------------------   START   --------------------------- --------------------------



//----------------- ---------------------------- exercise 01 --------------------------- --------------------------



// 1.Print an Array with a Given Delimiter
// The input comes as two parameters – an array of strings and a string. 
// The second parameter is the delimiter.
// The output is the elements of the array, printed on the console, 
// each element separated from the others by the given delimiter.



advArraysNestedArr.prototype.printArrWithGivenDelimiter = function(arr, d) {
    return arr.join(d)
}



//----------------- ---------------------------- exercise 02 --------------------------- --------------------------



// 2.Print Every N-th Element from an Array 
// The input comes as two parameters – an array of strings and a number. The second parameter is N – the step.
// The output is every element on the N-th step starting from the first one. If the step is 3, you need to print the 1-st, the 4-th, the 7-th … and so on, until you reach the end of the array. 
// The output is the return value of your function and must be an array.



advArraysNestedArr.prototype.printEverNthElemFromArr = function(arr, s) {
    const result = []
    for (let i = 0; i < arr.length; i += s) {
        result.push(arr[i]);
    }

    return result.join(' ');;
}



//----------------- ---------------------------- exercise 03 --------------------------- --------------------------



// 3.Add and Remove Elements  
// Write a JS function that adds and removes numbers to / from an array. You will receive a command which can either be "add" or "remove". 
// The initial number is 1. Each input command should increase that number, regardless of what it is.
// Upon receiving an "add" command you should add the current number to your array. 
// Upon receiving the "remove" command you should remove the last entered number, currently existent in the array.
// The input comes as an array of strings. Each element holds a command. 
// The output is the element of the array, each printed on a new line. In case of an empty array, just print "Empty".



advArraysNestedArr.prototype.addRemoveElem = function (arr) {
    let count = 1
    const temp = []
    const actions = {
        add: x => temp.push(x),
        remove: () => temp.pop(),
    }

    arr.forEach(x => actions[x](count++))
    return temp.length !== 0 ? temp.join("\n") : "Empty"
}



//----------------- ---------------------------- exercise 04 --------------------------- --------------------------



// 4.Rotate Array
// Write a JS function that rotates an array. The array should be rotated to the right side,
// meaning that the last element should become the first, upon rotation. 
// The input comes as two parameters – an array of strings and a number. 
//The second parameter is the amount of rotation you need to perform.
// The output is the resulted array after the rotations. 
//The elements should be printed on one line, separated by a single space.



advArraysNestedArr.prototype.rotateArray = function(arr, n) {
    for (let i = 0; i < n; i++) {
        arr.unshift(arr.pop())
    }

    return arr.join(" ")
}



//----------------- ---------------------------- exercise 05 --------------------------- --------------------------



// 5.Extract Increasing Subsequence from Array
// Write a function that extracts only those numbers that form a non-decreasing subsequence. 
//In other words, you start from the first element and continue to the end of the given array of numbers. 
//Any number which is LESS THAN the current biggest one is ignored, alternatively if it’s equal or higher than 
//the current biggest one you set it as the current biggest one and you continue to the next number. 
// The input comes as an array of numbers.
// The output is the processed array after the filtration, which should be a non-decreasing subsequence. 
//Return the array of numbers.



advArraysNestedArr.prototype.ExtractIncSubseqFromArr = function(arr) {
    return arr.reduce((a, v) => {
        if (v >= (a[a.length - 1] || arr[0])) {
            a.push(v)
        }
        return a
    }, []).join("");
}



//----------------- ---------------------------- exercise 06 --------------------------- --------------------------



// 6.List of Names
// You will receive an array of names. 
//Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.



advArraysNestedArr.prototype.listOfNames = function (arr) {
    let output = "";
    arr = arr.sort((a, b) => a.localeCompare(b))
    arr.forEach((x, i) => output += `${i+1}.${x} `);
    return output.trim();
}



//----------------- ---------------------------- exercise 07 --------------------------- --------------------------



// 7.Sorting Numbers
// Write a function that sorts an array of numbers so that the first element is the smallest one, 
//the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one and so on. 
// Return the resulting array.



advArraysNestedArr.prototype.sortNum = function(arr) {
    let i = arr.length - 1
    return arr
        .sort((a, b) => a - b)
        .reduce((a, v, _, tArr) => {
            a.push(v)
            a.push(tArr[i--])
            return a
        }, [])
        .slice(0, arr.length).join(", ");
}



//----------------- ---------------------------- exercise 08 --------------------------- --------------------------



// 8.Sort an Array by 2 Criteria
// Write a function that orders a given array of strings, by length in ascending order as primary criteria, 
//and by alphabetical value in ascending order as second criteria. 
//The comparison should be case-insensitive.
// The input comes as an array of strings.
// The output is the elements of the ordered array of strings, printed each on a new line.



advArraysNestedArr.prototype.sortArrBy2Criteria = function(arr) {
    return arr
        .sort((a, b) =>
            a.length - b.length === 0
                ? a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase())
                : a.length - b.length
        )
        .join("\n")
}





//----------------- ---------------------------- exercise 09 --------------------------- --------------------------



// 9.Magic Matrices
// Write a function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of every row and every column are equal. 
// The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.
// The output is a Boolean result indicating whether the matrix is magical or not.



//----------------- ---------------------------- exercise 10 --------------------------- --------------------------



// 10.*Tic-Tac-Toe
// Make a tic-tac-toe console application.
// You will receive an array of arrays. As you know there are two players in this game, so the first element of the input will be first player's chosen coordinates, the second element will be the second player's turn coordinates and so on.
// The initial state of the dashboard is
// [[false, false, false],
// [false, false, false],
// [false, false, false]]
// The first player's mark is X and the second player's mark is O.

//----------------- ----------------------------   END   --------------------------- --------------------------

module.exports = advArraysNestedArr;

