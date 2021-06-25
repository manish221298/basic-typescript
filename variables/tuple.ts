
//Tuple:- TypeScript introduced a new data type called Tuple. Tuple can contain two values of different data types.

// we need to write it into same order in which order we declared
var employee : [number, string] = [1, "manish"] 
// employee = ["rahul", 2] throw error
employee = [2, "manih"]

var person: [number, string, boolean] = [1, "Steve", true];

var user: [number, string, boolean, number, string];// declare tuple variable
user = [1, "Steve", true, 20, "Admin"];// initialize tuple variable

// we can apply array on tuple
person.push("manish")
console.log("tuple push", person)


// Tuple array 

let persons : [number, string][] // declaration
persons = [[1, "manish"], [2, "shradha"], [2, "manshi"]]
// we can perform array method also
persons.push([7,"kohli"])
console.log("array tuple", persons)
