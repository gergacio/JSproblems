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



//----------------- ---------------------------- exercise 02 --------------------------- --------------------------



// 2.Modern Times of #(HashTag)
// The input will be a single string.
// Find all special words starting with #. Word is invalid if it has anything other than letters. 
// Print the words you found without the tag each on a new line.



textProcessing.prototype.hashTag = function(str) {
    let output = "";
    str.match(/#[a-zA-Z]+/g).forEach(x => { output += x.slice(1) + " " })
    return output.trim();
}



//----------------- ---------------------------- exercise 03 --------------------------- --------------------------



// 3.Extract File
// Write a function that receives a single string - the path to a file (the '\' character is escaped)
// Your task is to subtract the file name and its extension.



textProcessing.prototype.extractFile = function(str) {
    let output = "";
    const match = str.substring(str.lastIndexOf('\\') + 1)
    const name = match.substring(0, match.lastIndexOf('.'))
    const extension = match.substring(match.lastIndexOf('.') + 1)

    output += `File name: ${name} File extension: ${extension}`;
    return output;
}



//----------------- ---------------------------- exercise 04 --------------------------- --------------------------



// 4.String Substring
// The input will be given as two separated strings.
// Write a function that checks given text for containing a given word. The comparison should be case insensitive. Once you find match, print the word and stop the program. 
// If you don't find the word print "{word} not found!"



textProcessing.prototype.stringSubstring = function(str1, str2) {
    let output = "";
    const sentence = str2.split(' ').map(x => x.toLocaleLowerCase());
    if (sentence.includes(str1.toLocaleLowerCase())) {
        output += str1;
    }else{
        output += `${str1} not found!`;
    }
    return output;
   
}



//----------------- ---------------------------- exercise 05 --------------------------- --------------------------



// 5.Replace Repeating Chars
// Write a function that receives a single string and replaces 
// any sequence of the same letters with a single corresponding letter.



textProcessing.prototype.repeatingChar = function(str) {
    let output = "";
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        if (newStr.charAt([newStr.length-1]) !== str[i]) newStr += str[i]
    }
    output += newStr;
    return output;
}



//----------------- ---------------------------- exercise 06 --------------------------- --------------------------



// 6.Pascal-Case Splitter
// You will receive a single string. 
// This string is written in PascalCase format. Your task here is to split this string by every word in it. 
// Print them joined by comma and space.



textProcessing.prototype.pascalCaseSplitter = function(str) {
    str = str.split('');
    let words = []
    str.forEach(x => {
        if (x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90) {
            words.push(x)
        } else if (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122) {
            words[words.length - 1] += x
        }
    })

    return words.join(', ')
}



//----------------- ---------------------------- exercise 07 --------------------------- --------------------------



// 7.Cut and Reverse
// The input will be a single string.
// Write a function that cuts the given string into half and reverse the two halves. 
// Print each half on a separate line.



textProcessing.prototype.cutAndReverse = function(str) {
    let output = "";
    const part1 = str.substring(0, str.length / 2).split('').reverse().join('')
    const part2 = str.substring(str.length / 2).split('').reverse().join('')
    output += `${part1} ${part2}`;
    return output;
}


//----------------- ---------------------------- exercise 08 --------------------------- --------------------------




// 8.*Hard Words
// You will receive an array which holds string and another array. 
// The string is a letter from young boy who does not yet know some words and you have to help him.
// The letter has few holes, these holes are the words unknown to the boy and you must fill them with strings
// from the array you receive at the second index. 
// If a length of the hole is 4 you have to replace it with string with the same length and so on…




//----------------- ---------------------------- exercise 09 --------------------------- --------------------------



// 9.*Password Generator
// For this problem you have to write a function which generates a password depending on input information.
// As such, you will be given an array of three strings. The first two strings will be at least 10 characters long,
//  the third one will be one word.
// Your task here is to concatenate the first two strings and replace all vowels in the concatenated string with symbols from the third string.
// First vowel must be replaced with the first character from third string, second vowel with the second character from that string and so on.
// If the third string is less than the vowels count in the newly formed string you need to start over with character on 0 index.
// When you replace all vowels reverse the new password and print it on the console in a format:
//  'Your generated password is {password}'
// Note: All replaced vowels with the characters from the third string must be upper-case, the rest of the characters are lower-case.



//----------------- ---------------------------- exercise 10 --------------------------- --------------------------



// 10. *Letters Change Numbers
// John likes Math. But he also likes the English alphabet a lot. He invented a game with numbers and letters from the English alphabet.
// The game is simple.
// You get a string consisting of a number between two letters.
// Depending on whether the letter was in front of the number or after 
// it you would perform different mathematical operations on the number to achieve the result.
// First you start with the letter before the number:
// If it's uppercase you divide the number by the letter's position in the alphabet
// If it's lowercase you multiply the number with the letter's position in the alphabet

// Then you move to the letter after the number:
// If it's uppercase you subtract its position from the resulted number
// If it's lowercase you add its position to the resulted number

// But the game became too easy for John really quick. He decided to complicate it a bit by doing the same but with multiple strings 
//  keeping track of only the total sum of all results. Once he started to solve this with more strings and bigger numbers 
//  it became quite hard to do it only in his mind. So he kindly asks you to write a program that calculates the sum of all numbers
//  after the operations on each number have been done.
// For example: You are given the sequence "A12b s17G":
// We have two strings - "A12b" and "s17G". We do the operations on each and sum them. We start with the letter before the number on the first string.
// A is Uppercase and its position in the alphabet is 1. So we divide the number 12 with the position 1 (12/1 = 12). 
// Then we move to the letter after the number. b is lowercase and its position is 2. So we add 2 to the resulted number (12+2=14). 
// Similarly for the second string s is lowercase and its position is 19 so we multiply it with the number (17*19 = 323). 
// Then we have Uppercase G with position 7, so we subtract it from the resulted number (323 - 7 = 316). 
// Finally, we sum the 2 results and we get 14 + 316=330.


//----------------- ----------------------------   END   --------------------------- --------------------------

module.exports = textProcessing;