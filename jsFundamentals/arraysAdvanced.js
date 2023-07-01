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



//----------------- ---------------------------- exercise 01 --------------------------- --------------------------


//----------------- ---------------------------- exercise 01 --------------------------- --------------------------


//----------------- ---------------------------- exercise 01 --------------------------- --------------------------



//----------------- ---------------------------- exercise 01 --------------------------- --------------------------


//----------------- ---------------------------- exercise 01 --------------------------- --------------------------


//----------------- ---------------------------- exercise 01 --------------------------- --------------------------


//----------------- ---------------------------- exercise 01 --------------------------- --------------------------


//----------------- ---------------------------- exercise 01 --------------------------- --------------------------


//----------------- ---------------------------- exercise 01 --------------------------- --------------------------

//----------------- ----------------------------   END   --------------------------- --------------------------

module.exports = arraysAdvanced;