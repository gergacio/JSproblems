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



// 3.Piccolo
// Write function that:
// Records a car number for every car that enters the  parking lot
// Removes a car number when the car goes out
// Input will be array of strings in format [direction, carNumber]
// Print the output with all car numbers which are in the parking lot sorted in ascending by number



associativeArrays.prototype.piccolo = function(arr) {
    let output = "";
    arr = arr.map(x => x.split(", "));
    let result = arr.reduce((a, v) => {
        if (v[0] === "IN" && !a.includes(v[1])) a.push(v[1])
        else if (v[0] === 'OUT' && a.includes(v[1])) {
            a.splice(
                a.findIndex(x => x === v[1]),
                1
            )
        }
        return a
    }, [])

    result.length === 0 ? output += "Parking Lot is Empty" : output += result.sort().join("\n");
    return output;
}



//----------------- ---------------------------- exercise 04 --------------------------- --------------------------



// 4.Party Time
// There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. When guests come to the party check if he/she exists in any of the two reservation lists. 
// The input will come as array of strings. You will be given the list with the guests before you receive a command "PARTY"
// All reservation numbers will be with 8 chars
// All VIP numbers start with digit
// When you receive the command "PARTY" the guests start coming.
// Output all guest, who didn't come to the party (VIP must be first) 



associativeArrays.prototype.partyTime = function(arr) {
    let output = "";
    let i = 0;
    let vips = [];
    let regulars = [];

    function isRegular(str) {
        return isNaN(Number(str.charAt(0)));
    }
    while (arr[i] !== "PARTY") {
        if (isRegular(arr[i])) regulars.push(arr.shift())
        else vips.push(arr.shift())
    }
    arr.shift();
    i = 0;
    while (arr[i] !== undefined) {
        if (vips.includes(arr[i]) || regulars.includes(arr[i])) {
            if (isRegular(arr[i])) {
                const index = regulars.indexOf(arr[i]);
                regulars.splice(index, 1);
            } else {
                const index = vips.indexOf(arr[i]);
                vips.splice(index, 1);
            }
        }
        i += 1;
    }

    output += vips.length + regulars.length + " ";
    output += vips.join("\n ") + " ";
    output += regulars.join("\n") + " ";
    return output.trim();
}



//----------------- ---------------------------- exercise 05 --------------------------- --------------------------




// 5.Card Game
// You are given a sequence of people and for every person what cards he draws from the deck. The input will be array of strings. Each string will be in format:
// {personName}: {PT, PT, PT,… PT}
// Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card and T (S, H, D, C) is the type. The name can contain any ASCII symbol except ':'. The input will always be valid and in the format described, there is no need to check it.
// A single person cannot have more than one card with the same power and type, if he draws such a card he discards it. The people are playing with multiple decks. Each card has a value that is calculated by the power multiplied by the type. Powers 2 to 10 have the same value and J to A are 11 to 14. Types are mapped to multipliers the following way (S -> 4, H-> 3, D -> 2, C -> 1).
// Finally print out the total value each player has in his hand in the format:
// {personName}: {value}



associativeArrays.prototype.cardGame = function(arr) {
    let output = "";
    let result = []
    const faces = {
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        J: 11,
        Q: 12,
        K: 13,
        A: 14,
    }
    const types = {
        S: 4,
        H: 3,
        D: 2,
        C: 1,
    }

    arr = arr
        .map(x => x.split(": "))
        .reduce((a, v) => {
            a.get(v[0]) === undefined ? a.set(v[0], v[1]) : a.set(v[0], a.get(v[0]) + ", " + v[1])
            return a
        }, new Map())

    arr.forEach((x, y) => {
        x = x.split(", ").filter((x1, i, arr) => !arr.slice(i + 1).some(y => y === x1))
        result.push([y, x])
    })
    result.forEach(x => {
        x[1] = x[1].reduce((a, v) => {
            const [x, y, z] = v.split("")
            z === undefined ? (a += faces[x] * types[y]) : (a += faces[x + y] * types[z])
            return a
        }, 0)
    })

    result.forEach(x => output += `${x[0]}: ${x[1]} `);
    return output.trim();
}



//----------------- ---------------------------- exercise 06 --------------------------- --------------------------



// 6.Travel Time
// Write a function that collects and orders information about traveling destinations.
// As input you will receive an array of strings.
// Each string will consist of the following information with format:
// "Country name > Town name > Travel cost"
// Country name will be unique string, Town name will also be unique string, Travel cost will be a number.
// If you receive the same Town name twice, you should keep the cheapest offer. 
// Have in mind that one Country may have several Towns to visit.
// After you finish the organizational part, you need to let Steven know which destination point to visit first. 
// The order will be as follows:  
// First sort Country names alphabetically and then sort by lowest Travel cost.



associativeArrays.prototype.travelTime = function (arr) {
    let output = "";
    let data = {}
    arr.forEach(x => {
        const [country, town, price] = x.split(" > ")
        if (data[country] === undefined) data[country] = {}
        if (data[country][town] === undefined) data[country][town] = Number(price)
        if (data[country][town] > Number(price)) data[country][town] = Number(price)
    })

    arr = Object.entries(data).sort((x, y) => x[0].localeCompare(y[0]))
    arr = arr.map(x => [x[0], Object.entries(x[1]).sort((x, y) => x[1] - y[1])])
    arr.forEach(x => {
        output += `${x[0]} -> ${x[1].reduce((a, v) => (a += `${v[0]} -> ${v[1]} `), "").trim()} `;
    })
    return output.trim();
}



//----------------- ---------------------------- exercise 07 --------------------------- --------------------------



// 7.Company Users
// Write a function which keeps information about companies and their employees. 
// You will receive array of strings containing company name and employee's id. 
// Add each employee to the given company. Keep in mind that a company cannot have two employees with the same id.
// When you finish reading data, order the companies by the name in ascending order. 
// Print the company name and each employee's id in the following format:
// {companyName}
// -- {id1}
// -- {id2}
// -- {idN}



associativeArrays.prototype.companyUsers = function(arr) {
    let output = "";
    let db = {}
    arr.forEach(x => {
        const [company, employee] = x.split(" -> ")
        if (db[company] === undefined) db[company] = []
        if (!db[company].includes(employee)) db[company].push(employee)
    })
    const result = Object.entries(db).sort((x, y) => x[0].localeCompare(y[0]))
    result.forEach(x => {
        output += `${x[0]} `;
        x[1].forEach(x => output += `-- ${x} `);
    })
    return output.trim();
}


//----------------- ---------------------------- exercise 08 --------------------------- --------------------------



// 8.A Miner Task
// You are given an array of strings. Every odd string is representing a resource (e.g. Gold, Silver, Copper, and so on), and every even – quantity. Your task is to collect the resources and print them each on a new line. 
// Print the resources and their quantities in format:
// {resource} –> {quantity}
// The quantities inputs will be in the range [1 … 2 000 000 000]



associativeArrays.prototype.minerTask = function(arr) {
    let output = "";
    let result = {}
    for (let i = 0; i < arr.length; i += 1) {
        if (i % 2 === 0) {
            if (result[arr[i]] === undefined) result[arr[i]] = 0
        } else {
            result[arr[i - 1]] += Number(arr[i])
        }
    }

    let res = Object.entries(result).forEach(x => output += `${x[0].toLowerCase()} -> ${x[1]} `);
    return output.trim();
}



//----------------- ----------------------------    END   --------------------------- --------------------------

module.exports = associativeArrays;