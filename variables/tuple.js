//Tuple:- TypeScript introduced a new data type called Tuple. Tuple can contain two values of different data types.
// we need to write it into same order in which order we declared
var employee = [1, "manish"];
// employee = ["rahul", 2] throw error
employee = [2, "manih"];
var person = [1, "Steve", true];
var user; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable
// we can apply array on tuple
person.push("manish");
console.log("tuple push", person);
// Tuple array 
var persons; // declaration
persons = [[1, "manish"], [2, "shradha"], [2, "manshi"]];
// we can perform array method also
persons.push([7, "kohli"]);
console.log("array tuple", persons);
