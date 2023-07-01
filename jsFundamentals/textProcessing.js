const textProcessing = function(){};



//----------------- ----------------------------   START   --------------------------- --------------------------



//----------------- ---------------------------- exercise 01 --------------------------- --------------------------



// 1.Reveal Words
// Write a function, which receives two parameters. 
// The first parameter will be a string with some words separated by ', '.
// The second parameter will be a string which contains templates containing '*'.
// Find the word with exact same length as the template and replace it.



textProcessing.prototype.revealWords = function(a, b) {
    let words = a.split(", ")
    let sentence = b.split(" ")
    words = words.forEach(
        x => (sentence = sentence.map(y => (y.split("").every(x => x === "*") && y.length === x.length ? x : y)))
    )
    
    return sentence.join(' ')
}



//----------------- ----------------------------   END   --------------------------- --------------------------

module.exports = textProcessing;