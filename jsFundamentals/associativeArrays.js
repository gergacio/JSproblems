const associativeArrays = function(){};



//----------------- ----------------------------   START   --------------------------- --------------------------



//----------------- ---------------------------- exercise 01 --------------------------- --------------------------



// 1.Words Tracker
// Write a function that receives an array of words and finds occurrences of given words in that sentence. 
// The input will come as array of strings. The first string will contain the words you will be looking for separated by a space. All strings after that will be the words you will be looking for. 
// Print for each word how many times it occurs. The words should be sorted by count in descending.



associativeArrays.prototype.wordTracker = function foo(arr) {
    let output = "";
    const words = new Map(
        arr
            .shift()
            .split(" ")
            .map(x => [x, 0])
    );
    arr.forEach(x => {
        if (words.get(x) !== undefined) words.set(x, words.get(x) + 1);
    })
   const result = [...words.entries()].sort((x, y) => y[1] - x[1]).forEach(x => output += `${x[0]} - ${x[1]} `);
   return output.trim();
}



//----------------- ---------------------------- exercise 02 --------------------------- --------------------------




// 2.Odd Occurrences
// Write a function that extracts all the elements of a sentence odd number of times (case-insensitive)
// The input comes as a single string. The words will be separated by a single space.



associativeArrays.prototype.occurrences = function(arr) {
    const entries = [
        ...arr
            .split(" ")
            .map(x => x.toLocaleLowerCase())
            .reduce((a, v) => (a.get(v) !== undefined ? a.set(v, a.get(v) + 1) : a.set(v, 1)), new Map())
            .entries(),
    ]
    return entries
        .filter(x => x[1] % 2 !== 0)
        .map(x => x[0])
        .join(" ")
}



//----------------- ---------------------------- exercise 03 --------------------------- --------------------------


//----------------- ---------------------------- exercise 04 --------------------------- --------------------------


//----------------- ---------------------------- exercise 05 --------------------------- --------------------------


//----------------- ---------------------------- exercise 06 --------------------------- --------------------------


//----------------- ---------------------------- exercise 07 --------------------------- --------------------------


//----------------- ---------------------------- exercise 08 --------------------------- --------------------------


//----------------- ---------------------------- exercise 09 --------------------------- --------------------------


//----------------- ---------------------------- exercise 10 --------------------------- --------------------------



//----------------- ----------------------------    END   --------------------------- --------------------------

module.exports = associativeArrays;