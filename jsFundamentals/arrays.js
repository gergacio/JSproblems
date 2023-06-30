const arrays = function(){};



//----------------- ----------------------------   START   --------------------------- --------------------------



//----------------- ---------------------------- exercise 01 --------------------------- --------------------------



// 1.Add or Subtract
// Write a function, which changes the value of odd and even numbers in an array of numbers. 
// If the number is even - add to its value its index position
// If the number is odd - subtract to its value its index position
// Output
//On the first line print the newly modified array, on the second line print the sum of numbers from the original array,
// on the third line print the sum of numbers from the modified array.



arrays.prototype.addAndSubtract = function(arr) {
    const copy = arr.slice()
    function sumArray(arr) {
        return arr.reduce((a, v) => a + v)
    }
    arr = arr.map((x, i) => (x % 2 === 0 ? x + i : x - i))

    return `[ ${arr.join(', ')} ], ${sumArray(copy)}, ${sumArray(arr)}`;
}



//----------------- ---------------------------- exercise 02 --------------------------- --------------------------



// 2.Common Elements
// Write a function, which prints common elements in two string arrays. 



arrays.prototype.commonElements = function (arr1, arr2) {
    const items = arr1.filter(x => arr2.includes(x))
    return items.join(", ");
 
}



//----------------- ---------------------------- exercise 03 --------------------------- --------------------------



// 3.Merge Arrays
// Write a function which receives two string arrays and merges them into a third array.  
// If the index of the element is even, add into the third array the sum of both elements at that index
// If the index of the element is odd, add the concatenation of both elements at that index
// Input
// As input you will receive two string arrays.
// Output
// As output you should print the resulting third array, each element separated by " - ".



arrays.prototype.mergeArrays = function(arr1, arr2) {
    const result = arr1.map((x, i) => (i % 2 === 0 ? Number(x) + Number(arr2[i]) : x + arr2[i]))
    return result.join(" - ")
}


//----------------- ---------------------------- exercise 04 --------------------------- --------------------------



// 4.Array Rotation
// Write a function that receives an array and number of rotations you have to perform (first element goes at the end). 
// Output
// Print the resulting array elements separated my single space.



arrays.prototype.rotation = function(arr, n) {
    for (let i = 0; i < n; i++) {
        const item = arr.shift()
        arr.push(item)
    }

    return arr.join(' ')
}



//----------------- ---------------------------- exercise 05 --------------------------- --------------------------



// 5.Max Number
// Write a function to find all the top integers in an array. A top integer is an integer which is bigger than all the elements to its right. 
// Output
// Print all top integers on the console, separated by single space.


arrays.prototype.maxNumber = function(arr) {
    return arr.filter((x, i) => arr.slice(i + 1).every(y => x > y)).join(' ')
}



//----------------- ---------------------------- exercise 06 --------------------------- --------------------------



// 6.Equal Sums
// Write a function that determines if there exists an element in the array of numbers such that the sum of the elements on its left is equal to the sum of the elements on its right. 
// If there are NO elements to the left/right, their sum is 0. 
// Print the index that satisfies the required condition or "no" if there is no such index.



arrays.prototype.equalSums = function(arr) {
    let index = "no"
    arr.forEach((_, i) => {
        const leftSum = arr.slice(0, i + 1).reduce((a, v) => a + v, 0)
        const rightSum = arr.slice(i).reduce((a, v) => a + v, 0)
        if (leftSum === rightSum) index = i
    })
    return index
}



//----------------- ---------------------------- exercise 07 --------------------------- --------------------------



// 7.Max Sequence of Equal Elements
// Write a function that finds the longest sequence of equal elements in an array of numbers. 
// If several longest sequences exist, print the leftmost one.



arrays.prototype.maxSeqOfEqualSums = function foo(arr) {
    let longestSequences = []
    arr.reduce((a, v) => {
        a.push(v)
        if (a.every(x => x === v)) {
            if (a.length > longestSequences.length) longestSequences = a.slice()
            return a
        } else {
            return [v]
        }
    }, [])

    return longestSequences.join(' ')
}

//----------------- ---------------------------- exercise 08 --------------------------- --------------------------



// 8.Magic Sum
// Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number. 



arrays.prototype.magicSum = function(arr, n) {
    let output = "";
    for (let i = 0; i < arr.length - 1; i++) {
        let sum = 0;
        for (let y = i + 1; y < arr.length; y++) {
            if (arr[i] + arr[y] === n){
                output += `${arr[i]} ${arr[y]}\n`;
            }
            
        }
    
    }
    return output.trim();
}





//----------------- ----------------------------   END   --------------------------- --------------------------

module.exports = arrays;