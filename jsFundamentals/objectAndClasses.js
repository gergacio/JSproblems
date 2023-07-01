const objectAndClasses = function(){};



//----------------- ----------------------------   START   --------------------------- --------------------------



//----------------- ---------------------------- exercise 01 --------------------------- --------------------------



// 1.Employees
// You're tasked to create a list of employees and their personal numbers.
// You will receive an array of strings. Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included). 
// Try to use an object.
// At the end print all the list employees in the following format:
//  "Name: {employeeName} -- Personal Number: {personalNum}" 



objectAndClasses.prototype.employees = function(arr) {
    let output = "";
    const obj = arr.reduce((a, v) => {
        a[v] = v.length
        return a
    }, {})

    Object.entries(obj).forEach(x => output += `Name: ${x[0]} -- Personal Number: ${x[1]} `);
    return output.trim();
}



//----------------- ---------------------------- exercise 02 --------------------------- --------------------------



// 2.Towns
// You’re tasked to create and print objects from a text table. 
// You will receive input as an array of strings, where each string represents a row of a table, with values on the row separated by pipes "|" and spaces.
// The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
// The output should be objects. Latitude and longitude must be parsed to numbers and formatted to the second decimal point!



objectAndClasses.prototype.towns = function(arr) {
 
    let objects = []
    arr.forEach(x => {
        const [town, latitude, longitude] = x.split(" | ")
        objects.push({
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        })
    })


  
    const result = JSON.stringify(objects);
    return result;
}



//----------------- ---------------------------- exercise 03 --------------------------- --------------------------



// 3.Store Provision
// You will receive two arrays. The first array represents a current stock of the local store. The second array will contain products which the store has ordered for delivery.
// The following information applies to both arrays:
// Every even index will hold the name of the product and on every odd index will hold the quantity of that product. The second array could contain products that are already in the local store. If that happens increase the quantity for the given product .You should store them into an object, and print them in the following format: (product -> quantity)
// All of the arrays values will be strings.



objectAndClasses.prototype.storeProvision = function(arr, arr1) {
    let output = "";
    isNumber = n => !isNaN(Number(n))
    const result = arr
        .concat(arr1)
        .map(x => (isNumber(x) ? Number(x) : x))
        .reduce((a, v, i, target) => {
            if (typeof v !== "number" && v !== undefined) a[v] = (a[v] || 0) + target[i + 1] || ''
            return a
        }, {})

    Object.entries(result).forEach(x => output += `${x[0]} -> ${x[1]} `);
    return output.trim();
}



//----------------- ---------------------------- exercise 04 --------------------------- --------------------------



// 4.Movies
// Write a function that stores information about movies. The info will be name, director, date. You can receive several types on input:
// "addMovie {movie name}" – add the movie
// "{movie name} directedBy {director}" – check if the movie exists and then add the director
// "{movie name} onDate {date}" – check if the movie exists and then add the date
// At the end print all the movies that have all the info (if the movie has no director, name or date, don’t print it) in JSON format.



objectAndClasses.prototype.movies = function foo(arr) {
    let output = "";
    let movies = []
    
    getMovie = value => movies.find(x => x.name === value)

    addProp = (prop, name, value) => {
        if (getMovie(name)) getMovie(name)[prop] = value
    }

    const actions = {
        addMovie: x => movies.push({ name: x }),
        directedBy: addProp.bind(undefined, "director"),
        onDate: addProp.bind(undefined, "date"),
    }

    arr.forEach(x => {
        if (x.split(" ")[0] === "addMovie") {
            let arr = x.split(" ")
            arr.shift()
            actions.addMovie(arr.join(" "))
        } else if (x.split("directedBy").length > 1) {
            let array = x.split("directedBy").map(x => x.trim())
            actions.directedBy(array[0], array[1])
        } else if (x.split("onDate").length > 1) {
            let array = x.split("onDate").map(x => x.trim())
            actions.onDate(array[0], array[1])
        }
    })

    movies = movies.filter(x => Object.keys(x).length === 3);
    movies.forEach(x => output += JSON.stringify(x));
    return output;
}



//----------------- ---------------------------- exercise 05 --------------------------- --------------------------



// 5.Inventory
// Create a function which creates a register for heroes, with their names, level, and items (if they have such). 
// The input comes as array of strings. Each element holds data for a hero, in the following format:
// “{heroName} / {heroLevel} / {item1}, {item2}, {item3}...” 
// You must store the data about every hero. The name is a string, the level is a number and the items are all strings.
// The output is all of the data for all the heroes you’ve stored sorted ascending by level and the items are sorted alphabetically. The data must be in the following format for each hero:
// Hero: {heroName}
// level => {heroLevel}
// Items => {item1}, {item2}, {item3}



objectAndClasses.prototype.inventory = function(data) {
    let output = "";
    let heroesData = []
    data.forEach(x => {
        const [name, level, items] = x.split("/")
        heroesData.push({
            name,
            level: Number(level),
            items: items
                .split(", ")
                .map(x => x.trim())
                .sort((x, y) => x.localeCompare(y))
                .join(", "),
        })
    })

    heroesData.sort((x, y) => x.level - y.level).forEach(x => output += `Hero: ${x.name} level => ${x.level} items => ${x.items} `);
    return output.trim();

}



//----------------- ---------------------------- exercise 06 --------------------------- --------------------------



// 6.Make a Dictionary
// You will receive an array with strings in the form of JSON's. 
// You have to parse these strings and combine them into one object. Every string from the array will hold terms and a description. If you receive the same term twice replace it with the new definition.
// Print every term and definition in that dictionary on new line in format:
// Term: ${term} => Definition: ${definition}
// Don't forget to sort the dictionary alphabetically by the terms as in real dictionaries.



objectAndClasses.prototype.makeDictionary = function(data) {
    let output = "";
    let result = {};
    data.forEach(x => {
        const parsed = JSON.parse(x)
        const key = Object.keys(parsed)[0]
        const value = Object.values(parsed)[0]
        result[key] = value
    });

    Object.entries(result).sort((x,y) => x[0].localeCompare(y[0])).forEach(x => output += `Term: ${x[0]} => Definition: ${x[1]}` );
    return output.trim();
}



//----------------- ---------------------------- exercise 07 --------------------------- --------------------------



// 7.Class Vehicle
// Create a class with name Vehicle that has the following properties:
// type – a string
// model – a string
// parts – an object that contains:
// oengine – number (quality of the engine)
// opower – number
// oquality – engine * power
// fuel – a number
// drive – a function that receives fuel loss and decreases the fuel of the vehicle by that number
// The constructor should receive the type, the model, the parts as an object and the fuel
// In judge post your class (Note: all names should be as described)





objectAndClasses.prototype.vehicle = function(){
    let output = "";
    class Vehicle {
        type = ""
        model = ""
        parts = {
            engine: 0,
            power: 0,
            quality: 0,
        }
        fuel = 0;
        constructor(type, model, parts, fuel) {
            ;(this.type = type),
                (this.model = model),
                (this.parts = { ...parts, quality: parts.engine * parts.power }),
                (this.fuel = fuel)
        }
    
        drive = x => (this.fuel -= x)
    }
    let parts = { engine: 6, power: 100 };
    let vehicle = new Vehicle('a', 'b', parts, 200);
    vehicle.drive(100);
 
    output += vehicle.fuel;
    return output;
    
}

//----------------- ----------------------------   END   --------------------------- --------------------------
module.exports = objectAndClasses;