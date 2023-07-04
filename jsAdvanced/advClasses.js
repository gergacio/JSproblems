const advClasses = function(){};



//----------------- ----------------------------   START   --------------------------- --------------------------



//----------------- ---------------------------- exercise 01 --------------------------- --------------------------



// 1.Rectangle
// Write a class Rectangle for a rectangle object. 
//It needs to have a width (Number), height (Number) and color (String) properties, 
//which are set from the constructor and a calcArea() method, 
//that calculates and returns the rectangle’s area.



advClasses.prototype.rectangle = function() {

    class Rectangle {
    constructor (w, h, c) {
        this._width = w
        this._height = h
        this._color = c
    }

    get width () { return this._width }
    get height () { return this._height }
    get color () {
        return this._color.charAt(0).toLocaleUpperCase() + this._color.slice(1)
    }

    calcArea = () => this._width * this._height;
    }

    return Rectangle;

}



//----------------- ---------------------------- exercise 02 --------------------------- --------------------------



// 2.Data Class
// Write a class Request that holds data about an HTTP request. It has the following properties:
// method (String)
// uri (String)
// version (String)
// message (String)
// response (String)
// fulfilled (Boolean)
// The first four properties (method, uri, version, message) are set trough the constructor, in the listed order. 
// The response property is initialized to undefined and the fulfilled property is initially set to false.



advClasses.prototype.dataClass = function(){
    class Request {
        constructor (m, u, v, msg) {
            this.method = m
            this.uri = u
            this.version = v
            this.message = msg
            this.response = undefined
            this.fulfilled = false
        }
    }
    return Request;
}



//----------------- ---------------------------- exercise 03 --------------------------- --------------------------



// 3.Tickets
// Write a program that manages a database of tickets. A ticket has a destination, a price and a status. 
// Your program will receive two arguments - the first is an array of strings for ticket descriptions and
// the second is a string, representing a sorting criterion. 
// The ticket descriptions have the following format:<destinationName>|<price>|<status>
// Store each ticket and at the end of execution return a sorted summary of all tickets, sorted by either destination, price or status, 
// depending on the second parameter that your program received. Always sort in ascending order (default behavior for alphabetical sort). 
// If two tickets compare the same, use order of appearance. See the examples for more information.



advClasses.prototype.tickets = function  (data, crit) {
    class Ticket {
        price
        constructor (d, p, s) {
            this.destination = d
            this.price = p
            this.status = s
        }
    }

    return data.slice().map(x => x.split('|'))
               .map(([d, p, s]) => new Ticket(d, Number(p), s))
               .sort((a, b) => {
                   return typeof a[crit] === 'number'? a[crit] - b[crit]: a[crit].localeCompare(b[crit])
               });
}



//----------------- ---------------------------- exercise 04 --------------------------- --------------------------


//----------------- ---------------------------- exercise 05 --------------------------- --------------------------



//----------------- ---------------------------- exercise 06 --------------------------- --------------------------




//----------------- ---------------------------- exercise 07 --------------------------- --------------------------





//----------------- ---------------------------- exercise 08 --------------------------- --------------------------

module.exports = advClasses;





//----------------- ----------------------------   END   --------------------------- --------------------------

