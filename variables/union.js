// UNION:- TypeScript allows us to use more than one data type for a variable or a function parameter.
var uni;
uni = 87;
uni = "manish";
// uni = true   giving error (because i define here only number and string type not boolean type)
var unio;
unio = 87;
unio = "manish";
unio = true;
function show(code) {
    if (typeof (code) === "number") {
        return "type of code is number";
    }
    else if (typeof (code) === "string") {
        return "type of code is string";
    }
}
console.log(show(123));
console.log(show("manish"));
// show(true)  giving error (because i define here only number and string type not boolean type)
//show(true) 
